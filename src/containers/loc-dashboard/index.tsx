"use client";
/**
 *
 * LogDashboardContainer
 *
 */

import { FC } from "react";

const LogDashboardContainer: FC = () => {
	const getContent = () => {
		return (
			<>
				<h2 className="mb-4 text-xl font-semibold text-gray-800">LOC Dashboard</h2>
			</>
		);
	};

	return getContent();
};

export default LogDashboardContainer;
