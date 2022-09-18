import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import CoinCard from '../components/CoinCard';
import CoinChart from '../components/CoinChart';
import Header from '../components/Header';
import fetcher from '../util/fetcher';

const CoinData: NextPage = () => {
    
    const router = useRouter();
    const { id } = router.query;
    const { data: coinData, error: coinError } = useSWR<any>(id ? `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false` : null, fetcher);
    const { data: coinHistoryData, error: coinHistoryError } = useSWR(id ? `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily` : null, fetcher);


	if(coinError || coinHistoryError) {
		return (
			<div>
                <Head>
					<title>Error</title>
				</Head>
				<Header />
				<div className='w-full h-screen flex justify-center items-center font-inter'>
					<h1>Unable to retrieve coin data at the moment. Check again later.</h1>
				</div>
			</div>
		)
	}

    if(coinData && coinHistoryData) {
        return (
            <div>
                <Head>
                    <title>{coinData && coinData.name}</title>
                </Head>
                <Header />
                <div className='w-full flex flex-col items-center md:mt-8 font-inter'>
                    <>
                        { coinData && <CoinCard data={coinData} /> }
                    </>
                </div>
                <div className='w-full flex flex-col items-center md:mt-8 font-inter'>
                    <>
                        { coinHistoryData && coinData && <CoinChart data={coinHistoryData} coinData={coinData} />}
                    </>
                </div>
            </div>
        )
    }

    return (
        <></>
    )
}

export default CoinData;