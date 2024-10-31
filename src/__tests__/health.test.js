import { getHealth } from "../controllers/health.controller.js";
import { jest } from "@jest/globals";

describe("Health Controller", () => {
	it("should return health status", () => {
		const mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		getHealth({}, mockRes);

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
