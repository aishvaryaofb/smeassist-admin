interface AccountDetails {
	accountId: string;
	mobile: string | null;
	email: string;
	name: string;
	blocked: boolean;
	highlightFields: Array;
	lastActivity: string | null;
	userProfileType: string;
}
interface BuHeadResponse {
	content: Array<AccountDetails>;
	pageable: {
		sort: {
			unsorted: boolean;
			sorted: boolean;
			empty: boolean;
		};
		pageNumber: number;
		offset: number;
		pageSize: number;
		paged: boolean;
		unpaged: boolean;
	};
	totalElements: number;
	totalPages: number;
	last: boolean;
	sort: {
		unsorted: boolean;
		sorted: boolean;
		empty: boolean;
	};
	size: number;
	number: number;
	numberOfElements: number;
	first: boolean;
	empty: boolean;
}
