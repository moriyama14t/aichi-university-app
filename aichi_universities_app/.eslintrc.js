module.exports = {
  //親階層は見ない
  root: true,

  //Node.js で実行されるコードを静的検証する
  env: {
    node: true,
  },

  //プラグイン導入
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'], //typescriptも必要なら '@vue/typescript' を追記

  // typescriptを読み込む
  // parserOptions: {
  //   parser: '@typescript-eslint/parser',
  // },

  rules: {
    //自動修正されないものは error にしている
    // https://eslint.org/docs/rules/#ecmascript-6
    'object-shorthand': 'warn',
    'symbol-description': 'error',

    // https://eslint.vuejs.org/rules/#uncategorized
    'vue/component-definition-name-casing': 'warn',
    'vue/component-name-in-template-casing': 'warn',
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/no-deprecated-scope-attribute': 'warn', //2.6.0以降では非推奨の書き方
    'vue/no-deprecated-slot-attribute': 'warn', //2.6.0以降では非推奨の書き方
    'vue/no-deprecated-slot-scope-attribute': 'warn', //2.6.0以降では非推奨の書き方
    'vue/v-on-function-call': 'warn',
    'vue/v-slot-style': 'warn',
    'vue/valid-v-slot': 'error',
  },
}