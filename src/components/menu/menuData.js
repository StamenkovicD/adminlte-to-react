import React from 'react';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: 'fa-dashboard',
        submenu: [
            {
                subTitle: 'Dashboard V1',
                url: '/'
            },
            {
                subTitle: 'Movies API',
                url: '/movies'
            }
            
        ]
        
    },
    {
        title: 'Layout Options',
        path: '/',
        icon: 'fa-files-o',
        notification: '4',
        labelPrimary: true
        
    },
    {
        title: 'Widgets',
        path: '/',
        icon: 'fa-th',
        notification: 'new',
        color: 'green'
    },
    {
        title: 'Charts',
        path: '/',
        icon: 'fa-pie-chart',
    },
    {
        title: 'UI Elements',
        path: '/',
        icon: 'fa-laptop',
    },
    {
        title: 'Forms',
        path: '/',
        icon: 'fa-edit',
    },
    {
        title: 'Tables',
        path: '/',
        icon: 'fa-table',
    },
]