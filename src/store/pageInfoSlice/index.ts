import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: PageInfo | undefined = {
	protocol: "",
	path: "",
	query: {},
	host: "",
	domain: "",
	ip: "",
	env: "",
	namespace: "",
	platform: "",
};

const pageInfoSlice = createSlice({
	name: "pageInfo",
	initialState,
	reducers: {
		updatePageInfoFromReq(state, action: PayloadAction<any>) {
			const { protocol, path, query, host, platform, ip, namespace, env } = action.payload;
			state.protocol = protocol;
			state.path = path;
			state.query = query;
			state.host = host;
			state.domain = "";
			state.platform = platform;
			state.ip = ip;
			state.namespace = namespace;
			state.env = env;
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
		updateNamespace(state, action: PayloadAction<string>) {
			state.namespace = action.payload;
		},
	},
});

export const { updatePageInfoFromReq, updateProtocol, updatePath, updateQuery, updateHost, updateDomain, updatePlatform, updateNamespace } =
	pageInfoSlice.actions;

export const pageInfoReducer = pageInfoSlice.reducer;
