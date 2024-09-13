'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const updateCartItems = (newItem) => {
		setCartItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex(
				(item) => item.id === newItem.id
			);
			if (existingItemIndex > -1) {
				// If item exists, update its quantity
				const updatedItems = [...prevItems];
				if (newItem.quantity === 0) {
					// Remove item if quantity is set to 0
					updatedItems.splice(existingItemIndex, 1);
				} else {
					updatedItems[existingItemIndex] = {
						...updatedItems[existingItemIndex],
						quantity: newItem.quantity,
					};
				}
				return updatedItems;
			} else if (newItem.quantity > 0) {
				// If item doesn't exist and quantity is positive, add it to the cart
				return [...prevItems, newItem];
			}
			return prevItems;
		});
	};

	return (
		<CartContext.Provider value={{ cartItems, updateCartItems }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
