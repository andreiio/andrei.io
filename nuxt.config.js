import path from 'path';

import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

import getDynamicPaths from './mixins/getDynamicPaths.js';
import messages from './i18n';

export default {
    target: 'static',

    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    },

    /*
     ** Headers of the page
     */
    head: {
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                name: 'msapplication-TileColor',
                content: '#17263F',
            },
            {
                name: 'theme-color',
                content: '#17263F',
            },
        ],
        link: [
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/favicons/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicons/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicons/favicon-16x16.png',
            },
            {
                rel: 'mask-icon',
                color: '#1F3353',
                href: '/favicons/safari-pinned-tab.svg',
            },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#2E4D7D',
    },
    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~plugins/filters.js' },
        { src: '~plugins/ssr-components.js' },
    ],

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        //
        '@nuxtjs/google-analytics',
        'nuxt-i18n',
    ],

    googleAnalytics: {
        id: process.env.ANALYTICS_ID,
        dev: false,
    },

    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.js',
            },
        ],
        defaultLocale: 'en',
        seo: false,
        detectBrowserLanguage: false,
        parsePages: false,
        vueI18n: {
            silentTranslationWarn: true,
            fallbackLocale: 'en',
            messages,
        },
    },

    tailwindcss: {
        configPath: '~/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.pcss',
    },

    purgeCSS: {
        paths: [
            'content/**/*.md',
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
        ],
        whitelist: ['rich-text'],
        extractors: [
            {
                extractor: content => content.match(/[A-z0-9-:\\/]+/g),
                extensions: ['html', 'md', 'js', 'vue'],
            },
        ],
    },

    router: {
        trailingSlash: true,
    },

    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type);
            },
        },
    },

    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,

        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
            },
        },

        postcss: {
            plugins: {
                'postcss-nested': {},
            },
        },

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient
                    ? 'source-map'
                    : 'inline-source-map';
            }

            // add frontmatter-markdown-loader
            config.module.rules.push({
                test: /\.md$/,
                include: path.resolve(__dirname, 'content'),
                loader: 'frontmatter-markdown-loader',
                options: {
                    mode: ['vue-component', 'meta'],
                    markdownIt: markdownIt({
                        html: true,
                        breaks: true,
                        typographer: true,
                    }).use(markdownItAttrs),

                    vue: {
                        root: 'rich-text',
                    },
                },
            });
        },
    },

    generate: {
        dir: 'dist',
        fallback: true,
        routes: getDynamicPaths({
            // '/work': 'work/*.md',
        }),
    },
};
