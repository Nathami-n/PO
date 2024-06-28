import { Card, Typography, CardHeader, CardBody } from "@material-tailwind/react";
import {StockCard} from './stock-card';

const cardData = [
    {
        id: 1,
        title: "Total Sales Items",
        number: 230,
        percentage: 2,
    },
    {
        id: 2,
        title: "Total Sales Return Items",
        number: 300,
        percentage: 4
    },
    {
        id: 3,
        title:"Total Purchase Items",
        number: 200,
    },
    {
        id: 4,
        title: "Purchase Return Items",
        number: 2,
        percentage: 68
    },
]

export default function Stock() {
    return (
        <Card className="h-full w-full  min-h-full mt-0 p-1">
            <CardHeader floated={false} className="rounded-none" shadow={false}>
                <Typography variant="h5" color="blue-gray" >
                    Stock History
                </Typography>   
            </CardHeader>
            <CardBody>
                <div className="flex flex-col gap-y-3">
                {cardData.map((item, i)=>(
                    <StockCard key={i} item={item}/>
                ))}
                </div>
            </CardBody>
        </Card>
    )

};