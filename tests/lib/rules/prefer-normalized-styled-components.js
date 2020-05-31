/**
 * @fileoverview Use normalized styled components where available
 * @author Chris
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-normalized-styled-components"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("prefer-normalized-styled-components", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "const StyledSvg = styled.svg`",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
