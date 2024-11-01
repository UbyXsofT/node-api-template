import express from "express";
import { getStato } from "../../controllers/v1/stato.controller.js";

const router = express.Router();

router.get("/", getStato);

export default router;
