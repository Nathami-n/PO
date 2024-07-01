import { Header,Product, Billing } from '../components';
export default function POS() {
    return (
        <div className='h-full'>
            <div>
                <Header />
            </div>
            {/* content */}
            <div className='flex max-w-7xl mx-auto items-center mt-10'>
                <Product/>
                <Billing/>
            </div>
        </div>
    )
}