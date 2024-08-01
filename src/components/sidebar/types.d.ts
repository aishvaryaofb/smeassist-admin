type SupportModuleConfig = {
	label: string;
	href: string;
	iconName: string;
	// getUrl?: (query: any) => string;
};

type SupportPortalNavMap = {
	SUPPORT_PORTAL: SupportModuleConfig;
	CATALOG: SupportModuleConfig;
	LOC_LOGS: SupportModuleConfig;
	TALLY_AGENT_STATUS: SupportModuleConfig;
	TALLY_SUPPORT_LOGS: SupportModuleConfig;
};
