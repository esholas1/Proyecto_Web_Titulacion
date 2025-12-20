//Define los endpoints que usara el frontend
import { Router } from 'express';
import { createJobHandler, getJobsHandler, getJobDetailHandler } from '../controllers/jobs.controller';

// Importa tu middleware de autenticación aquí
// import { authenticateToken, isRecruiter } from '../middlewares/auth.middlewares';

const router = Router();

// Rutas Públicas (o protegidas según decidas)
router.get('/', getJobsHandler);       //Listar ofertas
router.get('/:id', getJobDetailHandler); //Ver detalle
router.post('/', createJobHandler); //Crear oferta


//Rutas Protegidas (Solo Reclutadores)
//router.post('/', authenticateToken, isRecruiter, createJobHandler);

export default router;