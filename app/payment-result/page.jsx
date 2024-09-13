'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function PaymentResultContent() {
	const router = useRouter();
	const [stripe, setStripe] = useState(null);
	const [message, setMessage] = useState('Processing your payment...');

	useEffect(() => {
		const initializeStripe = async () => {
			const stripeInstance = await stripePromise;
			setStripe(stripeInstance);
		};
		initializeStripe();
	}, []);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case 'succeeded':
					setMessage('Payment succeeded!');
					// Handle successful payment here
					break;
				case 'processing':
					setMessage('Your payment is processing.');
					break;
				case 'requires_payment_method':
					setMessage(
						'Your payment was not successful, please try again.'
					);
					break;
				default:
					setMessage('Something went wrong.');
					break;
			}
		});
	}, [stripe]);

	return <div>{message}</div>;
}

export default function PaymentResult() {
	return (
		<Elements stripe={stripePromise}>
			<PaymentResultContent />
		</Elements>
	);
}
