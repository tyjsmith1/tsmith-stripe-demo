'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import supabaseClient from '../supabaseClient';

const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const { data: authListener } = supabaseClient.auth.onAuthStateChange(
			async (event, session) => {
				if (session) {
					setUser(session.user);
				} else {
					setUser(null);
				}
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	return useContext(UserContext);
}
