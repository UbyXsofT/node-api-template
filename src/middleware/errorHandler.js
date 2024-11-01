import { error } from "../utils/response.js";
import { logger } from "../utils/logger.js";

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
	// Utilizziamo eslint-disable-next-line per ignorare l'avviso
	logger.error(`Error: ${err.message}`, {
		stack: err.stack,
		method: req.method,
		path: req.path,
	});

	const statusCode = err.statusCode || 500;
	error(
		res,
		{
			message: err.message || "Errore interno del server",
			...(process.env.NODE_ENV === "development" && { stack: err.stack }),
		},
		statusCode
	);
};
