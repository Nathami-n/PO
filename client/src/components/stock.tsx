import { Card, Typography, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";
import { StockCard } from './stock-card';

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
        title: "Total Purchase Items",
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
        <div className="w-full h-full flex-[.8]">
            <Card>
                <CardHeader floated={false} className="rounded-none" shadow={false}>
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" >
                            Stock History
                        </Typography>

                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-col gap-y-3">
                        {cardData.map((item, i) => (
                            <StockCard key={i} item={item} />
                        ))}
                    </div>
                </CardBody>
                <CardFooter><div>Content goes here</div></CardFooter>
            </Card>
        </div>
    )

};