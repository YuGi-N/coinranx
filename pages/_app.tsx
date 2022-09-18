import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

	useEffect(() => {
		const storedFavourites = localStorage.getItem('favourites');
		if(!storedFavourites) {
			localStorage.setItem('favourites', JSON.stringify([]));
		} 
	}, []);

  	return (
		<div className='bg-neutral-800 w-screen min-h-screen text-white'>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp;
