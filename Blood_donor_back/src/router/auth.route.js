import express from "express";
import authController from "../controllers/auth.controller.js";
import { registerSchema } from "../libs/user.schemas.js";
import uservalidate from "../middleware/validator.js";

const router = express.Router();

router.post("/register",uservalidate(registerSchema),authController.register);

export default router;