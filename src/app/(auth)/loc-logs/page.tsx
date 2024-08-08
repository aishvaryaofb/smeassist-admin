/**
 *
 * LocLogsPage
 *
 */

import type { Metadata } from "next";
import LocLogsContainer from "@/containers/loc-logs";

export const metadata: Metadata = {
	title: "LOC logs | Admin SMEAssist",
};

const LocLogsPage = () => {
	return (
		<div className="pageWrapper">
			<LocLogsContainer />
		</div>
	);
};

export default LocLogsPage;
