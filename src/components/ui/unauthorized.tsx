import React from "react";

const NotAuthorized: React.FC = () => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-slate-50">
			<div className="max-w-sm rounded-lg bg-white p-8 shadow-md">
				<div className="text-center">
					<svg
						className="mx-auto mb-4 h-16 w-16 text-red-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01" />
					</svg>
					<h1 className="text-2xl font-semibold text-gray-800">Not Authorized</h1>
					<p className="mt-4 text-gray-600">You do not have permission to view this page.</p>
				</div>
			</div>
		</div>
	);
};

export default NotAuthorized;
