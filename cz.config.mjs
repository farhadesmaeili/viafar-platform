export default {
  disableEmoji: true,

  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation changes' },
    { value: 'style', name: 'style:    Code style changes (formatting, missing semicolons, etc.)' },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    { value: 'perf', name: 'perf:     A code change that improves performance' },
    { value: 'test', name: 'test:     Adding or updating tests' },
    { value: 'build', name: 'build:    Changes affecting the build system or dependencies' },
    { value: 'ci', name: 'ci:       Continuous Integration changes' },
    { value: 'chore', name: 'chore:    Other maintenance changes' },
    { value: 'revert', name: 'revert:   Revert a previous commit' },
  ],

  scopes: [],

  allowCustomScopes: true,
  allowEmptyScopes: true,

  allowBreakingChanges: ['feat', 'fix'],

  subjectLimit: 100,

  messages: {
    type: 'Select the type of change:',
    scope: 'Select a scope (optional):',
    customScope: 'Enter the scope:',
    subject: 'Write a short imperative description:',
    body: 'Provide a longer description (optional):',
    breaking: 'List breaking changes (optional):',
    footer: 'Reference issues (optional):',
    confirmCommit: 'Confirm commit?',
  },

  skipQuestions: ['footer'],
};
