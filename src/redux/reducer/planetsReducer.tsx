import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getRequestWithoutAuth} from '../../config/helperFunction';
import {PlanetsUrl} from '../../config/urls';
import {translateKeys} from '../translations';
import {message} from '../message';

interface PlanetsState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  nextUrl: string | null;
}

const initialState: PlanetsState = {
  data: [],
  status: 'idle',
  error: null,
  nextUrl: null,
};

export const getPlanets = createAsyncThunk<any, string | undefined>(
  'planets/getPlanets',
  async (nextUrl = PlanetsUrl, {rejectWithValue}) => {
    try {
      const response = await getRequestWithoutAuth(nextUrl);
      if (response) {
        //return response;
        return translateKeys(response);
      }
    } catch (error: any) {
      console.log('Error fetching films:', error);

      return rejectWithValue(
        error?.response?.data || error?.message || message.errors.fetchFail,
      );
    }
  },
);

const planetsData = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    clearPlanetData: state => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
      state.nextUrl = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPlanets.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getPlanets.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        //state.data = action.payload;
        state.data = [...state.data, ...action.payload.results];
        state.nextUrl = action.payload.next;
      })
      .addCase(getPlanets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = (action.payload as string) || message.errors.apiFail;
      });
  },
});

export const {clearPlanetData} = planetsData.actions;
export default planetsData.reducer;
