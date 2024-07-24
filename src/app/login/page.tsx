import type { Metadata } from "next";
import LoginForm from '@/containers/login/LoginForm';

export const metadata: Metadata = {
	title: "Login | Admin | SMEAssist",
	description: "Admin user for SMEAssist",
};

const Login = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-violet-700">
			<div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
				<h1 className="text-3xl font-bold text-violet-700 mb-4">SMEAssist</h1>
				<ul className="list-none space-y-2 text-gray-700 mb-8">
					<li className="flex items-center">
						<svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
						Get Access to 10Lakh+ SMEs
					</li>
					<li className="flex items-center">
						<svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
						Get Unlimited enquiries from PAN India
					</li>
					<li className="flex items-center">
						<svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
						Track and manage orders at one place
					</li>
					<li className="flex items-center">
						<svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
						Get Advance Payments
					</li>
				</ul>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
