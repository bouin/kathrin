/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        // Specify the paths where Tailwind should look for content (HTML, Fluid, PHP files)
        '../../../ContentBlocks/ContentElements/**/**/*.html',
        '../../Private/PageView/**/**/*.html',
        '../../Private/ContentElements/**/**/**/*.html',
        '../../Private/News/**/**/*.html',
        '../../Private/Mask/**/**/*.html',
        '../Private/PageView/**/**/*.html', // Watch all HTML files in PageView
        '../Css/**/*.css'
    ],
    plugins: [],
    safelist: [
        'link-fixed'
      ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#0000FF'
                },
            },
        },
    },
}

