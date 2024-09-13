import 'dotenv/config';

import supabaseClient from './lib/supabaseClient.js';

const products = [
	{
		id: 1,
		img: 'https://rkljpvoafxivhtholtfb.supabase.co/storage/v1/object/public/productImages/commuterHoodie.jpg',
		name: 'Commuter Hoodie',
		price: 9.99,
		description:
			'Stay comfortable on the go with the Commuter Hoodie. Crafted with lightweight fabric and designed for urban adventures, this hoodie is perfect for those who value style and functionality.',
	},
	{
		id: 2,
		img: 'https://rkljpvoafxivhtholtfb.supabase.co/storage/v1/object/public/productImages/DistressedHoodie.jpg',
		name: 'Distressed Hoodie',
		price: 19.98,
		description:
			'The Distressed Hoodie combines a vintage look with modern comfort. Featuring a worn-in, rugged style, this hoodie is perfect for those who appreciate a timeless, edgy aesthetic.',
	},
	{
		id: 3,
		img: 'https://rkljpvoafxivhtholtfb.supabase.co/storage/v1/object/public/productImages/skylineHoodie.jpg',
		name: 'Skyline Hoodie',
		price: 29.97,
		description:
			"Inspired by the city skyline, the Skyline Hoodie offers a sleek, modern fit with breathable material. Whether you're hitting the streets or relaxing, this hoodie keeps you looking sharp.",
	},
	{
		id: 4,
		img: 'https://rkljpvoafxivhtholtfb.supabase.co/storage/v1/object/public/productImages/urbanHoodie.jpg',
		name: 'Urban Hoodie',
		price: 39.96,
		description:
			'With its minimalist design and premium fabric, the Urban Hoodie is your go-to for a stylish, versatile look. Ideal for everyday wear, this hoodie blends comfort with contemporary urban flair.',
	},
];

async function insertProducts() {
	const { data, error } = await supabaseClient
		.from('Product')
		.insert(products);

	if (error) {
		console.error('Error inserting data:', error.message);
	} else {
		console.log('Products inserted successfully:', data);
	}
}

insertProducts();
