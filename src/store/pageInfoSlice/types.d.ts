interface PageInfo {
	protocol: string;
	path: string;
	query: Record<any>;
	host: string;
	domain: string;
	platform: string;
	isApp: boolean;
	appVersion: string;
	appClientName: string;
	cookie: Record<string, any>;
	ip: any;
	env: string;
	namespace: string;
}
