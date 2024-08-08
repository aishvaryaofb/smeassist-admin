import React from "react";
import Link from "next/link";

const PageNotFound: React.FC = () => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-slate-50">
			<div className="max-w-sm rounded-lg bg-white p-8 text-center shadow-md">
				<svg className="mx-auto mb-4 h-16 w-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9.172 9.172a4 4 0 005.656 5.656M9.172 9.172a4 4 0 015.656 0M9.172 9.172L5.5 5.5M14.828 14.828L19.5 19.5M12 12L9.172 9.172m0 5.656a4 4 0 005.656-5.656M12 12l5.656 5.656M9.172 9.172L5.5 5.5M14.828 14.828L19.5 19.5"
					/>
				</svg>
				<h1 className="text-2xl font-semibold text-gray-800">Page Not Found</h1>
				<p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
				<div className="mt-4">
					<Link href="/" className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
						Go Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
