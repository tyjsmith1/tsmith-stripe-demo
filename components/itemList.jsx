import { getProducts } from '../lib/product/getProducts';
import ItemCard from './itemCard';

export default async function ItemList() {
	const items = await getProducts();

	return (
		<section
			id='our-products'
			className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
			<div className='container px-4 md:px-6'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>
					Our Products
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{items.map((item) => (
						<ItemCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}
