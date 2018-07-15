module.exports = {
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest/preprocessor"
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "<rootDir>/coverage/"],
    moduleFileExtensions: ["js", "ts", "tsx", "json"],
    testMatch: ["**/*.test.ts"],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
      }
  };
