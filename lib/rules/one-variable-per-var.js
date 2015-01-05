/**
 * @fileoverview A rule to ensure the use of a single variable declaration per var statement.
 * @author Gregg Tavares
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------
    function checkDeclarations(node) {
        if (node.declarations && node.declarations.length && node.declarations.length > 1) {
            context.report(node, "Split this var statement.");
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "VariableDeclaration": checkDeclarations,
    };
};

