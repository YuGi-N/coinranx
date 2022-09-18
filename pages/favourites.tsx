import { NextPage } from 'next';
import { useEffect } from 'react';
import useSWR from 'swr';
import Header from '../components/Header';
import Table from '../components/Table';
import fetcher from '../util/fetcher';

const Favourites: NextPage = () => {

    const storedFavourites = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('favourites')!);
    const { data, error } = useSWR(storedFavourites ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&ids=${encodeURIComponent(storedFavourites)}` : null, fetcher);

    return (
        <div>
			<>
				<Header />
				<div className='w-full flex flex-row justify-center items-center my-8 ml-2'>
					<div className='w-full md:max-w-4xl'>
						<h1 className='text-xl font-abel'>Favourites</h1>
					</div>
				</div>
				<div className='w-full flex flex-col items-center'>
					{ data ? <Table data={data} /> : null }
				</div>
			</>
		</div>
    )
}

export default Favourites;