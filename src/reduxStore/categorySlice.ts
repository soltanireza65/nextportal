import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryApi } from "axios/client";
import { HYDRATE } from "next-redux-wrapper";

interface IProps {
  Flated: boolean;
  ModuleType: number;
  count: number;
}

export const getCategories = createAsyncThunk(
  "Categories/getCategories",
  async ({ Flated, ModuleType, count }: IProps) => {
    try {
      const { data: categories } = await CategoryApi.GetCategories({
        flated: Flated,
        moduleType: ModuleType,
        count: count,
      });

      // const res = await api({
      // 	method: 'get',
      // 	url: '/category/api/Category/GetCategories',
      // 	headers: {
      // 		'Content-Type': 'application/json'
      // 	},
      // 	params: {
      // 		Flated,
      // 		ModuleType,
      // 		count
      // 	}
      // });
      return categories;
    } catch (error) {
      return error;
    }
  }
);

interface CategoriesState {
  loading: boolean;
  entities: [];
  hasError: boolean;
}

const initialState: CategoriesState = {
  loading: false,
  entities: [],
  hasError: false,
};

export const CategoriesSlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.categories,
      };
    },

    [getCategories.pending.toString()]: (state, action) => {},
    [getCategories.fulfilled.toString()]: (state, action) => {
      // state.entities.push(action.payload.data);
      state.entities = action.payload;
    },
    [getCategories.rejected.toString()]: (state, action) => {},
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCategories.pending, (state, action) => {})
  //     .addCase(getCategories.fulfilled, (state, action) => {
  //       // state.entities.push(action.payload);
  //     })
  //     .addCase(getCategories.rejected, (state, action) => {});
  //   builder.addCase(HYDRATE, (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.some,
  //     };
  //   });
  // },
});

// export const { incrementByAmount } = CategoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default CategoriesSlice.reducer;
