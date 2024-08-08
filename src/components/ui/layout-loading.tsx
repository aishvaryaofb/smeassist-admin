import React from "react";

import { NavCard, LayoutSkeleton } from "@/components/ui/skeletons";

const LayoutLoading: React.FC = () => {
	return (
		<main id="pageLayout" className="flex min-h-svh bg-white">
			<section className="flex min-h-svh w-[260px] shrink-0 flex-col bg-slate-800 p-4 py-8">
				<NavCard className="mb-2" />
				<NavCard className="mb-2" />
				<NavCard className="mb-2" />
				<NavCard className="mb-2" />
				<NavCard className="mt-auto" />
			</section>
			<section className="min-h-svh w-full p-4">
				<LayoutSkeleton />
			</section>
		</main>
	);
};

export default LayoutLoading;
