// src/routes/index.js
import express from "express";
import statoRouter from "./stato.routes.js";
import itemRouter from "./item.routes.js";

const router = express.Router();

router.use("/stato", statoRouter);
router.use("/items", itemRouter);

export default router;
