module.exports = {
    title: 'A Book of VuePress by VuePress',
    description: 'Exploring VuePress in easy words',
    themeConfig: {
        nav: [
            {text: 'Installation', link: '/introduction/'},
            {text:'Tools', link:'/tools/'},
            {text:'Things We Can Do with VuePress', link: '/tasks/'},


        ],
        sidebar: [
            {
                title: 'Installation',
                collapsable: false,
                children: [
                    '/introduction/'
                ]
            },
            {
                title: 'Tools',
                collapsable:false,
                children:[
                    '/tools/'
                ]

            },
            {
                title: 'Things We Can Do with VuePress',
                collapsable: false,
                children: [
                    '/tasks/'
                ]

            }
        ]
    },

};