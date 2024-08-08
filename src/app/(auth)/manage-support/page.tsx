/**
 *
 * ManageSupportPage
 *
 */

import type { Metadata } from "next";
import ManageSupportContainer from "@/containers/manage-support";

export const metadata: Metadata = {
	title: "Manage Support | Admin SMEAssist",
};

const ManageSupportPage = async () => {
	return (
		<div className="pageWrapper">
			<ManageSupportContainer />
		</div>
	);
};

export default ManageSupportPage;
