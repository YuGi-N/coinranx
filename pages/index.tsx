import type { NextPage } from 'next';
import useSWR from 'swr';
import Header from '../components/Header';
import Table from '../components/Table';
import fetcher from '../util/fetcher';

const Home: NextPage = () => {

	const { data, error } = useSWR('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', fetcher);
	
	if(error) {
		return (
			<div>
				<Header />
				<div className='w-full h-screen flex justify-center items-center font-inter'>
					<h1>Unable to retrieve coin data at the moment. Check again later.</h1>
				</div>
			</div>
		)
	}

	return (
		<div>
			<>
				<Header />
				<div className='w-full flex flex-row justify-center items-center my-8 ml-2'>
					<div className='w-full md:max-w-4xl'>
						<h1 className='text-xl font-abel'>Top 100 Coins</h1>
					</div>
				</div>
				<div className='w-full flex flex-col items-center'>
					{ data ? <Table data={data} /> : null }
				</div>
			</>
		</div>
	)
}

export default Home;
