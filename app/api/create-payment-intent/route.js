import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
	try {
		const { items } = await request.json();

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

		return NextResponse.json({ clientSecret: paymentIntent.client_secret });
	} catch (err) {
		console.error('Error in create-payment-intent:', err);
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
