module.exports = {
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '.*\\.(ts)$': 'ts-jest',
  },
}
