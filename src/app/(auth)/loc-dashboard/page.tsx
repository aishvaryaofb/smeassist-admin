/**
 *
 * LogDashboardPage
 *
 */

import type { Metadata } from "next";
import LogDashboardContainer from "@/containers/loc-dashboard";

export const metadata: Metadata = {
	title: "LOC Dashboard | Admin SMEAssist",
};

const LogDashboardPage = () => {
	return (
		<div className="pageWrapper">
			<LogDashboardContainer />
		</div>
	);
};

export default LogDashboardPage;
