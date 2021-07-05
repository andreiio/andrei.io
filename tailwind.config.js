/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
    mode: 'jit',
    theme: {
        container: {
            padding: '2rem',
            center: true,
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
            },
            colors: {
                blue: {
                    100: '#EBEEF3',
                    200: '#CCD5E2',
                    300: '#ADBBD1',
                    400: '#7088AE',
                    500: '#33558B',
                    600: '#2E4D7D',
                    700: '#1F3353',
                    800: '#17263F',
                    900: '#0F1A2A',
                },
            },
        },
    },

    variants: {
        //
    },

    plugins: [
        //
        require('@tailwindcss/typography'),
    ],

    purge: {
        content: [
            //
            'content/**/*.md',
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
        ],
        options: {
            safelist: [
                //
            ],
        },
    },
};
