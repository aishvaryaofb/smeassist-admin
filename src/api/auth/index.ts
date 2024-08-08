import { SmeAPI } from "@/store/apiSlice";

export const AuthService = SmeAPI.injectEndpoints({
	endpoints: (build: BuildType) => ({
		getLoggedInDetails: build.mutation<LoginDto, void>({
			query: () => ({
				url: "/api/v1/getLoggedInDetails",
				method: "GET",
			}),
			transformResponse: (response: any) => response.data,
		}),
	}),
});

export const { useGetLoggedInDetailsMutation } = AuthService;
