import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';

import { inter } from '@/lib/fonts';
import ThemeProvider from '@/app/ThemeProvider';
import StoreProvider from '@/app/StoreProvider';

import "@/app/globals.css";

// require to set title of page
export const metadata: Metadata = {
	title: "Admin | SMEAssist",
	description: "Admin user for SMEAssist",
};

export default async function RootLayout({ children }: {  children: Readonly<React.ReactNode>}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastContainer />
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
