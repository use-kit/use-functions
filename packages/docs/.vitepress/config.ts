import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Use Functions',

  appearance: 'dark',

  description: 'Collection of Utility Functions',

  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },
  },

  themeConfig: {
    logo: '/use.svg',

    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Functions', link: '/core/composeTree/' },
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'How to use', link: '/guide' },
        ]
      },
      {
        text: 'Core',
        items: [
          { text: 'composeTree', link: '/core/composeTree/' },
          { text: 'flattenArray', link: '/core/flattenArray/' },
          { text: 'flattenTree', link: '/core/flattenTree/' },
          { text: 'generateArray', link: '/core/generateArray/' },
          { text: 'generateTree', link: '/core/generateTree/' },
          { text: 'getAge', link: '/core/getAge/' },
          { text: 'getFileType', link: '/core/getFileType/' },
          { text: 'getObjectField', link: '/core/getObjectField/' },
          { text: 'getTreeNode', link: '/core/getTreeNode/' },
          { text: 'isType', link: '/core/isType/' },
        ]
      },
      {
        text: 'Integrated',
        items: [
          { text: 'emitter', link: '/integrated/emitter/' }
        ]
      },
      {
        text: 'Browser',
        items: [
          { text: 'encodeUrl', link: '/browser/encodeUrl/' },
          { text: 'scrollIntoView', link: '/browser/scrollIntoView/' },
          { text: 'watchPopStateToStay', link: '/browser/watchPopStateToStay/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/use-kit/use-functions' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Akashi Sai',
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/use-32x32.svg', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/use.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Akashi Sai' }],
  ],
})
