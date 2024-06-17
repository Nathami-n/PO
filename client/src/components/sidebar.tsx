import { navlinks } from "../utils/sidenav";
import {Link, useLocation} from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[1];
    return (
        <div className="bg-side h-screen flex flex-col gap-y-8 text-sidet w-full p-1 flex-[0.5]">
            <div>Awesome Logo</div>
            <div className="flex flex-col px-4 gap-y-10">
                {navlinks.map(nav => (
                    <Link to={nav.title} className={`text-sidet flex items-center gap-x-2 p-1 ${nav.title === path ? 'bg-[#232331] rounded-lg ': ''} hover:bg-[#232331]`}>
                        <div>{nav.icon}</div>
                        <div>{nav.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
};


export default SideBar;