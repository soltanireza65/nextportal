import { configureStore, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import CategoriesReducer, { CategoriesSlice } from './categorySlice';
import NewsReducer from './newsSlice';
import pollingReducer from './pollingSlice';

const makeStore = () =>
	configureStore({
		reducer: {
			categories: CategoriesReducer,
			news: NewsReducer,
			pollings: pollingReducer
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						'polling/GetPollingById/fulfilled',
						'Categories/getCategories/fulfilled'
					]
				}
			})
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;

export const fetchSubject =
	(id: any): AppThunk =>
	async dispatch => {
		const timeoutPromise = (timeout: number) =>
			new Promise(resolve => setTimeout(resolve, timeout));

		await timeoutPromise(200);

		dispatch(CategoriesSlice.actions.setLoading(false));
	};

export const wrapper = createWrapper<AppStore>(makeStore);
