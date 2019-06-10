const path = require('path');
const webpackConfig = require('../webpack/webpack.dev');

module.exports = {
  components: [
    '../../src/components/**/[A-Z]*.jsx',
    '../../src/pages/**/components/**/[A-Z]*.jsx',
  ],
  ignore: ['**/*.spec.jsx'],
  styleguideDir: path.join(process.cwd(), '/dist/styleguidist'),
  title: 'React CSR Starter',
  webpackConfig,
};
