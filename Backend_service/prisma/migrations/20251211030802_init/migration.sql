-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('POSTULANTE', 'RECLUTADOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'POSTULANTE',
    "fullName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostulantePerfil" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cvTexto" TEXT,
    "cvEmbedding" BYTEA,
    "carrera" TEXT,
    "ciudad" TEXT,
    "semestre" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostulantePerfil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOffer" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "ubicacion" TEXT,
    "modalidad" TEXT,
    "descripcion" TEXT NOT NULL,
    "fuente" TEXT NOT NULL,
    "urlOriginal" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobOffer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PostulantePerfil_userId_key" ON "PostulantePerfil"("userId");

-- AddForeignKey
ALTER TABLE "PostulantePerfil" ADD CONSTRAINT "PostulantePerfil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
