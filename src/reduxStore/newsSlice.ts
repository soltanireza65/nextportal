import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsApi } from "axios/client";
import { HYDRATE } from "next-redux-wrapper";

interface IProps {
  CategoryId: string;
  LocationCode: string;
  Count?: number;
}
export const GetLocationNews = createAsyncThunk(
  "news/GetLocationNews",
  async ({ CategoryId, LocationCode, Count }: IProps) => {
    const res = await NewsApi.GetLocationNews(CategoryId, LocationCode, Count);
    return res;

    // try {
    //   const res = await api({
    //     method: "get",
    //     url: `/news/api/News/GetLocationNews`,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     params: {
    //       CategoryId,
    //       LocationCode,
    //       Count,
    //     },
    //   });
    //   return res;
    // } catch (error) {
    //   return error;
    // }
  }
);

export const NewsSlice = createSlice({
  name: "Categories",
  initialState: {
    loading: false,
    news: [],
    hasError: false,
  },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.some,
      };
    },

    [GetLocationNews.pending.toString()]: (state, action) => {},
    [GetLocationNews.fulfilled.toString()]: (state, action) => {
      // state.entities.push(action.payload.data);
      state.news = action.payload.data;
    },
    [GetLocationNews.rejected.toString()]: (state, action) => {},
  },
});

// export const { incrementByAmount } = CategoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default NewsSlice.reducer;
