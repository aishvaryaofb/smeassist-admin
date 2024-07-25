import { combineReducers, Reducer } from '@reduxjs/toolkit';

import { SmeAPI } from '@/store/apiSlice';
import { appReducer } from '@/store/appSlice';
import { pageReducer } from '@/store/pageSlice';
import { pageInfoReducer } from '@/store/pageInfoSlice';

export const rootReducer : any = {
	...pageReducer,
	app: appReducer,
	pageInfo: pageInfoReducer,
	[SmeAPI.reducerPath]: SmeAPI.reducer,
};

export function createReducer(): Reducer {
	return combineReducers(rootReducer);
}
