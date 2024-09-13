'use client';

import ShoppingCartModal from '@/components/shoppingCartModal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineContactSupport } from 'react-icons/md';

export default function Navbar() {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	return (
		<header className='px-4 lg:px-6 h-14 flex items-center'>
			<Link className='flex items-center justify-center' href='#'>
				<h1>Cozy Threads</h1>
			</Link>

			<nav className='ml-auto flex gap-4 sm:gap-6'>
				<Link className='flex items-center justify-center' href='#'>
					<FaRegUser className='h-6 w-6' />
				</Link>
				<Link className='flex items-center justify-center' href='#'>
					<MdOutlineContactSupport className='h-6 w-6' />
				</Link>
				<Button
					variant='outline'
					size='icon'
					className='relative'
					onClick={() => setIsCartOpen(true)}>
					<BiShoppingBag className='h-4 w-4' />
					{cartItems.length > 0 && (
						<span className='absolute -top-2 -right-2 bg-primary text-primary-foreground founded-full w-5 h-5 text-xs flex items-center justify-center'>
							{cartItems.reduce(
								(total, item) => total + item.quantity,
								0
							)}
						</span>
					)}
				</Button>
			</nav>
			<ShoppingCartModal
				isOpen={isCartOpen}
				setIsOpen={setIsCartOpen}
				cartItems={cartItems}
				setCartItems={setCartItems}
			/>
		</header>
	);
}
