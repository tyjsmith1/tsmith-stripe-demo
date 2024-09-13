import supabaseClient from '../supabaseClient';

export async function getProducts() {
	const { data, error } = await supabaseClient.from('Product').select('*');

	if (error) {
		console.error('Error fetching products:', error.message);
		return [];
	}

	return data;
}
