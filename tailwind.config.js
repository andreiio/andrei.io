module.exports = {
    theme: {
        container: {
            padding: '2rem',
            center: true,
        },
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
            transparent: 'transparent',

            black: 'hsl(0, 0%, 0%)',
            white: 'hsl(0, 0%, 100%)',

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
            gray: {
                100: '#F7F7F7',
                200: '#E1E1E1',
                300: '#CFCFCF',
                400: '#B1B1B1',
                500: '#9E9E9E',
                600: '#7E7E7E',
                700: '#626262',
                800: '#515151',
                900: '#3B3B3B',
            },
            green: {
                100: '#F0F4F3',
                200: '#D9E4E2',
                300: '#C2D3D0',
                400: '#95B3AC',
                500: '#679289',
                600: '#5D837B',
                700: '#3E5852',
                800: '#2E423E',
                900: '#1F2C29',
            },
            red: {
                100: '#FDEAEA',
                200: '#FBCBCC',
                300: '#F8ABAD',
                400: '#F36D6F',
                500: '#EE2E31',
                600: '#D6292C',
                700: '#8F1C1D',
                800: '#6B1516',
                900: '#470E0F',
            },
        },
        extend: {
            boxShadow: {
                case:
                    '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.125)',
            },
        },
        textStyles: theme => ({
            heading: {
                output: false,
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.tight'),
            },
            h1: {
                extends: 'heading',
                fontSize: theme('fontSize.4xl'),
                '@screen xl': {
                    fontSize: theme('fontSize.5xl'),
                },
            },
            h2: {
                extends: 'heading',
                fontSize: theme('fontSize.3xl'),
                '@screen xl': {
                    fontSize: theme('fontSize.4xl'),
                },
            },
            h3: {
                extends: 'heading',
                fontSize: theme('fontSize.2xl'),
                '@screen xl': {
                    fontSize: theme('fontSize.3xl'),
                },
            },
            h4: {
                extends: 'heading',
                fontSize: theme('fontSize.xl'),
                '@screen xl': {
                    fontSize: theme('fontSize.2xl'),
                },
            },
            list: {
                output: false,
                marginTop: theme('spacing.5'),
                marginBottom: theme('spacing.5'),
                paddingLeft: theme('spacing.10'),

                li: {
                    marginTop: theme('spacing.1'),
                },
            },
            link: {
                fontWeight: theme('fontWeight.normal'),
                color: theme('colors.blue.500'),
                textDecoration: 'underline',

                '&:hover': {
                    textDecoration: 'none',
                },
            },
            richText: {
                lineHeight: theme('lineHeight.relaxed'),
                fontSize: theme('fontSize.lg'),
                '> * + *': {
                    marginTop: theme('spacing.4'),
                },
                h1: {
                    extends: 'h1',
                },
                h2: {
                    extends: 'h2',
                },
                h3: {
                    extends: 'h3',
                },
                h4: {
                    extends: 'h4',
                },
                ul: {
                    extends: 'list',
                    listStyleType: 'disc',
                },
                ol: {
                    extends: 'list',
                    listStyleType: 'decimal',
                },
                a: {
                    extends: 'link',
                },
                'b, strong': {
                    fontWeight: theme('fontWeight.bold'),
                },
                'i, em': {
                    fontStyle: 'italic',
                },
            },
        }),
    },
    variants: {},
    plugins: [
        require('tailwindcss-typography')({
            componentPrefix: '',
        }),
    ],
};
