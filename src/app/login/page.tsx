import type { Metadata } from "next";
import LoginForm from "@/containers/login";

export const metadata: Metadata = {
	title: "Login | Admin SMEAssist",
};

const Login = () => {
	console.log("lint test");

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
				<h1 className="mb-4 text-3xl font-bold text-violet-700">SMEAssist</h1>
				<ul className="mb-8 list-none space-y-2 text-gray-700">
					<li className="flex items-center">
						<svg className="mr-2 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						Get Access to 10Lakh+ SMEs
					</li>
					<li className="flex items-center">
						<svg className="mr-2 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						Get Unlimited enquiries from PAN India
					</li>
					<li className="flex items-center">
						<svg className="mr-2 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						Track and manage orders at one place
					</li>
					<li className="flex items-center">
						<svg className="mr-2 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						Get Advance Payments
					</li>
				</ul>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
