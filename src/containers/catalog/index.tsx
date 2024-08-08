"use client";
/**
 *
 * CatalogContainer
 *
 */

import { FC } from "react";

const CatalogContainer: FC = () => {
	const getContent = () => {
		return (
			<>
				<h2 className="mb-4 text-xl font-semibold text-gray-800">Catalog</h2>
			</>
		);
	};

	return getContent();
};

export default CatalogContainer;
