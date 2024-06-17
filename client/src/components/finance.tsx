import { ExpenseCard } from "./expense-card";
import { financeData } from "../utils/finance";

const Finance = () => {
    return (
        <div className="bg-white border rounded-md p-4  w-full">
            <div className="w-full flex justify-around gap-x-4">
            {financeData.map(data => (
                <ExpenseCard
                    id={data.id}
                    money={data.money}
                    title={data.title}
                />
            ))}
            </div>
        </div>
    )
}

export default Finance;