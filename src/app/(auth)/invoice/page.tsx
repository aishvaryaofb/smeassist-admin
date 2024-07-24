import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Invoice | Admin | SMEAssist",
	description: "Admin user for SMEAssist",
};

const Invoice = () => {
	return (
		<main className="p-24">
			Invoice
			<Link className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50" href="/">Home</Link>
		</main>
	);
}

export default Invoice;
