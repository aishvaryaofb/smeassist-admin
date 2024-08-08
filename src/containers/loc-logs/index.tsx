"use client";
/**
 *
 * LocLogsContainer
 *
 */

import { FC } from "react";

const LocLogsContainer: FC = () => {
	const getContent = () => {
		return (
			<>
				<h2 className="mb-4 text-xl font-semibold text-gray-800">LOC Logs</h2>
			</>
		);
	};

	return getContent();
};

export default LocLogsContainer;
