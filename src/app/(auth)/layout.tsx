/**
 *
 * AuthLayout
 *
 */

import React, { memo } from "react";
import { headers } from "next/headers";

import RequestManager from "@/lib/request";
import StoreProvider from "@/store/StoreProvider";

import Sidebar from "@/components/sidebar";
import UnAuthorized from "@/components/ui/unauthorized";

import "@/app/(auth)/style.scss";

type Props = { children: React.ReactNode };

const AuthLayout = async ({ children }: Props) => {
	const loginData = await RequestManager.getLoggedInDetails();
	const isValidated = await RequestManager.validateSupportUser(loginData?.employeeDetails?.employeeId);

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

	if (!isValidated) {
		return <UnAuthorized />;
	}
	return (
		<StoreProvider loginData={loginData} pageInfo={getPageInfo()}>
			<main id="pageLayout" className="pageLayout min-h-svh bg-slate-50">
				<Sidebar />
				<section className="pageContent p-4">{children}</section>
			</main>
		</StoreProvider>
	);
};

export default memo(AuthLayout);
