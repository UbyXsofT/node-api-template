// src/index.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { logger } from "./utils/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
	logger.info(`Server in esecuzione sulla porta ${port}`);
});

export default app;
