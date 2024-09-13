import { useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PaymentResult() {
	const router = useRouter();
	const stripe = useStripe();

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
					console.log('Payment succeeded!');
					// Handle successful payment here
					break;
				case 'processing':
					console.log('Your payment is processing.');
					break;
				case 'requires_payment_method':
					console.log(
						'Your payment was not successful, please try again.'
					);
					break;
				default:
					console.log('Something went wrong.');
					break;
			}
		});
	}, [stripe]);

	return <div>Processing your payment...</div>;
}
