import api, { NewsApi } from 'axios/client';
import { createContext, useReducer } from 'react';
import {
	GET_CATEGORIES_FAILED,
	GET_CATEGORIES_START,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORY_FAILED,
	GET_CATEGORY_START,
	GET_CATEGORY_SUCCESS,
	GET_NEWS_ITEM_FAILED,
	GET_NEWS_ITEM_START,
	GET_NEWS_ITEM_SUCCESS, GET_NEWS_LIST_FAILED, GET_NEWS_LIST_START,
	GET_NEWS_LIST_SUCCESS
} from './Actions';
import reducers from './Reducers';


const initialState = {
	categories: [],
	category: [],
	news: [],
	newItem: [],
	error: null,
	loading: false
};

// export const AppContext = createContext<IAppContext | null>( initialState )
export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducers, initialState);

	const getCategories = async () => {
		try {
			dispatch({
				type: GET_CATEGORIES_START
			});
			const res = await NewsApi.GetCategories(true, 1, 5);

			dispatch({
				type: GET_CATEGORIES_SUCCESS,
				payload: res
			});
		} catch (error) {
			dispatch({
				type: GET_CATEGORIES_FAILED,
				payload: error.response
				// payload: error.response.data.error,
			});
		}
	};
	const getCategoryByID = async id => {
		try {
			dispatch({
				type: GET_CATEGORY_START
			});

			const res = await api({
				method: 'get',
				url: `/api/Category/GetCategoryById/${id}`
			});

			dispatch({
				type: GET_CATEGORY_SUCCESS,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: GET_CATEGORY_FAILED,
				payload: error.response
				// payload: error.response.data.error,
			});
		}
	};

	const getNewsList = async (fromDate, toDate, categoryID, title, tags) => {
		try {
			dispatch({
				type: GET_NEWS_LIST_START
			});
			const res = await NewsApi.GetPublishedNews(
				fromDate,
				toDate,
				categoryID,
				title,
				tags
			);

			dispatch({
				type: GET_NEWS_LIST_SUCCESS,
				payload: res
			});
		} catch (error) {
			dispatch({
				type: GET_NEWS_LIST_FAILED,
				payload: error.response
				// payload: error.response.data.error,
			});
		}
	};

	const getSingleNews = async id => {
		try {
			dispatch({
				type: GET_NEWS_ITEM_START
			});
			const res = await api({
				method: 'get'
				// url: ``,
			});
			dispatch({
				type: GET_NEWS_ITEM_SUCCESS,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: GET_NEWS_ITEM_FAILED,
				payload: error.response
				// payload: error.response.data.error,
			});
		}
	};

	const addComment = async (
		contentId,
		moduleType,
		content,
		fullName,
		email,
		showEmail,
		captchaText,
		captchaToken,
		captchaUserInputText
	) => {
		try {
			// dispatch({
			//   type: GET_NEWS_ITEM_START,
			// });
			const res = await api({
				method: 'POST',
				url: `/comment/api/Comment/AddComment`,
				data: {
					contentId,
					moduleType,
					content,
					fullName,
					email,
					showEmail,
					captchaText,
					captchaToken,
					captchaUserInputText
				}
			});
			// dispatch({
			//   type: GET_NEWS_ITEM_SUCCESS,
			//   payload: res.data,
			// });
		} catch (error) {
			dispatch({
				type: GET_NEWS_ITEM_FAILED,
				payload: error.response
				// payload: error.response.data.error,
			});
		}
	};

	return (
		<AppContext.Provider
			value={{
				state,
				dispatch,
				getCategories,
				getCategoryByID,
				getNewsList,
				getSingleNews,
				addComment
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
