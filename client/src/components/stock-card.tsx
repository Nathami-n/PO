export function StockCard ({
    item: {
        id,
        title,
        percentage,
        number
    }
}: {
    id: number,
    title: string,
    percentage: number,
    number: number
}){
    return (
        <div className="bg-bg rounded-lg p-2">
            <div className="flex items-center">
                <div>
                    <h1>{title}</h1>
                    <p>{number}</p>
                </div>
                <div>
                    <div>{percentage}%</div>
                </div>
            </div>
        </div>
    )
}