import { Router } from 'express';
import { applyHandler, getMyApplicationsHandler, getJobCandidatesHandler } from '../controllers/applicactions.controller'
// import { authenticateToken } from '../middlewares/auth.middlewares';

const router = Router();

// Rutas Postulante
// router.use(authenticateToken); // Descomentar cuando uses tokens reales
router.post('/', applyHandler); // Postular
router.get('/my-history', getMyApplicationsHandler); // Ver mis postulaciones

// Rutas Reclutador
router.get('/job/:jobId', getJobCandidatesHandler); // Ver quién postuló a mi oferta

export default router;