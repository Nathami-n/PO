import React from "react";
import { IExpenseCardProps } from "../types/types";

export const ExpenseCard: React.FC<IExpenseCardProps> = ({
    id,
    money,
    title
}) => {
    return (
        <div className="bg-bg">
            <div>Image</div>
            <div>
                <div>{title}</div>
                <div>{money}</div>
            </div>
            <div>calculation</div>
        </div>
    )
};