import { Button } from '@/components/ui/button';
import {
	PaymentElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const [errorMessage, setErrorMessage] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: '/payment-result',
			},
		});

		if (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement />
			<Button type='submit' disabled={!stripe} className='mt-4 w-full'>
				Pay now
			</Button>
			{errorMessage && (
				<div className='text-red-500 mt-2'>{errorMessage}</div>
			)}
		</form>
	);
}
