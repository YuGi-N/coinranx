import { HiOutlineHeart } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {

    const router = useRouter();

    return (
        <header className='h-14 bg-neutral-900 flex items-center justify-center'>
            <div className='h-full w-full md:max-w-4xl flex flex-row items-center justify-center mx-4'>
                <Link href='/'><h1 className='text-2xl font-abel cursor-pointer'>Coinranx</h1></Link>
                <div className='flex-grow' />
                { router.pathname !== '/favourites' && 
                    <Link href='/favourites'>
                        <button className='font-abel flex flex-row gap-2 group items-center text-lg'>
                            <HiOutlineHeart className='group-hover:text-pink-500 h-4 w-4' />
                            Favourites
                        </button>
                    </Link>
                }
            </div>
        </header>
    )
}

export default Header;