import { Router } from "express";
import { PostulantePerfilController } from "../controllers/postulantePerfil.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";
import { uploadPDF } from "../middlewares/uploadPDF.middleware";

const router = Router();
const controller = new PostulantePerfilController();

router.use(authMiddleware);

router.get("/", controller.obtenerPerfil);
router.post(
  "/cv",
  uploadPDF.single("cv"),
  controller.subirCV
);

export default router;