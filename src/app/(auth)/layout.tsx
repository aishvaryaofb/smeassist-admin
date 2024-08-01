import React, { memo } from "react";
import { headers } from "next/headers";

import RequestManager from "@/lib/request";
import StoreProvider from "@/store/StoreProvider";

import Sidebar from "@/components/sidebar";
import Backdrop from "@/components/backdrop";

import "@/app/(auth)/style.scss";

type Props = { children: React.ReactNode };

const Layout = async ({ children }: Props) => {
	const loginData = await RequestManager.getLoggedInDetails();

	const getPageInfo = (): PageInfo => {
		const headersList = headers();
		const newHeaders = new Headers(headersList);
		return {
			protocol: newHeaders.get("x-next-protocol") || "",
			path: newHeaders.get("x-next-pathname") || "",
			query: newHeaders.get("x-next-search") || "",
			host: newHeaders.get("x-forwarded-host") || "",
			ip: newHeaders.get("X-Forwarded-For") || "",
			env: newHeaders.get("x-next-env") || "",
			domain: newHeaders.get("x-next-domain") || "",
			platform: newHeaders.get("x-next-platform") || "",
			namespace: newHeaders.get("namespace") || "",
		};
	};

	return (
		<StoreProvider loginData={loginData} pageInfo={getPageInfo()}>
			<main id="pageLayout" className="pageLayout min-h-svh bg-slate-50">
				<Sidebar />
				<section className="pageContent p-4">{children}</section>
			</main>
			{/* <Backdrop open /> */}
		</StoreProvider>
	);
};

export default memo(Layout);
