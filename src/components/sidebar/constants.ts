import routes from "@/lib/routes";

export const SUPPORT_MODULE_CONFIG: Record<string, SupportModuleConfig> = {
	SUPPORT_PORTAL: {
		label: "Manage Support",
		href: routes.manageSupport.path,
		iconName: "folder_managed",
	},
	CATALOG: {
		label: "Catalog",
		href: routes.catalog.path,
		iconName: "folder_open",
	},
	LOC_LOGS: {
		label: "LOC Logs",
		href: routes.locLogs.path,
		iconName: "sync",
	},
	LOC_DASHBOARD: {
		label: "LOC Dashboard",
		href: routes.locDashboard.path,
		iconName: "team_dashboard",
	},
	TALLY_SUPPORT_LOGS: {
		label: "Tally Logs",
		href: routes.tallyLogs.path,
		iconName: "folder_managed",
	},
	TALLY_AGENT_STATUS: {
		label: "Tally Agent Status",
		href: routes.tallyAgentStatus.path,
		iconName: "manage_accounts",
	},
};

export const SUPPORT_PORTAL_NAV_MAP: SupportPortalNavMap = {
	SUPPORT_PORTAL: SUPPORT_MODULE_CONFIG.SUPPORT_PORTAL,
	CATALOG: SUPPORT_MODULE_CONFIG.CATALOG,
	LOC_LOGS: SUPPORT_MODULE_CONFIG.LOC_LOGS,
	LOC_DASHBOARD: SUPPORT_MODULE_CONFIG.LOC_DASHBOARD,
	TALLY_AGENT_STATUS: SUPPORT_MODULE_CONFIG.TALLY_AGENT_STATUS,
	TALLY_SUPPORT_LOGS: SUPPORT_MODULE_CONFIG.TALLY_SUPPORT_LOGS,
};
