module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0],
    'scope-case': [0],
    'subject-case': [2, 'always', 'sentence-case'],
  },
}
