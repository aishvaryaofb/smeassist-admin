"use client";
/**
 *
 * TallyLogsContainer
 *
 */

import { FC } from "react";

const TallyLogsContainer: FC = () => {
	const getContent = () => {
		return (
			<>
				<h2 className="mb-4 text-xl font-semibold text-gray-800">Tally Logs</h2>
			</>
		);
	};

	return getContent();
};

export default TallyLogsContainer;
