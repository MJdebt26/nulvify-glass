import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the file-tracing root to this repo so an unrelated lockfile elsewhere
  // on the machine can't be inferred as the workspace root.
  outputFileTracingRoot: __dirname,
}

export default nextConfig
