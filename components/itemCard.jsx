import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function ItemCard() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-left'>
					Our Products
				</h2>
				<div className='flex justify-center'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{[1, 2, 3, 4].map((item) => (
							<Card key={item}>
								<CardHeader>
									<CardTitle>Product {item}</CardTitle>
									<CardDescription>
										This is a description for Product {item}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<img
										src={`/placeholder.svg?height=200&width=200&text=Product+${item}`}
										alt={`Product ${item}`}
										className='w-full h-48 object-cover'
									/>
								</CardContent>
								<CardFooter className='flex justify-between'>
									<span className='text-2xl font-bold'>
										${(item * 9.99).toFixed(2)}
									</span>
									<Button>Add to Cart</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
