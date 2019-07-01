'use strict';

const setModuleVersion = require('dynavers')('dynavers.json');

const VERSIONS = {
  webpack3: {
    major: 3,
    display: '3.12.0',
    extractTextDisplay: '3.0.2',
    extractTextLoader: (extractTextPlugin, cssLoaders) => {
      return extractTextPlugin.extract({
        fallback: 'style-loader',
        use: cssLoaders
      });
    }
  },
  webpack4: {
    major: 4,
    display: '4.35.2',
    extractTextDisplay: '4.0.0-beta.0',
    extractTextLoader: (extractTextPlugin, cssLoaders) => {
      return extractTextPlugin.extract({
        fallback: 'style-loader',
        use: cssLoaders
      });
    }
  }
};

const selected = VERSIONS[process.env.VERSION];
if (selected) {
  setModuleVersion('webpack', selected.display, true);
  setModuleVersion('extract-text-webpack-plugin', selected.extractTextDisplay, true);
} else {
  throw new Error(`Unknown webpack version '${process.env.VERSION}'`);
}

module.exports = selected;
