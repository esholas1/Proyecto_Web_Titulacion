import { Request, Response } from "express";
import { PostulantePerfilService } from "../services/postulantePerfil.service";

const service = new PostulantePerfilService();

export class PostulantePerfilController {

  async subirCV(req: Request, res: Response) {
  try {
    const userId = req.user!.id;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ ok: false, message: "Debe subir un archivo PDF" });
    }

    const perfil = await service.procesarCV(userId, file.buffer);
    res.json({ ok: true, perfil });
  } catch (error: any) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

  async obtenerPerfil(req: Request, res: Response) {
    try {
      const userId = req.user!.id;
      const perfil = await service.obtenerPerfil(userId);
      res.json({ ok: true, perfil });
    } catch (error: any) {
      res.status(500).json({ ok: false, message: error.message });
    }
  }
}
