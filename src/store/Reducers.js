import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_NEWS_LIST_START,
  GET_NEWS_LIST_SUCCESS,
  GET_NEWS_LIST_FAILED,
} from './Actions'

const reducers = (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES_START:
      return {
        ...state,
        categories: [],
        loading: true,
      }
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      }
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    case GET_CATEGORY_START:
      return {
        ...state,
        categories: [],
        loading: true,
      }
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      }
    case GET_CATEGORY_FAILED:
      return {
        ...state,
        error: action.payload,
      }

    case GET_NEWS_LIST_START:
      return {
        ...state,
        queryNewsList: [],
        loading: true,
      }
    case GET_NEWS_LIST_SUCCESS:
      return {
        ...state,
        queryNewsList: action.payload,
        loading: false,
      }
    case GET_NEWS_LIST_FAILED:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default reducers
