export const SUPPORT_MODULE_CONFIG: Record<string, SupportModuleConfig> = {
	SUPPORT_PORTAL: {
		label: "Manage Support",
		href: "/manage-support",
		iconName: "folder_managed",
		// getUrl: query => Navigation.getSupportPortal(query),
	},
	CATALOG: {
		label: "Catalog",
		href: "/catalog",
		iconName: "folder_open",
		// getUrl: query => Navigation.getTallyAgentStatusList(query),
	},
	LOC_LOGS: {
		label: "LOC",
		href: "/loc-logs",
		iconName: "sync",
		// getUrl: query => Navigation.getLocLogList(query),
	},
	TALLY_AGENT_STATUS: {
		label: "Tally Agent Status",
		href: "/tally-agent-status",
		iconName: "manage_accounts",
		// getUrl: query => Navigation.getTallyAgentStatusList(query),
	},
	TALLY_SUPPORT_LOGS: {
		label: "Tally Logs",
		href: "/tally-logs",
		iconName: "folder_managed",
		// getUrl: query => Navigation.getTallySupportLogList(query),
	},
};

export const SUPPORT_PORTAL_NAV_MAP: SupportPortalNavMap = {
	SUPPORT_PORTAL: SUPPORT_MODULE_CONFIG.SUPPORT_PORTAL,
	CATALOG: SUPPORT_MODULE_CONFIG.CATALOG,
	LOC_LOGS: SUPPORT_MODULE_CONFIG.LOC_LOGS,
	TALLY_AGENT_STATUS: SUPPORT_MODULE_CONFIG.TALLY_AGENT_STATUS,
	TALLY_SUPPORT_LOGS: SUPPORT_MODULE_CONFIG.TALLY_SUPPORT_LOGS,
};
