import { Finance, ChartGraphs, TableStock} from "../components";

const DashBoard = () => {
    return (
        <div className="flex flex-col max-w-[950px] mx-auto mt-6 w-full">
            {/* finance */}
            <Finance />
            <ChartGraphs />
            <TableStock />
        </div>
    )
};


export default DashBoard;