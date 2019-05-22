module.exports = {
  verbose: true,
  moduleFileExtensions: [
    "js"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "enzyme.js"
  ],
  rootDir: 'pages',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  collectCoverage: true,
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
