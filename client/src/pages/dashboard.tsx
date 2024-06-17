import { Finance, ChartGraphs } from "../components";

const DashBoard = () => {
    return (
        <div className="flex flex-col max-w-[950px] mx-auto mt-6 w-full">
            {/* finance */}
            <Finance/>
            <ChartGraphs/>
        </div>
    )
};


export default DashBoard;