import { Request, Response } from 'express';
import { PostulantePerfilService } from '../services/postulantePerfil.service';

const perfilService = new PostulantePerfilService();

export const uploadCVHandler = async (req: Request, res: Response) => {
  try {
    // 1.Validar si Multer procesó el archivo
    if (!req.file) {
      return res.status(400).json({ message: 'Por favor sube un archivo PDF válido.' });
    }

    // 2.- Obtener el ID del usuario
    const userId = (req as any).user?.id || Number(req.body.userId);

    if (!userId) {
      return res.status(401).json({ message: 'Usuario no identificado.' });
    }

    // 3.- Llamar al servicio "procesarCV"
    const perfilActualizado = await perfilService.procesarCV(userId, req.file.buffer);

    // 4.- Responder al Frontend
    res.status(200).json({
      message: 'CV subido y analizado correctamente.',
      extractedTextPreview: perfilActualizado.cvTexto?.substring(0, 100) + '...',
      data: perfilActualizado
    });

  } catch (error: any) {
    console.error('Error en uploadCVHandler:', error);
    res.status(500).json({ message: 'Error interno al procesar el CV', error: error.message });
  }
};