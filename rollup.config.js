import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import pkg from "./package.json";

export default [
  // polyfill browser-friendly UMD build
  {
    input: "src/index.polyfill.ts",
    output: {
      name: "typescriptNpmPackage",
      file: pkg.rollup["umd-polyfill"],
      format: "umd",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser() // minify
    ],
  },

  // browser-friendly UMD build
  {
    input: "src/index.ts",
    output: {
      name: "typescriptNpmPackage",
      file: pkg.rollup.umd,
      format: "umd",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser() // minify
    ],
  },

  // polyfill ES module (for bundlers) build.
  {
    input: "src/index.polyfill.ts",
    output: [
      { file: pkg.rollup["esm-polyfill"], format: "es", sourcemap: true },
    ],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      terser() // minify
    ],
  },

  // ES module (for bundlers) build.
  {
    input: "src/index.ts",
    output: [
      { file: pkg.rollup.esm, format: "es", sourcemap: true },
    ],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      terser() // minify
    ],
  },
];
