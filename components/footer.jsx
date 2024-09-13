import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';

export default function Footer() {
	return (
		<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
			<p className='text-xs text-gray-500 dark:text-gray-400'>
				This is a demo app.
			</p>
			<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
				<Link
					href='https://github.com/tyjsmith1/tsmith-stripe-demo'
					target='_blank'
					rel='noopener noreferrer'>
					<FaGithub />
				</Link>
				<Link
					href='https://www.linkedin.com/in/tyler-smith-pm-se/'
					target='_blank'
					rel='noopener noreferrer'>
					<FaLinkedin />
				</Link>
				<Link
					href='https://www.tylerjsmith.dev/'
					target='_blank'
					rel='noopener noreferrer'>
					<IoShareSocial />
				</Link>
			</nav>
		</footer>
	);
}
