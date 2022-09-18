import Image from 'next/image';
import { BsCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

interface CoinCardProps {
    data: any,
}

const CoinCard = ({ data }:CoinCardProps) => {

    const percentageChange = data.market_data.price_change_percentage_24h_in_currency.usd;
    const price = data.market_data.current_price.usd;

    return (
        <div className='w-full md:max-w-4xl bg-neutral-900 h-auto md:h-80 md:rounded-md flex flex-col md:flex-row'>
            <div className='flex flex-col justify-center items-center w-full md:w-64 gap-5 border-b md:border-r border-neutral-700 py-6'>
                <picture><img className='w-56 h-56' src={data.image.large} alt={`${data.name}_logo`} /></picture>
                <h1 className='text-xl'>{data.name}</h1>
            </div>
            <div className='flex flex-col flex-grow'>
                <div className='w-full flex flex-row items-center justify-center h-32 gap-8 flex-shrink text-xl border-b border-neutral-700'>
                    <p className='inline-block'>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(price)}</p>
                    <div className='flex flex-row items-center gap-1'>
                        {
                            percentageChange > 0 ? 
                            <div className='flex flex-row items-center gap-1 text-green-500'>
                                <BsFillCaretUpFill />
                                <p>{`${percentageChange}%`}</p>
                            </div> : 
                            <div className='flex flex-row items-center gap-1 text-red-500'>
                                <BsCaretDownFill />
                                <p>{`${percentageChange}%`}</p>
                             </div>
                        }
                    </div>
                </div>
                <div className='flex-grow grid grid-cols-2 items-center text-center w-full h-60 md:h-auto'>
                    <p className='h-full w-full flex items-center justify-center text-lg'>{`All Time High: ${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(data.market_data.ath.usd)}`}</p>
                    <p className='h-full w-full flex items-center justify-center text-lg'>{`All Time Low: ${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(data.market_data.atl.usd)}`}</p>
                    <p className='h-full w-full flex items-center justify-center text-lg'>{`Market cap rank: ${data.market_cap_rank}`}</p>
                    <p className='h-full w-full flex items-center justify-center text-lg'>{`Market cap: ${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(data.market_data.market_cap.usd)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default CoinCard;