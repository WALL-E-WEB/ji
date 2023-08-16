
import { defineConfig } from 'vitepress';

import { getNav, getSidebar } from '../../utils/getNav.js'


export default defineConfig({

    outDir: '../dist',
    title: '自定义的 title',
    description: '自定义的 description',
    head: [['meta', { name: 'keywords', content: 'HTML, CSS, JavaScript' }]],
    markdown: {
        lineNumbers: true,
        anchor: {
            level: [0, 1, 2, 3, 4],
            getTokensText(e) {
                console.log('getTokensText', e)
                return 'my-anchor'
            }
        }

    },
    themeConfig: {


        nav:
            [

                { text: '学习', items: getNav('study') },
                { text: '项目', items: getNav('project') },
                { text: '方案', items: getNav('solution') },
                { text: '书', items: getNav('book') },
                { text: '资源', items: getNav('resources') },
                { text: '计划', items: getNav('tomorrow') },

            ],

        sidebar: {
            ...getSidebar()

        },

        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdated: true,
        lastUpdatedText: "最近更新时间",


    }

});

