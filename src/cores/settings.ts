import { RouteRecordName } from 'vue-router'
import { DASHBOARD_NAME, DOCUMENT_NAME, USER_NAME } from '../cores/routes'
import { DASHBOARD_ICON, DOCUMENT_ICON, USER_ICON } from '../cores/icons'

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
        icon: DASHBOARD_ICON,
    },
    {
        name: DOCUMENT_NAME,
        icon: DOCUMENT_ICON,
    },
    {
        name: USER_NAME,
        icon: USER_ICON,
    },
]
