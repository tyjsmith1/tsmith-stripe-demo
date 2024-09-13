import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center'>
			<div className='absolute inset-0 bg-black opacity-50 z-10'></div>
			<Image
				src='/closet1.jpg'
				alt='Background Image'
				fill
				priority
				className='z-0 object-cover'
			/>
			<div className='container mx-auto px-4 md:px-6 flex justify-center items-center h-full relative z-10'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-200'>
							Welcome to Cozy Threads
						</h1>
						<p className='mx-auto max-w-[700px] text-gray-200 md:text-xl'>
							Experience the ultimate comfort with our super soft
							clothes.
						</p>
					</div>
					<div className='space-x-4'>
						<Link href='#our-products'>
							<Button className='text-gray-200'>Shop Now</Button>
						</Link>
						<Button className='text-gray-200' variant='outline'>
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
