import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

//Postular a un empleo (Vista 7 - Botón de postulación)
export const createApplication = async (userId: number, jobId: number) => {

  //1.- Verificar si ya existe la postulación
  const existingApplication = await (prisma as any).application.findUnique({
    where: {
      userId_jobId: { userId, jobId }
    }
  });

  if (existingApplication) {
    throw new Error('Ya has postulado a esta oferta');
  }

  //2.- Obtener datos necesarios para la IA (Perfil del Usuario y Detalles de la Oferta)
  const user = await (prisma as any).user.findUnique({
    where: { id: userId },
    include: { profile: true } // Necesitamos skills, bio y experiencia
  });

  const job = await (prisma as any).jobOffer.findUnique({
    where: { id: jobId }
  });

  //Validación: Si no tiene perfil o la oferta no existe, no podemos analizar
  if (!user?.profile) {
    throw new Error('Debes completar tu perfil profesional antes de postular.');
  }
  if (!job) {
    throw new Error('La oferta laboral no existe.');
  }

  //3.- Preparar los textos para el Microservicio de Python
  //Concatenamos la info del candidato en un solo texto
  const cvText = `
    ${user.profile.headline || ''} 
    ${user.profile.bio || ''} 
    ${(user.profile.skills || []).join(' ')} 
    ${JSON.stringify(user.profile.experience || '')}
  `;

  //Concatenamos la info de la oferta
  const jobText = `
    ${job.title} 
    ${job.description} 
    ${(job.skillsRequired || []).join(' ')}
  `;

  //Variables por defecto (por si falla la IA)
  let matchScore = 0;
  let aiFeedback = 'Analisis pendiente de procesamiento.';

  //4.- Conectar con el Microservicio de IA (Python)
  try {
    // Asegúrate de que tu servicio Python esté corriendo en el puerto 8000
    const aiResponse = await axios.post('http://localhost:8000/analyze', {
      cv_text: cvText,
      job_description: jobText
    });

    //Si responde bien, actualizamos las variables
    if (aiResponse.data) {
      matchScore = aiResponse.data.match_score;
      aiFeedback = aiResponse.data.feedback;
      console.log(`IA Analisis Exitoso: Match ${matchScore}%`);
    }

  } catch (error) {
    console.error(" Advertencia: El servicio de IA no respondió. Se guardará la postulación sin analisis.", error);
  }

  //5.- Crear la postulación guardando el resultado de la IA
  return await (prisma as any).application.create({
    data: {
      userId,
      jobId,
      status: 'PENDING',
      matchScore: matchScore,    //Guardamos el porcentaje real
      aiFeedback: aiFeedback     //Guardamos el feedback generado
    }
  });
};

//Ver mis postulaciones (Vista 10 - Estadísticas del usuario / Historial)
export const getMyApplications = async (userId: number) => {
  return await (prisma as any).application.findMany({
    where: { userId },
    include: {
      job: { //Traemos datos de la oferta para mostrar título, empresa etc
        select: {
          title: true,
          location: true,
          recruiter: { select: { email: true } }
        }
      }
    },
    orderBy: { appliedAt: 'desc' }
  });
};

//Ver candidatos de una oferta (Vista 13 - Gestión de postulantes para Reclutador)
export const getApplicationsByJob = async (jobId: number) => {
  return await (prisma as any).application.findMany({
    where: { jobId },
    include: {
      user: { 
        include: {
          profile: true //Necesario para que el reclutador vea el CV
        }
      }
    },
    orderBy: { matchScore: 'desc' } //Ordenamos para mostrar los mejores candidatos primero
  });
};