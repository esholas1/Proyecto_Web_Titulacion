import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import postulantePerfilRoutes from "./routes/postulantePerfil.routes";
import jobRoutes from './routes/jobs.routes';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/postulante/perfil", postulantePerfilRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', require('./routes/aplications.routes').default);
app.use('/api/recruiter', require('./routes/recruiter.routes').default);
app.use('/api/postulante', require('./routes/postulante.routes').default);
app.use('/api/categories', require('./routes/categories.routes').default);

//Test
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "API funcionando correctamente" });
});

import prisma from "./config/prisma";

app.get("/api/test-db", async (_req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json({ ok: true, total: users.length });
  } catch (error: any) {
  res.json({ ok: false, error: error.message });
}
});

export default app;
