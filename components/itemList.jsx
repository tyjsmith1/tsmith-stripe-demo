import ItemCard from './itemCard';

async function getItems() {
	return [
		{
			id: 1,
			name: 'Product 1',
			price: 9.99,
			description: 'This is a description for Product 1',
		},
		{
			id: 2,
			name: 'Product 2',
			price: 19.98,
			description: 'This is a description for Product 2',
		},
		{
			id: 3,
			name: 'Product 3',
			price: 29.97,
			description: 'This is a description for Product 3',
		},
		{
			id: 4,
			name: 'Product 4',
			price: 39.96,
			description: 'This is a description for Product 4',
		},
	];
}

export default async function ItemList() {
	const items = await getItems();

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
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
