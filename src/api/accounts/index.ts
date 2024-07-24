import { SmeAPI } from '@/store/apiSlice';

export const AccountService = SmeAPI.injectEndpoints({
	endpoints: (build: BuildType) => ({
		getBuHead: build.mutation<BuHeadResponse, { query: string }>({
			query: ({ query }) => ({
				url: `/admin/api/v1/accounts?query=${query}&filter=USER_PROFILE_TYPE:ADMIN&pageNumber=0&pageSize=10`,
				method: 'GET',
			}),
			transformResponse: (response: any) => response.data,
		}),
	}),
});

export const { useGetBuHeadMutation } = AccountService;
