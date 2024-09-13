import supabaseClient from '../supabaseClient';

export async function addToCart(productId, userId = null) {
	const cartItem = { productId, quantity: 1 };
	if (userId) cartItem.userId = userId;

	const { data, error } = await supabaseClient
		.from('CartItem')
		.insert([cartItem]);

	if (error) {
		throw new Error(error.message);
	}

	return data;
}
