import multer from "multer";

const storage = multer.memoryStorage();

export const uploadPDF = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      cb(new Error("Solo se permiten PDFs"));
    } else {
      cb(null, true);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});