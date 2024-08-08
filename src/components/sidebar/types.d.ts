type SupportModuleConfig = {
	label: string;
	href: string;
	iconName: string;
	// getUrl?: (query: any) => string;
};

type GenericMap<T> = {
	[key: string]: T;
};

type SupportPortalNavMap = GenericMap<SupportModuleConfig>;
