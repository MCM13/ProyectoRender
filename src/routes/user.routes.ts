import { Router } from "express";
import { isAuthenticate } from "@/middlewares/auth.middleware";
import { UserController } from "@/controlers/user.controller";
const router = Router()

router.get('/profile', isAuthenticate, UserController.profile)

// Crea el endpoint que liste todos los usuarios de la web
// A este endpoint solo puede acceder el usuario role-admin
// Crea rutas,servicios,controllers,middlewares

export default router