import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import api from 'axios/client';
import { IPolling } from 'interfaces';
import { toast } from 'react-toastify';

interface IProps {
	ModuleType?: number;
	ContentId?: string;
	ID?: string;
	pollingId?: string;
	optionId?: string;
}
export const GetPollings = createAsyncThunk(
	'polling/GetPollung',
	async ({ ModuleType }: IProps) => {
		//   api.get()

		const result = await api({
			method: 'get',
			url: `/polling/api/Polling/GetPollings`,
			headers: {},
			params: {
				ModuleType
			}
		});
	}
);

export const GetPollingByContentID = createAsyncThunk(
	'polling/GetPollingById',
	async ({ ModuleType, ContentId }: IProps) => {
		const result = await api({
			method: 'get',
			url: `/polling/api/Polling/GetPollings`,
			headers: {},
			params: {
				ModuleType,
				ContentId
			}
		});

		return result;
	}
);

export const VotePolling = createAsyncThunk(
	'polling/VotePolling',
	async ({ pollingId, optionId }: IProps, { dispatch }) => {
		const result = await api({
			method: 'post',
			url: `/polling/api/Polling/VotePolling`,
			headers: {},
			data: {
				pollingId,
				optionId
			}
		});

		if (result.data.status == 2) {
			const { message } = result.data;
			toast.error(message);
			throw new Error(message);
		}

		return result;
	}
);

interface initialState {
	loading: boolean;
	entities: IPolling[];
	currentPolling: IPolling | null;
	hasError: boolean;
	canVote: boolean;
}

const initialState: initialState = {
	loading: false,
	entities: [],
	hasError: false,
	currentPolling: null,
	canVote: false
};

export const PollingSlice = createSlice({
	name: 'Pollings',
	initialState: initialState,
	// initialState: {
	//   loading: false,
	//   entities: [],
	//   currentPolling: {
	//     options: [],
	//     totalVoteCount: 0,
	//     userCanVote: true,
	//   },
	//   hasError: false,
	// },
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.pollings
			};
		},

		[GetPollings.pending.toString()]: (state, action) => {},
		[GetPollings.fulfilled.toString()]: (state, action) => {
			// state.entities.push(action.payload.data);
			state.entities = action.payload.data.data;
		},
		[GetPollings.rejected.toString()]: (state, action) => {},

		[GetPollingByContentID.pending.toString()]: (state, action) => {},
		[GetPollingByContentID.fulfilled.toString()]: (state, action) => {
			// state.entities.push(action.payload.data);
			state.entities = action.payload.data.data;
			// state.canVote = Boolean(localStorage.getItem(state.currentPolling.id));
		},
		[GetPollingByContentID.rejected.toString()]: (state, action) => {},
		[VotePolling.fulfilled.toString()]: (state, action) => {
			const currentPolling = state.entities.find(
				polling => polling.id == action.meta.arg.pollingId
			);
			const option = currentPolling.options.find(
				option => option.id == action.meta.arg.optionId
			);
			option.voteCount += 1;
			localStorage.setItem(action.meta.arg.pollingId, JSON.stringify(true));
		},
		[VotePolling.rejected.toString()]: (state, action) => {
			localStorage.setItem(action.meta.arg.pollingId, JSON.stringify(true));
		}
	}
});

// export const { incrementByAmount } = CategoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default PollingSlice.reducer;
