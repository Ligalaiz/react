module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverageFrom: [
    'src/**/*.jsx',
    '!**/node_modules/**',
    '!src/utils/index.jsx',
    '!src/store/rootReducer.jsx',
    '!src/store/index.jsx'
  ],
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock'],
  transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/FileTransformer.js'
    },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@root(.*)$': '<rootDir>/src$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js'
    },
    'coverageThreshold': {
      'global': {
        'branches': 60,
        'functions': 60,
        'lines': 60,
        'statements': -12
      }
    }
}
