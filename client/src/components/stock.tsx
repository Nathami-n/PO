import { Card, Typography, CardHeader } from "@material-tailwind/react";

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
        <Card className="h-full w-full">
            <CardHeader>
                <Typography variant="h5" color="blue-gray">
                    Stock History
                </Typography>
            </CardHeader>
            <CardBody>

            </CardBody>
        </Card>
    )

};