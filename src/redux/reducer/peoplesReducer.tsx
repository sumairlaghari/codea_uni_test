import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getRequestWithoutAuth} from '../../config/helperFunction';
import {PeopleUrl} from '../../config/urls';
import {translateKeys} from '../translations';
import {message} from '../message';

interface PeoplesState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  nextUrl: string | null;
}

const initialState: PeoplesState = {
  data: [],
  status: 'idle',
  error: null,
  nextUrl: null,
};

export const getPeoples = createAsyncThunk<any, string | undefined>(
  'Peoples/getPeoples',
  async (nextUrl = PeopleUrl, {rejectWithValue}) => {
    try {
      const response = await getRequestWithoutAuth(nextUrl);
      if (response) {
        return translateKeys(response);
      }
    } catch (error: any) {
      console.log('Error fetching peoples:', error);

      return rejectWithValue(
        error?.response?.data || error?.message || message.errors.fetchFail,
      );
    }
  },
);

const peoplesData = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    clearPeopleData: state => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
      state.nextUrl = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPeoples.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getPeoples.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        //state.data = action.payload;
        state.data = [...state.data, ...action.payload.results];
        state.nextUrl = action.payload.next;
      })
      .addCase(getPeoples.rejected, (state, action) => {
        state.status = 'failed';
        state.error = (action.payload as string) || message.errors.apiFail;
      });
  },
});

export const {clearPeopleData} = peoplesData.actions;
export default peoplesData.reducer;
