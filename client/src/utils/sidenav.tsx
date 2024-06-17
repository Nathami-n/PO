import { RxDashboard } from "react-icons/rx";
import {CiReceipt, CiSettings, CiShop, CiShoppingBasket, CiShoppingCart, CiWallet} from 'react-icons/ci';

export const navlinks = [
    {
        id: 1,
        title: "Dashboard",
        icon:<RxDashboard/>,
    },
    {
        id: 2,
        title: "Sales",
        icon: <CiShop/>
    },
    {
        id: 3,
        title: "Purchases",
        icon:<CiShoppingBasket/>
    },
    {
        id:4,
        title:"POS",
        icon: <CiShoppingCart/>
    },
    {
        id: 5,
        title: "Expenses",
        icon: <CiWallet/>
    },
    {
        id: 6,
        title: "Reports",
        icon: <CiReceipt/>
    },
    {
        id: 7,
        title: 'Settings',
        icon: <CiSettings/>
    },
];