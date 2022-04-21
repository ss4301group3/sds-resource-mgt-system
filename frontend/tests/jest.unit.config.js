var config = require('./jest.config')
config.testRegex = ".u.test\\.ts$" //Overriding testRegex option
console.log('RUNNING UNIT TESTS')
module.exports = config