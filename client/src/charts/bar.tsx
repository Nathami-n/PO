
import Chart from 'react-apexcharts';

import { BarChartConfig } from '../config/charts-config';

const BarChartComponent = () => {
    return (
        <Chart {...BarChartConfig}/>
    )
}

export default BarChartComponent;