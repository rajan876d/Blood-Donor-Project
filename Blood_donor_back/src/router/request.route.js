import express from "express";
import Bloodrequestcontroller from "../controllers/BloodRequest.controller.js";

const router = express.Router();

router.post("/request",Bloodrequestcontroller.Bloodrequest);

export default router;