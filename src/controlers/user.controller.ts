import { AuthService } from "@/sevices/auth.service";
import { UserService } from "@/sevices/user.service";
import express, { Response, Request } from 'express'

export class UserController {

    static async profile(req: Request, res: Response) {
        const email = req.body.user.email
        const user = await UserService.getUserByEmail(email)
        res.status(200).json(user)

    }
}