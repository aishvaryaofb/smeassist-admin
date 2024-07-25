import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
	loginData: LoginDto;
	roleDetails: RoleDto;
	sidebarPermissions: any;
	toggleNav: boolean;
}

export const initialState: AppState | undefined = {
	loginData: {
		isLoggedIn: false,
		minAccountDto: null,
		minOrganisationsList: [],
		unseenNotificationCount: 0,
	},
	roleDetails: {
		account: {},
		cart: {},
		organizations: [],
		permissions: {},
	},
	sidebarPermissions: {},
	toggleNav: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoginData: (state, action: PayloadAction<LoginDto>) => {
			state.loginData = action.payload;
		},
		setRoleDetails: (state, action: PayloadAction<RoleDto>) => {
			state.roleDetails = action.payload;
		},
		setSidebarPermissions: (state, action: PayloadAction<RoleDto>) => {
			state.sidebarPermissions = action.payload;
		},
		setToggleNav: (state, action: PayloadAction<boolean>) => {
			state.toggleNav = action.payload;
		},
	},
});

export const { setLoginData, setRoleDetails, setSidebarPermissions, setToggleNav } = appSlice.actions;
export const appReducer = appSlice.reducer;
