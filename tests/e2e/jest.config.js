/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "https://sabe.io"
    //URL: "http://localhost:8080"
  },
  testMatch: [
    "**/test/**/*.test.js"
  ],
  verbose: true
};