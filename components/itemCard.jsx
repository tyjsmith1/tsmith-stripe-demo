'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function ItemCard({ item }) {
	const addToCart = () => {
		console.log(`Added ${item.name} to cart`);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>{item.name}</CardTitle>
				<CardDescription>{item.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Image
					src={`/placeholder.svg?height=200&width=200&text=${item.name}`}
					alt={item.name}
					width={200}
					height={200}
					className='w-full h-48 object-cover'
				/>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<span className='text-2xl font-bold'>
					${item.price.toFixed(2)}
				</span>
				<Button onClick={addToCart}>Add to Cart</Button>
			</CardFooter>
		</Card>
	);
}
