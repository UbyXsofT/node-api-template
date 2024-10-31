// jest.config.mjs
export default {
	testEnvironment: "node",
	transform: {
		"^.+\\.js$": "babel-jest",
	},
	transformIgnorePatterns: ["node_modules/(?!(@your-org|another-package)/)"],
	setupFiles: ["./jest.setup.js"],
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	testMatch: ["**/__tests__/**/*.[jt]s", "**/?(*.)+(spec|test).[tj]s"],
};
