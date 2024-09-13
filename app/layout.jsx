import { CartProvider } from '@/lib/context/cartProvider';
import { UserProvider } from '@/lib/context/userProvider';
import './globals.css';

export const metadata = {
	title: 'Cozy Threads',
	description: 'This is a Stripe demo app.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<UserProvider>
					<CartProvider>{children}</CartProvider>
				</UserProvider>
			</body>
		</html>
	);
}
