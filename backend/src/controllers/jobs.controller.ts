import { Request, Response } from 'express';
import * as jobService from '../services/jobs.services';

export const createJobHandler = async (req: Request, res: Response) => {
  try {
    
    const recruiterId = req.user?.id; 
    
    if (!recruiterId) return res.status(401).json({ message: 'No autorizado' });

    const job = await jobService.createJob(req.body, recruiterId);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear oferta', error });
  }
};

export const getJobsHandler = async (req: Request, res: Response) => {
  try {
    const filters = {
      location: req.query.location as string,
      keyword: req.query.keyword as string
    };
    const jobs = await jobService.getAllJobs(filters);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener ofertas', error });
  }
};

export const getJobDetailHandler = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const job = await jobService.getJobById(id);
    
    if (!job) return res.status(404).json({ message: 'Oferta no encontrada' });
    
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error interno', error });
  }
};