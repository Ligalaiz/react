module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!**/node_modules/**',
    '!src/stories/**',
    '!src/index.tsx',
    '!src/App.tsx',
    '!src/components/Layout/*',
    '!src/components/AppRouter/*',
    '!src/router/*',
    '!src/utils/index.tsx',
  ],
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/FileTransformer.js',
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@shared(.*)$': '<rootDir>/src/components/shared$1',
    '^@search(.*)$': '<rootDir>/src/components/Search/components$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: -12,
    },
  },
};
