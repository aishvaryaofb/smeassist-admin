interface minOrganisationsDto {
	organisationId: string;
	organisationName: string;
}

interface LoginDto {
	isLoggedIn: boolean;
	minAccountDto: MinAccountDto | null;
	unseenNotificationCount?: number;
	minOrganisationsList: minOrganisationsDto[];
}

interface RoleDto {
	account: AccountDto | any;
	cart: any | null;
	organizations: [];
	permissions: any;
}

interface MinAccountDto {
	accountId: string;
	name: string;
	email: string;
	mobile: string;
}

interface LoginRequest {
	mobileNumber: string;
	otp: string;
	whatsappConsent?: boolean;
}

interface UserDto {
	userId: string;
	name: string;
	email: string;
	mobileNumber: string;
	companyName: string;
	natureOfBusiness: string;
	isVerified: boolean;
	isNew: boolean;
	whatsappConsent: boolean;
	profilePercent: number;
	orderingEnabled: boolean;
	offers: {
		label: string;
		categoryId: string;
		percent: number;
		amount: number;
	};
}

interface OrgDto {
	organisationId: string;
	organisationName: string;
	isVerified: boolean;
	dateCreated: number;
	numberOfApplications: number;
	numberOfActiveLoans: number;
	numberOfOrders: number;
	numberOfRfqs: number;
	organisationPan: string;
}

interface LoginResponse {
	user: UserDto;
	token: string;
	organisations: Array<OrgDto>;
	categories: Category;
	l1categories: Set<string>;
	isNew: boolean;
	location: Location;
}

interface AccountDto {
	accountId: string;
	name: string;
	normalizedName: string;
	email: string;
	isMobileVerified: true;
	isEmailVerified: true;
	namedImage: string | null;
	profiles: {
		ADMIN: {
			type: string;
		};
		OFCONADMIN: {
			type: string;
		};
		OXYZOADMIN: {
			type: string;
		};
	};
	industryType: string;
	creditInfo: {
		creditStatus: string;
		appliedTime: number;
		lastModified: number;
		bankName: string | null;
		organizationType: string | null;
		contactName: string | null;
		contactNumber: string | null;
		companyName: string | null;
		salesPersonName: string | null;
		creditType: string | null;
	};
	roleIds: [];
	businessEntities: [];
	accountSource: {
		accountSourceType: string;
		source: string;
	};
	blocked: boolean;
	isVerified: boolean;
	test: boolean;
	mobile: string | null;
}

type BuildType = {
	mutation: <
	  ResultType,
	  QueryArgType = void,
	  BaseQuery extends BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
	>(
	  arg: {
		query: (arg: QueryArgType) => FetchArgs;
		transformResponse?: (response: any) => ResultType;
	  }
	) => any;
};
