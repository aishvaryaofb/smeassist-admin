/**
 *
 * TallyAgentStatusPage
 *
 */

import type { Metadata } from "next";
import TallyAgentStatusContainer from "@/containers/tally-agent-status";

export const metadata: Metadata = {
	title: "Tally Agent Status | Admin SMEAssist",
};

const TallyAgentStatusPage = () => {
	return (
		<div className="pageWrapper">
			<TallyAgentStatusContainer />
		</div>
	);
};

export default TallyAgentStatusPage;
