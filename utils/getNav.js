import AutoNavPlugin from 'vitepress-auto-nav-sidebar'

const { nav } = AutoNavPlugin({
    ignoreFolders: ["node_modules", "assets", "public", ".vuepress", "code", ".obsidian", "utils"], // 需要排除的一些目录
    ignoreFiles: ['16.English'], // 需要排除的一些文件
    // dirPrefix: '目录：',
    // filePrefix: '文件：',
    entry: './docs/study/',
    showNavIcon: false,
    showSideIcon: true,
    isCollapse: true,
    collapsed: true,
    singleLayerNav: true
})

export const getNav = (str) => {
    let { nav, sidebar } = AutoNavPlugin({
        ignoreFolders: ["node_modules", "assets", "public", ".vitepress", "code", ".obsidian", "utils", '.DS_Store'], // 需要排除的一些目录
        ignoreFiles: ['16.English'], // 需要排除的一些文件
        // dirPrefix: '目录：',
        // filePrefix: '文件：',
        entry: `./docs/${str}/`,
        showNavIcon: false,
        showSideIcon: true,
        isCollapse: true,
        collapsed: true,
        singleLayerNav: true
    })
    console.log('nav', nav)
    let temp = nav.map(item => {
        console.log('item+',item)
        return {
            text: item.text,
            link: `${str}${item.link}`
        }
    })
    return temp.sort((a, b) => a.text.split('.')[0] - b.text.split('.')[0])
}
export const getSidebar = (str) => {
    let { sidebar } = AutoNavPlugin({
        ignoreFolders: ["node_modules", "assets", "public", ".vitepress", "code", ".obsidian", "utils", '.DS_Store', '.vitepress','认知觉醒.assets','小程序.assets','16.English'], // 需要排除的一些目录
        ignoreFiles: ['16.English','认知觉醒.assets'], // 需要排除的一些文件
        dirPrefix: '',
        filePrefix: '',
        // entry: `./docs/${str}/`,
        entry: `./docs`,
        showNavIcon: false,
        showSideIcon: true,
        isCollapse: true,
        collapsed: true,
        singleLayerNav: false
    })

    console.log(Object.keys(sidebar))

    let temp = {}
    let kesList = Object.keys(sidebar)
    kesList.forEach(key => {
        let sorttemp = []
        console.log('sidebar[key]', key,sidebar[key])

        sorttemp = sidebar[key].sort((a, b) => {
            // (+a.split('.')[0]) - (+b.split('.')[0])
            console.log('====>',a.text.split('.')[0] - b.text.split('.')[0])

            // return (a.text.split('.')[0] - b.text.split('.')[0])
            return a.text.split('.')[0] - b.text.split('.')[0]
        })
        temp[key] = sorttemp
    })
    return sidebar

    // return sidebar.sort((a,b)=>a.text.split('.')[0] - b.text.split('.')[0] )
}