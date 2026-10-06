import express from "express";
import userController from "../controllers/user.controller.js";


const router = express.Router();
router.get("/login",userController.createDoner);

export default router;