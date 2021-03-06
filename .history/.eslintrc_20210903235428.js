module.exports = {
  root:true,
  env: {
    node:true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
      parser:'babel-eslint',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'indent': ['error',4],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
