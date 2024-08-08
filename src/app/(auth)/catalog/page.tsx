/**
 *
 * CataLogPage
 *
 */

import type { Metadata } from "next";
import CatalogContainer from "@/containers/catalog";

export const metadata: Metadata = {
	title: "Catalog | Admin SMEAssist",
};

const CataLogPage = () => {
	return (
		<div className="pageWrapper">
			<CatalogContainer />
		</div>
	);
};

export default CataLogPage;
