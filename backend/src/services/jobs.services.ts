//Maneja la logica: comunicar con la base de datos Prisma
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//Crear una nueva oferta (Vista 12 - Publicación de empleo)
export const createJob = async (data: any, recruiterId: number) => {
  return await prisma.jobOffer.create({
    data: {
      id: undefined,
      titulo: data.titulo,
      empresa: data.empresa,
      ubicacion: data.ubicacion,
      modalidad: data.modalidad,
      descripcion : data.descripcion, 
      fuente: data.fuente,
      urlOriginal: data.urlOriginal,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

  });
};

//Listar todas las ofertas con filtros (Vista 6 - Ofertas laborales) [cite: 38]
export const getAllJobs = async (filters: any) => {
  const { location, keyword } = filters;
  
  const where: any = {};
  
  if (location) {
    where.ubicacion = { contains: location, mode: 'insensitive' };
  }
  
  if (keyword) {
    where.OR = [
      { titulo: { contains: keyword, mode: 'insensitive' } },
      { ubicacion: { contains: keyword, mode: 'insensitive' } }
    ];
  }
  
  return await prisma.jobOffer.findMany({
    where,
    orderBy: { createdAt: 'desc' }
  });
};

//Obtener detalle de una oferta (Vista 7 - Detalle de oferta)
export const getJobById = async (id: number) => {
  return await prisma.jobOffer.findUnique({
    where: { id }
  });
};