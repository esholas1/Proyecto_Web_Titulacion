import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import jobRoutes from './routes/jobs.routes'; 
import applicationRoutes from './routes/applications.routes';

const app = express();
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);           
app.use('/api/applications', applicationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
