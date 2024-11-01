import { success } from "../../utils/response.js";

export const getStato = (req, res) => {
	success(res, {
		status: "OK",
		message: "Versione API 1 - Il server è attivo!",
		timestamp: new Date().toISOString(),
	});
};
