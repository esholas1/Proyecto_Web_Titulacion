import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


// Ruta de prueba
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "API funcionando ✅" });
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
