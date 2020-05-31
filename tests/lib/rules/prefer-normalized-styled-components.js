/**
 * @fileoverview Use normalized styled components where available
 * @author Chris Lane
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
        "styled(Svg)", // should allow if it's a normalized-styled-component
        "styled.div", // shouldn't throw if the property isn't a normalized-styled-component
        "styled(CustomComponent)", // should allow custom components
        "customFunction(svg)", // shouldn't throw if using custom function
        "customFunction.svg", // shouldn't throw if using custom object
    ],

    invalid: [
        {
            code: "styled.svg", // should throw if it has a normalized alternative
            errors: [{
                message: "You will need to import Svg from normalized-styled-components",
                type: "Identifier"
            }]
        }
    ]
});