module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "no-constant-condition": "warn",
        "no-undef": "warn",
        "no-unused-vars": "warn",
        "no-useless-escape": "warn",
        "vue/no-multiple-template-root": "warn",
        "vue/no-v-for-template-key": "warn",
        "vue/no-v-model-argument": "warn",
        "vue/no-v-text": "warn",
        "vue/valid-v-slot": "warn",
    }
}
