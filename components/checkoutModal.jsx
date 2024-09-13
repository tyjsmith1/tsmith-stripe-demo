import { useCart } from '@/lib/context/cartProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutModal({ isOpen, setIsOpen }) {
	const [clientSecret, setClientSecret] = useState('');
	const [error, setError] = useState(null);
	const { cartItems } = useCart();

	useEffect(() => {
		if (isOpen && cartItems.length > 0) {
			fetch('/api/create-payment-intent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items: cartItems }),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.clientSecret) {
						setClientSecret(data.clientSecret);
					} else {
						setError('Failed to create payment intent');
					}
				})
				.catch((err) => {
					console.error('Error fetching client secret:', err);
					setError('An error occurred while setting up the payment');
				});
		}
	}, [isOpen, cartItems]);

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-white p-8 rounded-lg w-full max-w-md'>
				<h2 className='text-2xl font-bold mb-4'>Checkout</h2>
				<button
					onClick={() => setIsOpen(false)}
					className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'>
					Close
				</button>
				{error && <p className='text-red-500 mb-4'>{error}</p>}
				{clientSecret ? (
					<Elements stripe={stripePromise} options={{ clientSecret }}>
						<CheckoutForm />
					</Elements>
				) : (
					<p>Loading payment form...</p>
				)}
			</div>
		</div>
	);
}
