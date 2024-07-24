import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: PageInfo | undefined = {
	protocol: '',
	path: '',
	query: {},
	host: '',
	domain: '',
	platform: '',
	isApp: false,
	appVersion: '',
	appClientName: '',
	cookie: {},
	ip: '',
	env: process.env.NODE_ENV,
	namespace: '',
};

const pageInfoSlice = createSlice({
	name: 'pageInfo',
	initialState,
	reducers: {
		updatePageInfoFromReq(state, action: PayloadAction<any>) {
			const { protocol, path, query, hostname, headers, cookies, platform, ip, namespace } = action.payload;
			state.protocol = protocol;
			state.path = path;
			state.query = query;
			state.host = hostname;
			state.isApp =
				headers['is-android-app'] === 'true' ||
				headers['is-ios-app'] === 'true' ||
				headers['x-client-name'] === 'SALES_APP' ||
				headers['x-client-name'] === 'BUYER_APP' ||
				cookies.isApp;
			state.appVersion = headers['x-build-number'];
			state.appClientName = headers['x-client-name'];
			state.domain = '';
			state.platform = platform;
			state.cookie = cookies;
			state.ip = ip;
			state.namespace = namespace;
		},
		updateProtocol(state, action: PayloadAction<string>) {
			state.protocol = action.payload;
		},
		updatePath(state, action: PayloadAction<string>) {
			state.path = action.payload;
		},
		updateQuery(state, action: PayloadAction<Record<string, string | string[]>>) {
			state.query = action.payload;
		},
		updateHost(state, action: PayloadAction<string>) {
			state.host = action.payload;
		},
		updateDomain(state, action: PayloadAction<string>) {
			state.domain = action.payload;
		},
		updatePlatform(state, action: PayloadAction<string>) {
			state.platform = action.payload;
		},
		updateIsApp(state, action: PayloadAction<boolean>) {
			state.isApp = action.payload;
		},
		updateAppVersion(state, action: PayloadAction<string>) {
			state.appVersion = action.payload;
		},
		updateAppClientName(state, action: PayloadAction<string>) {
			state.appClientName = action.payload;
		},
		updateCookie(state, action: PayloadAction<Record<string, any>>) {
			state.cookie = action.payload;
		},
		updateNamespace(state, action: PayloadAction<string>) {
			state.namespace = action.payload;
		},
	},
});

export const {
	updatePageInfoFromReq,
	updateProtocol,
	updatePath,
	updateQuery,
	updateHost,
	updateDomain,
	updatePlatform,
	updateIsApp,
	updateAppVersion,
	updateAppClientName,
	updateCookie,
	updateNamespace,
} = pageInfoSlice.actions;

export const pageInfoReducer = pageInfoSlice.reducer;
