import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/store';

import { initialState } from '.';

const selectDomain = (state: RootState) => state.app || initialState;

export const selectLoginData = createSelector([selectDomain], ({ loginData }) => loginData);

export const selectIsLoggedIn = createSelector([selectDomain], ({ loginData }) => loginData?.isLoggedIn);

export const selectToggleNav = createSelector([selectDomain], ({ toggleNav }) => toggleNav);

export const selectAccountId = createSelector([selectDomain], ({ loginData }) => loginData?.minAccountDto?.accountId);

export const selectAccountData = createSelector([selectDomain], ({ loginData }) => loginData?.minAccountDto);

export const selectRoleDetails = createSelector([selectDomain], ({ roleDetails }) => roleDetails.permissions);

export const selectSidebarPermissions = createSelector([selectDomain], ({ sidebarPermissions }) => sidebarPermissions);
