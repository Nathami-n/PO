import { Select, Option, Input} from '@material-tailwind/react';
import { useState } from 'react';


const options = [
    {
        "id": 1,
        "type": "Analgesics"
    },
    {
        "id": 2,
        "type": "Antibiotics"
    },
    {
        "id": 3,
        "type": "Antihistamines"
    },
    {
        "id": 4,
        "type": "Antidepressants"
    }
];
export default function Product() {
    const [category, setCategory] = useState('');
    return (
        <div className="bg-white rounded-md flex-[1] flex flex-col ">
            <div className='w-full bg-[#f9fafc] p-3'><h1 className="font-bold text-md">Product section</h1></div>
            <div className="flex flex-col px-3 mt-4">
                <div className='flex gap-x-20 items-center'>
                   <div>
                     {/* select */}
                     <Select label='Select Categories' value={category} onChange={(e)=> setCategory(e)}>
                        {options.map((item, i)=>(<Option key={i}>{item.type}</Option>))}
                    </Select>
                   </div>
                   {/* search */}
                    <div>
                        <Input label='Search by name' icon={<i className="fas fa-heart"/>}/>
                    </div>
                </div>

                <div className="overflow-y-scroll">
                    
                </div>
            </div>

        </div>
    )
}