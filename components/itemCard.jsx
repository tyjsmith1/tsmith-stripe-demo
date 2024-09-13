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
import { addToCart } from '@/lib/cart/addToCart';
import { useCart } from '@/lib/context/cartProvider';
import { useUser } from '@/lib/context/userProvider';
import Image from 'next/image';
import { useState } from 'react';

export default function ItemCard({ item }) {
	const [loading, setLoading] = useState(false);
	const { user } = useUser();
	const { updateCartItems } = useCart();

	const handleAddToCart = async () => {
		setLoading(true);
		try {
			const userId = user ? user.id : null;
			const data = await addToCart(item.id, userId);
			console.log(`Added ${item.name} to cart`);
			updateCartItems({ ...item, quantity: 1 });
		} catch (error) {
			console.error('Error adding to cart:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>{item.name}</CardTitle>
				<CardDescription>{item.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Image
					src={item.img}
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
				<Button onClick={handleAddToCart} disabled={loading}>
					{loading ? 'Adding...' : 'Add to Cart'}
				</Button>
			</CardFooter>
		</Card>
	);
}
