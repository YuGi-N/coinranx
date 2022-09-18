// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import type { ChartOptions, ChartData } from 'chart.js';
// import { Line } from 'react-chartjs-2';

import { LineChart , Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface CoinChartProps {
    data: any,
    coinData: any,
}

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// );

const CoinChart = ({ data, coinData }: CoinChartProps) => {

    // const options: ChartOptions = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'right',
    //         },
    //         title: {
    //             display: true,
    //             text: `${coinData.name}`
    //         },
    //     },
    // };

    // const dateLabels: string[] = data.prices.map((price: any) => {
    //     return new Intl.DateTimeFormat(undefined).format(price[0]);
    // });

    // const prices = data.prices.map((price: any) => {
    //     return price[1];
    // });

    // const chartData: ChartData<"line"> = {
    //     labels: dateLabels,
    //     datasets: [
    //         {
    //             label: 'Price',
    //             data: prices,
    //             borderColor: 'rgb(80, 171, 70)',
    //             backgroundColor: 'rgb(106, 224, 93)',
    //         },
    //     ],
    // };

    // return (
    //     <div className='w-full md:max-w-4xl bg-neutral-900 h-auto md:rounded-md flex flex-col md:flex-row p-8'>
    //         <Line data={chartData} options={options} />
    //     </div>
    // )

    const chartData = data.prices.map((price: any, index: number) => {
        return {date: Intl.DateTimeFormat(undefined).format(price[0]), price: parseInt(price[1])};
    });

    return (
        <div className='w-full md:max-w-4xl bg-neutral-900 h-auto md:rounded-md flex flex-col md:flex-row p-8 justify-center'>
            <LineChart width={700} height={400} data={chartData}>
                <Line type='monotone' dataKey='price' stroke='#9bf589' />
                <CartesianGrid stroke='#969696' strokeDasharray='5 5' />
                <XAxis dataKey='date' />
                <YAxis dataKey='price' />
                <Tooltip contentStyle={{ backgroundColor: '#424141', border: 'none' }} />
                <Legend />
            </LineChart>
        </div>
    )

}

export default CoinChart;