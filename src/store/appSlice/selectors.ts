import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";

import { initialState } from ".";

const selectDomain = (state: RootState) => state.app || initialState;

export const selectLoginData = createSelector([selectDomain], ({ loginData }: any) => loginData);

export const selectIsLoggedIn = createSelector([selectDomain], ({ loginData }: any) => loginData?.isLoggedIn);

export const selectToggleNav = createSelector([selectDomain], ({ toggleNav }: any) => toggleNav);

export const selectAccountId = createSelector([selectDomain], ({ loginData }: any) => loginData?.minAccountDto?.accountId);

export const selectAccountData = createSelector([selectDomain], ({ loginData }: any) => loginData?.minAccountDto);

export const selectRoleDetails = createSelector([selectDomain], ({ roleDetails }: any) => roleDetails.permissions);

export const selectSidebarPermissions = createSelector([selectDomain], ({ sidebarPermissions }: any) => sidebarPermissions);
