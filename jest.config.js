module.exports = {
    testEnvironment: "node",
    moduleFileExtensions: ["js"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
    transform: {
      "^.+\\.js$": "babel-jest",
    },
  };
  