export default {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'block-no-empty': null,
        'declaration-no-important': true,
        'max-nesting-depth': 4,
        'comment-empty-line-before': ['always', {
            ignore: ['stylelint-commands', 'after-comment'],
        }],
        'rule-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['after-comment', 'inside-block'],
        }],
        'unit-allowed-list': ['em', 'rem', '%', 'px', 's', 'vh', 'vw', 'deg'],
        // Variables are column-aligned and use a BEM-style `--modifier`.
        'scss/dollar-variable-colon-space-after': null,
        'scss/dollar-variable-pattern': '^[a-z]+(-{1,2}[a-z]+)*$',
        // `:not(a, b)` has lower specificity than `:not(a):not(b)`, which matters against Adminer's own CSS.
        'selector-not-notation': 'simple',
    },
};
