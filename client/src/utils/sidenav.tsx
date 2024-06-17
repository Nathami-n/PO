import { RxDashboard } from "react-icons/rx";
import {CiReceipt, CiSettings, CiShop, CiShoppingBasket, CiShoppingCart, CiWallet} from 'react-icons/ci';

export const navlinks = [
    {
        id: 1,
        title: "Dashboard",
        icon:<RxDashboard size={20}/>,
    },
    {
        id: 2,
        title: "Sales",
        icon: <CiShop size={20}/>
    },
    {
        id: 3,
        title: "Purchases",
        icon:<CiShoppingBasket size={20}/>
    },
    {
        id:4,
        title:"POS",
        icon: <CiShoppingCart size={20}/>
    },
    {
        id: 5,
        title: "Expenses",
        icon: <CiWallet size={20}/>
    },
    {
        id: 6,
        title: "Reports",
        icon: <CiReceipt size={20}/>
    },
    {
        id: 7,
        title: 'Settings',
        icon: <CiSettings size={20}/>
    },
];