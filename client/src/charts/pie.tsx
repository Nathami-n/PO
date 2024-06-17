import Chart from 'react-apexcharts';
import { PieChartConfig } from '../config/charts-config';

const PieChartComponent = () => {
    return (
        <Chart  {...PieChartConfig}/>
    )
}

export default PieChartComponent;