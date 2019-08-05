const baseConfig = require('./jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>'],
  // modulePaths: ['<rootDir>/dist']
};
