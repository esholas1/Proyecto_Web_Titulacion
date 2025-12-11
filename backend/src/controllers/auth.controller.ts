import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, role } = req.body;

    //Verificar si email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ ok: false, message: "El usuario ya existe" });
    }

    //Hashea contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    //Registra usuario
    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        fullName,
        role,
      },
    });

    return res.json({
      ok: true,
      message: "Usuario registrado correctamente",
      userId: newUser.id,
    });
  } catch (error: any) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //Busca usuario
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ ok: false, message: "Usuario no encontrado" });
    }

    //Compara contraseñas
    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(400).json({ ok: false, message: "Contraseña incorrecta" });
    }

    //Genera token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return res.json({
      ok: true,
      message: "Login correcto",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
