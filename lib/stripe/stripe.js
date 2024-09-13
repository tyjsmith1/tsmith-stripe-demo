import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const { items } = req.body;

			// Calculate the order amount
			const amount = items.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);

			// Create a PaymentIntent with the order amount and currency
			const paymentIntent = await stripe.paymentIntents.create({
				amount: Math.round(amount * 100), // Stripe expects amounts in cents
				currency: 'usd',
			});

			res.status(200).json({ clientSecret: paymentIntent.client_secret });
		} catch (err) {
			res.status(500).json({ statusCode: 500, message: err.message });
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
