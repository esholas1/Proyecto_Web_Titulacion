import prisma from "../config/prisma";
import { Buffer } from "buffer";

const pdfParse = require("pdf-parse");

export class PostulantePerfilService {
  async procesarCV(userId: number, fileBuffer: Buffer) {
    // Convertir PDF → Texto
    const pdfData = await pdfParse(fileBuffer);
    const texto = pdfData.text;

    // Guardar texto como cvTexto
    const perfil = await prisma.postulantePerfil.upsert({
      where: { userId },
      update: { cvTexto: texto },
      create: {
        userId,
        cvTexto: texto,
      },
    });

    return perfil;
  }

  async obtenerPerfil(userId: number) {
    return prisma.postulantePerfil.findUnique({
      where: { userId },
    });
  }
}