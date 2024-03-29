/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [{
        url: "/",
        name: "Home",
        slug: "home",
        icon: "HomeIcon",
        
    },
    {
        url: "/users",
        name: 'users',
        slug: 'users',
        icon: 'UserIcon',
        roles: ["Admin"]
    },
    {
        url : '/contacts',
        name: 'contacts',
        slug: 'contacts',
        icon : 'VoicemailIcon'
    },
    {
        url: null,
        name: "Справочники",
        slug: "Справочники",
        icon: 'SlidersIcon',
        submenu: [
            {
                url: "/nationalities",
                name: 'nationality',
                slug: 'nationality'
            },
            {
                url: "/education",
                name : 'Education',
                slug: 'education'
            },
            {
                url: '/parties',
                name: 'Parties',
                slug: 'parties'
            },
            {
                url: '/institution',
                name: 'Institutions',
                slug: 'institutions'
            },
            {
                url: '/okrug',
                name: 'Okrug',
                slug: 'Okrug'
            },

        ]
    },
    {
        url : '/knowledge',
        name: 'Knowledge',
        slug: 'Knowledge',
        icon : 'InfoIcon'
    },
]
