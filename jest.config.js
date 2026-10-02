const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Menunjuk ke lokasi root app Next.js untuk membaca jsconfig.json
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'node',
  // Mapping langsung alias `@/` ke root directory project
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(customJestConfig)