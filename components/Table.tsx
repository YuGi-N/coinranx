import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HiArrowUp, HiArrowDown, HiOutlineHeart, HiHeart } from 'react-icons/hi';

interface TableProps {
    data: any,
}

const Table = ({ data }: TableProps) => {

    const [favourites, setFavourites] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        if(storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, [])

    function addFavourite(e: React.MouseEvent, id: string) {
        e.stopPropagation();
        const newFavourites = [...favourites, id];
        setFavourites(newFavourites);
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
    }

    function removeFavourite(e: React.MouseEvent ,id: string) {
        e.stopPropagation();
        const newFavourites = favourites.filter((coin: string) => coin !== id);
        setFavourites(newFavourites);
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
    }

    return (
        <table className='font-inter font-thin w-full md:max-w-4xl text-center border border-neutral-700 border-separate border-spacing-0 sm:rounded-lg table-fixed'>
            <thead className='h-14 bg-neutral-900'>
                <tr>
                    <th>Id</th>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Price Change</th>
                    <th>Favourite</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((coin: any, index: number) => {
                        return (
                            <tr key={ coin.id } className='hover:bg-neutral-600 h-12 cursor-pointer' onClick={() => router.push(`/${coin.id}`)}>
                                <td>{ index + 1 }</td>
                                <td className='flex flex-row justify-center items-center'><picture className='mt-3'><img className='w-6 h-6' src={ coin.image } alt={ coin.id + ' logo'} /></picture></td>
                                <td>{ coin.name }</td>
                                <td>{ coin.symbol }</td>
                                <td>{ `${coin.current_price}$` }</td>
                                <td className='flex flex-row justify-center items-center'>{ coin.price_change_24h < 0 ? <HiArrowDown className='text-red-500' /> : <HiArrowUp className='text-green-500' /> }</td>
                                <td className='pl-12'>{favourites.includes(coin.id) ? <HiHeart className='text-pink-500 h-6 w-6 cursor-pointer' onClick={(e) => removeFavourite(e, coin.id)} /> : <HiOutlineHeart className='text-pink-500 h-6 w-6 cursor-pointer' onClick={(e) => addFavourite(e, coin.id)}/>}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;