import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>"],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
