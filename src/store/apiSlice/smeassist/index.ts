import {
	// buildCreateApi,
	// coreModule,
	// reactHooksModule,
	createApi,
	fetchBaseQuery,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
// import cookieManager from '@/lib/cookies';

// import { isUndefinedOrNullOrEmpty } from '@ofbtech/components.utils';
import { RootState } from '@/store';
// import { isServer } from 'utils';

let createApiFunction = createApi;

/*
For data prefetching during SSR we need to use a modified createApi function.
You can remove this modification if you do not need this api to be used on the server.
*/
// if (isServer) {
// 	createApiFunction = buildCreateApi(coreModule(), reactHooksModule({ unstable__sideEffectsInRender: true }));
// }

const getBaseUrlByNamespace = (namespace: string): string => {
	switch (namespace) {
		case 'smeassist':
			return SME_API_URL;
		default:
			return SME_API_URL;
	}
};

const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
	const rootState = api.getState() as RootState;
	const { pageInfo } = rootState;
	const baseUrl = getBaseUrlByNamespace(pageInfo?.namespace);

	if (!baseUrl) {
		throw new Error(`Missing BASE_URL ${baseUrl} mapping for namespace ${pageInfo?.namespace}`);
	}

	const rawBaseQuery = fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers) => {
			const namespace = pageInfo?.namespace;
			// const serverToken = pageInfo?.cookie['admin-auth-token'];
			// const serverLatLong = pageInfo?.cookie['lat-long'];
			// const token = cookieManager.get('X-Assist-Token');
			// const orgId = cookieManager.get('X-Org-Id');
			// const latLong = isServer ? serverLatLong : cookies().get('lat-long');
			// if (token) {
			// 	headers.set('X-ASSIST-TOKEN', token);
			// }
			// if (orgId) {
			// 	headers.set('X-ORG-ID', orgId);
			// }
			// if (!headers.has('Content-Type')) {
			// 	headers.set('Content-Type', 'application/json');
			// }
			// if (!isUndefinedOrNullOrEmpty(latLong)) {
			// 	const { latitude, longitude } = JSON.parse(latLong);
			// 	headers.set('X-LOCATION-LAT', latitude);
			// 	headers.set('X-LOCATION-LONG', longitude);
			// }
			headers.set('X-OFB-PLATFORM', PLATFORM);
			headers.set('X-NAMESPACE', namespace);
			return headers;
		},
	});

	return rawBaseQuery(args, api, extraOptions);
};

export const SmeAPI = createApiFunction({
	reducerPath: 'SmeAPI',
	baseQuery: dynamicBaseQuery,
	tagTypes: ['AUTH'],
	endpoints: () => ({}),
});
