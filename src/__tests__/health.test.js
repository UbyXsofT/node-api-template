import { getStato } from "../controllers/Stato.controller.js";
import { jest } from "@jest/globals";

describe("Stato Controller", () => {
	it("should return Stato status", () => {
		const mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		getStato({}, mockRes);

		expect(mockRes.status).toHaveBeenCalledWith(200);
		expect(mockRes.json).toHaveBeenCalledWith(
			expect.objectContaining({
				success: true,
				data: expect.objectContaining({
					status: "OK",
				}),
			})
		);
	});
});
