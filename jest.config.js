module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["."],
  modulePaths: ["."],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  coverageThreshold: {
    "./src/": {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
