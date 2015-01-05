"use strict";

var linter = require("eslint").linter;
var ESLintTester = require("eslint-tester");
var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest("lib/rules/one-variable-per-var", {
    valid: [
        "var oneVariable;",
        "var oneVariable = true;",
    ],

    invalid: [
        {
            code: "var varOne, varTwo;",
            errors: [ { message: "Split this var statement." } ]
        },
        {
            code: "var varOne = 1, varTwo;",
            errors: [ { message: "Split this var statement." } ]
        },
        {
            code: "var varOne = 1, varTwo = 1;",
            errors: [ { message: "Split this var statement." } ]
        },
        {
            code: "var varOne, varTwo = 1;",
            errors: [ { message: "Split this var statement." } ]
        },
        {
            code: "var varOne, varTwo, varThree;",
            errors: [ { message: "Split this var statement." } ]
        }
    ]
});
