const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Jens',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'android developer',
    bio: '10+ years of SWE work. Android and Kotlin-backends are my fav!',
    email: 'contact@jens.im',
    linkedin: 'jens.olander',
    github: 'cakism',
    instagram: '',
  },
  projects: [
    {
      name: `kotlin-dsl-examples`,
      href: 'https://github.com/cakism/kotlin-dsl-examples'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Hi! I\'m Jens',
    description: 'welcome to my blog!',
    theme: 'dark' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://jens-im-blog.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
