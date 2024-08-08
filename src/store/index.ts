import { configureStore, Action, StateFromReducersMapObject, Dispatch, AnyAction, EnhancedStore, ThunkDispatch, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { SmeAPI } from "@/store/apiSlice";
import { rootReducer } from "@/store/rootReducer";
import { errorHandlingMiddleware } from "@/store/errorHandlingMiddleware";

const initStore = (preloadedState?: Partial<RootState>): EnhancedStore => {
	const store = configureStore({
		reducer: rootReducer, // Assuming rootReducer is defined elsewhere
		middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat([SmeAPI.middleware, errorHandlingMiddleware]),
		devTools: process.env.NODE_ENV !== "production", // Adjust based on your environment setup
		preloadedState,
	});
	return store;
};

export type Store = ReturnType<typeof initStore>;
export type RootState = StateFromReducersMapObject<typeof rootReducer>;
export type AppDispatch = Store["dispatch"];
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export const useAppDispatch = (): Dispatch<AnyAction> & ThunkDispatch<RootState, undefined, AnyAction> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { initStore };
