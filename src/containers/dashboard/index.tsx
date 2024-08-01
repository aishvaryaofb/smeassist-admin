"use client";

import { memo } from "react";
import { useFormState } from "react-dom";
// import { useSelector } from 'react-redux';

import Button from "@/components/button";
import { signOut } from "@/lib/actions/auth";

const Dashboard = () => {
	const [formState, formAction] = useFormState(signOut, undefined);
	// const pageInfo = useSelector((state: any) => state?.pageInfo);

	return (
		<form action={formAction}>
			Dashboard
			<Button type="submit" variant="contained">
				Logout
			</Button>
		</form>
	);
};

export default memo(Dashboard);
