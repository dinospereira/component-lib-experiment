const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Component Lib Experiment',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Component Lib Experiment',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/dinopereira/projects/comp-lib/component-lib-experiment',
          templates:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/node_modules/docz-core/dist/templates',
          docz:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz',
          cache:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz/.cache',
          app:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz/app',
          appPackageJson:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/package.json',
          appTsConfig:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/tsconfig.json',
          gatsbyConfig:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/gatsby-config.js',
          gatsbyBrowser:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/gatsby-browser.js',
          gatsbyNode:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/gatsby-node.js',
          gatsbySSR:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/gatsby-ssr.js',
          importsJs:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz/app/imports.js',
          rootJs:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz/app/root.jsx',
          indexJs:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz/app/index.jsx',
          indexHtml:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz/app/index.html',
          db:
            '/Users/dinopereira/projects/comp-lib/component-lib-experiment/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
