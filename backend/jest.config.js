module.exports = {
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: '.',
      outputName: 'junit.xml'
    }]
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
};
