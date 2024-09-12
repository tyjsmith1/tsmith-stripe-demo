import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ItemCard from '@/components/itemCard';
import Navbar from '@/components/navbar';

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />

			<main className='flex-1'>
				<Hero/>
				<ItemCard/>
			</main>
			
			<Footer />
		</div>
	);
}
