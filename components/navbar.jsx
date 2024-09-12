import { BiShoppingBag } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineContactSupport } from 'react-icons/md';

export default function Navbar() {
	return (
		<header className='px-4 lg:px-6 h-14 flex items-center'>
			<a className='flex items-center justify-center' href='#'>
				<h1>Cozy Threads</h1>
			</a>

			<nav className='ml-auto flex gap-4 sm:gap-6'>
				<a className='flex items-center justify-center' href='#'>
					<FaHome className='h-6 w-6' />
				</a>
				<a className='flex items-center justify-center' href='#'>
					<FaRegUser className='h-6 w-6' />
				</a>
				<a className='flex items-center justify-center' href='#'>
					<MdOutlineContactSupport className='h-6 w-6' />
				</a>
				<a className='flex items-center justify-center' href='#'>
					<BiShoppingBag className='h-6 w-6' />
					(0)
				</a>
			</nav>
		</header>
	);
}
