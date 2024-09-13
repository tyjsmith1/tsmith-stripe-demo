import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
	const buf = await req.text();
	const sig = req.headers.get('stripe-signature');

	let event;

	try {
		event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
	} catch (err) {
		return NextResponse.json(
			{ error: `Webhook Error: ${err.message}` },
			{ status: 400 }
		);
	}

	switch (event.type) {
		case 'payment_intent.succeeded':
			const paymentIntent = event.data.object;
			console.log('PaymentIntent was successful!');
			// Handle successful payment here
			break;
		default:
			console.log(`Unhandled event type ${event.type}`);
	}

	return NextResponse.json({ received: true });
}
