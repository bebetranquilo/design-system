import type { Config } from "jest";

const config: Config = {
  verbose: true,
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
