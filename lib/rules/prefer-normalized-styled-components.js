/**
 * @fileoverview Use normalized styled components where available
 * @author Chris Lane
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Use normalized styled components where available",
            recommended: false
        },
        fixable: null,
    },

    create: function(context) {
        const normalizedElements = [
            'Article',
            'Aside',
            'Footer',
            'Header',
            'Nav',
            'Section',
            'FigCaption',
            'Figure',
            'Main',
            'H1',
            'Hr',
            'Pre',
            'A',
            'Abbr',
            'B',
            'Strong',
            'Code',
            'Kbd',
            'Samp',
            'Dfn',
            'Mark',
            'Small',
            'Sub',
            'Sup',
            'Audio',
            'Video',
            'Img',
            'Svg',
            'Button',
            'Input',
            'Optgroup',
            'Select',
            'Textarea',
            'Fieldset',
            'Legend',
            'Progress',
            'Details',
            'Menu',
            'Summary',
            'Canvas',
        ];

        return {
            Identifier: function(node) {
                if (node.name !== 'styled' || !node.parent.property) {
                    return;
                }

                const normalizedEquivalent = normalizedElements.find((element) => (
                    element.toLowerCase() === node.parent.property.name
                ));

                if (!!normalizedEquivalent) {
                    context.report({
                        node,
                        message: `You will need to import ${normalizedEquivalent} from normalized-styled-components`,
                    })
                }
            },
        };
    }
};
