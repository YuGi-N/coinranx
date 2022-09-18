import { LineChart , Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CoinChartProps {
    data: any,
    coinData: any,
}

const CoinChart = ({ data, coinData }: CoinChartProps) => {

    const chartData = data.prices.map((price: any, index: number) => {
        return {date: Intl.DateTimeFormat(undefined).format(price[0]), price: parseInt(price[1])};
    });

    return (
        <div className='w-full md:max-w-4xl bg-neutral-900 h-96 md:rounded-md flex flex-col md:flex-row p-8 justify-center'>
            <ResponsiveContainer width='100%' height="100%">    
                <LineChart data={chartData}>
                    <Line type='monotone' dataKey='price' stroke='#9bf589' />
                    <CartesianGrid stroke='#969696' strokeDasharray='5 5' />
                    <XAxis dataKey='date' />
                    <YAxis dataKey='price' />
                    <Tooltip contentStyle={{ backgroundColor: '#424141', border: 'none' }} />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}

export default CoinChart;