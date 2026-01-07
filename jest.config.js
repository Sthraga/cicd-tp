const os = require("node:os");

module.exports = {
    testEnvironment: "allure-jest/node",

    testEnvironmentOptions: {
        resultsDir: "allure-results",

        links: {
            issue: {
                nameTemplate: "Issue #%s",
                urlTemplate: "https://issues.example.com/%s",
            },
        },

        environmentInfo: {
            os_platform: os.platform(),
            os_release: os.release(),
            os_version: os.version(),
            node_version: process.version,
        },
    },

    testMatch: [
        "**/tests/**/*.test.js"
    ],
};
