// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Lucia Cerchie',
    tagline: 'hello',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/floral.png',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Lucia Cerchie',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/floral.png',
                },
                items: [
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        to: '/about',
                        label: 'About Me',
                        position: 'left',
                    },
                    {
                        to: '/work-with-me',
                        label: 'Get In Touch',
                        position: 'left',
                    },
                    {
                        to: '/publications',
                        label: 'Publications',
                        position: 'left',
                    },
                    {
                        to: '/colors',
                        label: 'Website Colors',
                        position: 'left',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Profiles',
                        items: [
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/luciacerchie/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Cerchie',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/CerchieLucia',
                            },
                        ],
                    },
                    {
                        title: 'Articles, Musings, and Notes',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                        ],
                    },
                ],
                copyright: `Lucia Cerchie, ${new Date().getFullYear()}.  Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            metadata: [
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:image', content: 'https://ibb.co/z7fNyt0' },
                { name: 'twitter:title', content: 'Lucia Cerchie' },
                {
                    name: 'twitter:description',
                    content: 'content from the website of Lucia Cerchie',
                },
                {
                    name: 'twitter:image:alt',
                    content:
                        'screenshot of homepage displaying profile picture',
                },
            ],
        }),
}

module.exports = config
