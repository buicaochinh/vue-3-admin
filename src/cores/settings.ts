import { RouteRecordName } from 'vue-router'
import { DASHBOARD_NAME, DOCUMENT_NAME, USER_NAME } from '../cores/routes'

interface NavItem {
    name: RouteRecordName,
    icon: string
}

type NavItemList = NavItem[]

// App name
export const APP_NAME: string = 'Admin'

// Navigation Item
export const NAV_ITEM_LIST: NavItemList = [
    {
        name: DASHBOARD_NAME,
        icon: 'el-icon-menu',
    },
    {
        name: DOCUMENT_NAME,
        icon: 'el-icon-document',
    },
    {
        name: USER_NAME,
        icon: 'el-icon-user',
    },
]
