import { BarChartComponent, PieChartComponent } from "../charts";

const GraphCharts = () => {
    return (
        <div className="flex items-center w-full gap-x-4 mt-4">
            {/* charts */}
            <div className="bg-white rounded-xl h-[300px]  flex-[1.5]" >
                <BarChartComponent/>
            </div>
            <div className="bg-white rounded-xl h-[300px] p-2 flex-[.5]">
                <PieChartComponent/>
            </div>
        </div>
    )
}


export default GraphCharts;
