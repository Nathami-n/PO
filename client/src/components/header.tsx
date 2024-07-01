import {CiGlobe} from 'react-icons/ci';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const pathname = useLocation().pathname.split('/').pop();

    return (
        <div className="flex items-center shadow-sm p-3 bg-white ">
            <div> {pathname}</div>
            <div className='flex items-center gap-x-2 ml-auto mr-2'>
                <div className="bg-[#dddfda] rounded-full flex items-center justify-center h-9 w-9">
                <CiGlobe size={20}/>
                </div>
                <div className='h-9 w-9'>
                    <img src="/profile.webp" className=' rounded-full w-full h-full' />
                </div>
            </div>
        </div>
    )

};


export default Header;