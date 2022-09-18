import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import useSWR from 'swr';
import Header from '../components/Header';
import Table from '../components/Table';
import fetcher from '../util/fetcher';

const Favourites: NextPage = () => {

    const storedFavourites = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favourites')!) : null;
    const { data, error } = useSWR(storedFavourites && storedFavourites.length !== 0 ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&ids=${encodeURIComponent(storedFavourites)}` : null, fetcher);

	if(error) {
		return (
			<div>
				<Head>
					<title>Favourites</title>
				</Head>
				<Header />
				<div className='w-full h-screen flex justify-center items-center font-inter'>
					<h1>Unable to retrieve coin data at the moment. Check again later.</h1>
				</div>
			</div>
		)
	}

	if(data) {
		return (
			<div>
				<Head>
					<title>Favourites</title>
				</Head>
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
	
	return (
		<div>
			<Header />
			<div className='w-full h-screen flex justify-center items-center font-inter'>
				<h1>You don&apos;t have any favourites. <Link href='/'><a className='text-blue-500 underline'>Go back</a></Link> to add favourites.</h1>
			</div>
		</div>
	)
}

export default Favourites;