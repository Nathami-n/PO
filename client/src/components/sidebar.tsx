import { navlinks } from "../utils/sidenav";
import {Link} from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="bg-side h-screen flex flex-col gap-y-8 text-sidet w-full p-1 flex-[0.6]">
            <div>Awesome Logo</div>
            <div className="flex flex-col px-4 gap-y-10">
                {navlinks.map(nav => (
                    <Link to={nav.title} className="text-sidet flex items-center gap-x-2">
                        <div>{nav.icon}</div>
                        <div>{nav.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
};


export default SideBar;