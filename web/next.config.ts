import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, ".."),
  outputFileTracingIncludes: {
    "/*": [
      "../logs/**/*.md",
      "../CONSTITUTION.md",
      "../metrics.csv",
    ],
  },
};

export default config;
