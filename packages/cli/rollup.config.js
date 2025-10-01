/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import pkg from './package.json' assert { type: 'json' };

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'node:fs',
  'node:fs/promises',
  'node:path',
  'node:os',
  'node:events',
  'node:util',
  'node:child_process',
];

export default {
  input: 'index.js',
  output: {
    file: 'dist/gemini.js',
    format: 'es',
    banner: '#!/usr/bin/env node',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      module: 'NodeNext',
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
  ],
  external,
};
