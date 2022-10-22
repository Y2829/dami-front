module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["."],
  modulePaths: ["."],
  moduleDirectories: ["node_modules"],
  coverageThreshold: {
    "./src/": {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
