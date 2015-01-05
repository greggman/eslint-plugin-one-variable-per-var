"use strict";

module.exports = {
    rules: {
        "one-variable-per-var": require("./lib/rules/one-variable-per-var"),
    },
    rulesConfig: {
        "one-variable-per-var": 2,
    }
};
