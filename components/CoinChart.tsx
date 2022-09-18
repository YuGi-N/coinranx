import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import type { ChartOptions, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface CoinChartProps {
    data: any,
    coinData: any,
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

ChartJS.defaults.color = 'rgb(255, 255, 255)';

const CoinChart = ({ data, coinData }: CoinChartProps) => {

    if(data && coinData) {
        const options: ChartOptions = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: `${coinData.name}`
                },
                
            },
        };
    
        // const dateLabels: string[] = data.prices.map((price: any) => {
        //     return new Date(price[0]);
        // });
    
        const prices = data.prices.map((price: any) => {
            if(isNaN(parseInt(price[1]))) {
                return parseInt(price[1]);
            }
        });

        console.log(prices);
    
        const chartData: ChartData<"line"> = {
            labels: [1,2,3,4,5,6,7],
            datasets: [
                {
                    label: 'Price',
                    data: prices,
                    borderColor: 'rgb(80, 171, 70)',
                    backgroundColor: 'rgb(106, 224, 93)',
                },
            ]
        };
    
        return (
            <div className='w-full md:max-w-4xl bg-neutral-900 h-auto md:rounded-md flex flex-col md:flex-row p-8'>
                { prices && <Line data={chartData} options={options} /> }
            </div>
        )
    }

    return (
        <></>
    )
    
}

export default CoinChart;