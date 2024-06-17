import React from "react";
import { IExpenseCardProps } from "../types/types";

export const ExpenseCard: React.FC<IExpenseCardProps> = ({
    id,
    money,
    title
}) => {

    let src = '';

    switch (title) {
        case 'Total Sales': {
            src = '/price-label.png';
            break;
        }
        case "Total Expenses": {
            src = '/notepad.png';
            break;
        }
        case 'Payment Sent': {
            src = '/bank.png';
            break;
        }
        case 'Payment Received': {
            src = '/transfer.png';
            break;
        }
    }

    return (
        <div className="bg-bg flex flex-col p-6 justify-start rounded-lg w-full ">
            <div className="h-10 w-10 mb-1">
                <img src={src} className="w-full h-full" />
            </div>
            <div>
                <div className="text-[10px]">{title}</div>
                <div className="text-xl font-bold">${money}</div>
            </div>
            <div className="flex items-center gap-x-1 whitespace-nowrap">
                <img src='/increase.png' className="h-4 w-4"/>
                <p className="text-[10px]">8% more than the previous month</p>
            </div>
        </div>
    )
};