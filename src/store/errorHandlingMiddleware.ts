import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { SmeAPI } from '@/store/apiSlice';
import { initialState, setLoginData } from '@/store/appSlice';
// import cookieManager from '@/lib/cookies';

interface ApiErrorAction {
	type: string;
	payload: {
		status?: number;
		originalStatus?: number;
		[key: string]: any; // allows additional properties in the payload
	};
}

const isApiErrorAction = (action: any): action is ApiErrorAction => {
	return typeof action === 'object' && action.type && action.payload;
};

export const errorHandlingMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
	if (isApiErrorAction(action)) {
		// Check if this is a rejected action from the api service
		if (action.type.endsWith('/rejected') && action.type.startsWith(SmeAPI.reducerPath)) {
			// Dispatch an action to update a different slice
			if (action.payload.status === 401 || action.payload.originalStatus === 401) {
				store.dispatch(setLoginData(initialState.loginData));
				// cookieManager.delete('X-Assist-Token');
    			// cookieManager.delete('X-Org-Id');
			}
		}
	}

	// Move to the next middleware in the chain
	return next(action);
};
