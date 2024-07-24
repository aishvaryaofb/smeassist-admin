import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/store';

import { initialState } from '.';

const selectSlice = (state: RootState) => state.pageInfo || initialState;

export const selectPageInfo = createSelector([selectSlice], (state) => state);

export const selectNamespace = createSelector([selectSlice], ({ namespace }) => namespace);
