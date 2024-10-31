import { success } from "../utils/response.js";

export const getHealth = (req, res) => {
	success(res, {
		status: "OK",
		message: "Il server è attivo!",
		timestamp: new Date().toISOString(),
	});
};
