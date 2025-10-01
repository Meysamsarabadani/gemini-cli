/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [typescript(), nodeResolve(), commonjs(), json()],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.optionalDependencies || {}),
    'fs',
    'fs/promises',
    'path',
    'os',
    'child_process',
    'util',
    'url',
    'http',
    'https',
    'stream',
    'zlib',
  ],
};
