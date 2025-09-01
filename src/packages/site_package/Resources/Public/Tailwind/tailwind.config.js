/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        // Specify the paths where Tailwind should look for content (HTML, Fluid, PHP files)
        '../../../ContentBlocks/ContentElements/**/**/*.html',
        '../../Private/PageView/**/**/*.html',
        '../../Private/ContentElements/**/**/**/*.html',
        '../../Private/news/**/**/*.html',
        '../Private/PageView/**/**/*.html', // Watch all HTML files in PageView
        '../Css/**/*.css'
    ],
    plugins: [],
    safelist: [
        'link-fixed'
      ],
}

