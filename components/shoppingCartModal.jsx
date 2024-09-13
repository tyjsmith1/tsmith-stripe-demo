'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { useCart } from '@/lib/context/cartProvider';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import CheckoutModal from './checkoutModal';

export default function ShoppingCartModal({ isOpen, setIsOpen }) {
	const { cartItems, updateCartItems } = useCart();
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

	const removeFromCart = (id) => {
		updateCartItems({ id, quantity: 0 }); // This will remove the item from the cart
	};

	const getTotalPrice = () => {
		return cartItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	return (
		<>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className='sm:max-w-[425px] bg-white shadow-lg rounded-lg'>
					<DialogHeader>
						<DialogTitle>Shopping Cart</DialogTitle>
						<DialogDescription>
							Review your items before checkout!
						</DialogDescription>
					</DialogHeader>
					<div className='mt-4 space-y-4'>
						{cartItems.length === 0 ? (
							<p className='text-gray-700'>Your cart is empty.</p>
						) : (
							cartItems.map((item) => (
								<div
									key={item.id}
									className='flex justify-between items-center'>
									<div>
										<p className='font-medium'>
											{item.name}
										</p>
										<p className='text-sm text-gray-500'>
											${item.price.toFixed(2)} x{' '}
											{item.quantity}
										</p>
									</div>
									<Button
										variant='outline'
										size='icon'
										onClick={() => removeFromCart(item.id)}>
										<IoClose className='h-4 w-4 text-gray-700' />
									</Button>
								</div>
							))
						)}
						{cartItems.length > 0 && (
							<div className='flex justify-between items-center font-bold text-gray-900'>
								<p>Total: </p>
								<p>${getTotalPrice()}</p>
							</div>
						)}
					</div>
					<div className='mt-4'>
						<Button
							className='w-full'
							disabled={cartItems.length === 0}
							onClick={() => setIsCheckoutOpen(true)}>
							Checkout
						</Button>
					</div>
				</DialogContent>
			</Dialog>
			<CheckoutModal
				isOpen={isCheckoutOpen}
				setIsOpen={setIsCheckoutOpen}
			/>
		</>
	);
}
