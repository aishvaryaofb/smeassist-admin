import type { Metadata } from "next";
import DashboardForm from "@/containers/dashboard";

export const metadata: Metadata = {
	title: "Dashboard | Admin | SMEAssist",
	description: "Admin user for SMEAssist",
};

const Dashboard = () => {
	return (
		<main className="p-24">
			<DashboardForm />
		</main>
	);
}

export default Dashboard;
