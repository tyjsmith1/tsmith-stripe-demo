import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
	return (
		<header className='px-4 lg:px-6 h-14 flex items-center'>
			<a className='flex items-center justify-center' href='#'>
				<ShoppingCart className='h-6 w-6' />
				<span className='sr-only'>Cozy Threads</span>
			</a>
			<nav className='ml-auto flex gap-4 sm:gap-6'>
				<a
					className='text-sm font-medium hover:underline underline-offset-4'
					href='#'>
					Home
				</a>
				<a
					className='text-sm font-medium hover:underline underline-offset-4'
					href='#'>
					Shop
				</a>
				<a
					className='text-sm font-medium hover:underline underline-offset-4'
					href='#'>
					About
				</a>
				<a
					className='text-sm font-medium hover:underline underline-offset-4'
					href='#'>
					Contact
				</a>
			</nav>
		</header>
	);
}
