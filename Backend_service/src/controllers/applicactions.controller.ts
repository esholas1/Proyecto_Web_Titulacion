import { Request, Response } from 'express';
import * as applicationService from '../services/applications.service';

export const applyHandler = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const userId = req.user?.id;
    const { jobId } = req.body;

    if (!userId || !jobId) return res.status(400).json({ message: 'Datos incompletos' });

    const application = await applicationService.createApplication(userId, Number(jobId));
    res.status(201).json(application);
    
  } catch (error: any) {

    if (error.message === 'Ya has postulado a esta oferta') {
      return res.status(409).json({ message: error.message });
    }

    res.status(500).json({ message: 'Error al postular', error });
  }

};

export const getMyApplicationsHandler = async (req: Request, res: Response) => {
  try {

    // @ts-ignore
    const userId = req.user?.id;
    
    if (!userId) return res.status(400).json({ message: 'Datos incompletos del usuario.' });
    
    const applications = await applicationService.getMyApplications(userId);
    res.json(applications);

  } catch (error) {

    res.status(500).json({ message: 'Error al obtener historial', error });
  }

};

export const getJobCandidatesHandler = async (req: Request, res: Response) => {
  try {
    const jobId = Number(req.params.jobId);
    const applications = await applicationService.getApplicationsByJob(jobId);
    res.json(applications);

  } catch (error) {

    res.status(500).json({ message: 'Error al obtener a los candidatos', error });
  
  }
  
};