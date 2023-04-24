import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Use Functions",

  appearance: 'dark',

  description: "Collection of Utility Functions",

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
    logo: '/favicon.png',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/', activeMatch: '^/api/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/use-kit/use-functions' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Akashi Sai'
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Akashi Sai' }],
  ],
})
