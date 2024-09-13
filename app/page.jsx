import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ItemList from '@/components/itemList';
import Navbar from '@/components/navbar';

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />

			<main className='flex-1'>
				<Hero/>
				<ItemList/>
			</main>
			
			<Footer />
		</div>
	);
}
