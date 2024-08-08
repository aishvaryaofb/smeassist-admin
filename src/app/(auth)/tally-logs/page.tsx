/**
 *
 * TallyLogsPage
 *
 */

import type { Metadata } from "next";
import TallyLogsContainer from "@/containers/tally-logs";

export const metadata: Metadata = {
	title: "Tally Logs | Admin SMEAssist",
};

const TallyLogsPage = () => {
	return (
		<div className="pageWrapper">
			<TallyLogsContainer />
		</div>
	);
};

export default TallyLogsPage;
