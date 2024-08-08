"use client";

/**
 *
 * Sidebar
 *
 */

import React, { FC, memo } from "react";
import { useFormState } from "react-dom";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Button from "@/components/button";
import { signOut } from "@/lib/actions/auth";
import { SUPPORT_PORTAL_NAV_MAP } from "@/components/sidebar/constants";

type Props = {};

const Sidebar: FC = ({}: Props): React.ReactNode => {
	const pathname = usePathname();
	const [formState, formAction] = useFormState(signOut, undefined);

	const getLogoutButton = () => {
		return (
			<form action={formAction} className="w-full">
				<Button
					type="submit"
					variant="text"
					className="w-full justify-start px-4 py-2 capitalize text-white/[0.9] hover:bg-slate-700/[0.2] hover:text-white"
				>
					<span className="material-symbols-outlined text-2xl">logout</span>
					<span className="ml-2">Logout</span>
				</Button>
			</form>
		);
	};

	const getNav = (): React.ReactNode => {
		const keys = Object.values(SUPPORT_PORTAL_NAV_MAP);
		return (
			<div className="sidebarNav flex flex-wrap p-4">
				{keys.map((data: SupportModuleConfig) => (
					<Link
						href={data.href}
						key={data.label}
						className={classNames(
							"mb-2 flex w-full items-center rounded-md px-4 py-2 text-white/[0.9] transition hover:bg-slate-700/[0.2] hover:text-white",
							{
								"bg-slate-700/[0.3] text-white": data.href === pathname,
							}
						)}
					>
						<span className="material-symbols-outlined text-2xl">{data.iconName}</span>
						<span className="ml-2 text-sm">{data.label}</span>
					</Link>
				))}
			</div>
		);
	};

	const getSidebarHeader = (): React.ReactNode => {
		return (
			<div className="flex p-4">
				<div className="logoImage">
					<Image src="/logo-white.svg" width={60} height={18} alt="SME" />
				</div>
				<div className="ml-2 mt-[6px] text-sm font-medium uppercase tracking-wider text-white">Admin</div>
			</div>
		);
	};

	const getContent = (): React.ReactNode => {
		return (
			<aside id="sidebar" className="sidebar flex flex-col items-start">
				{getSidebarHeader()}
				{getNav()}
				<div className="mt-auto w-full p-4">{getLogoutButton()}</div>
			</aside>
		);
	};

	return getContent();
};

export default memo(Sidebar);
