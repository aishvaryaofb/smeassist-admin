import type { Metadata } from "next";
import DashboardForm from "@/containers/dashboard";

export const metadata: Metadata = {
	title: "Dashboard | Admin | SMEAssist",
	description: "Admin user for SMEAssist",
};

const Dashboard = () => {
	return (
		<div className="dashboardWrapper">
			<DashboardForm />
		</div>
	);
};

export default Dashboard;
