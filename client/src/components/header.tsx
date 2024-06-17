import {CiGlobe} from 'react-icons/ci';

const Header = () => {
    return (
        <div className="flex items-center shadow-sm p-3 ">
            <div> Dashboard overview</div>
            <div className='flex items-center gap-x-3 '>
                <CiGlobe/>
                <div>
                    <img src="/email.svg" className='h-6 w-6'/>
                </div>
            </div>
        </div>
    )

};


export default Header;