// src/index.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { logger } from "./utils/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import connectDB from "./config/database.js"; // Importa la funzione di connessione
import morgan from "morgan";
import routes from "./routes/index.js";

dotenv.config();

// Connessione al database
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
	logger.info(`Server in esecuzione sulla porta ${port}`);
});

export default app;
