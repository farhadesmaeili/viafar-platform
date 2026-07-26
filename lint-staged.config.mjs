export default {
  '*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}': ['pnpm exec eslint --fix', 'pnpm exec prettier --write'],
  '*.{json,md,yml,yaml}': ['pnpm exec prettier --write'],
  '*.{css,scss}': ['pnpm exec prettier --write'],
};
