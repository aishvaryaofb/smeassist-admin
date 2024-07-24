"use client"

import Button from '@/components/button';
import { useFormState } from "react-dom";
import { signOut } from '@/lib/actions/auth';

const Dashboard = () => {
	const [formState, formAction] = useFormState(signOut, undefined);
    console.log("TCL: Dashboard -> formState", formState)
	return (
		<main className="p-24">
			<form action={formAction}>
				Dashboard
				<Button type="submit" variant="contained">Logout</Button>
			</form>
		</main>
	);
}

export default Dashboard;
