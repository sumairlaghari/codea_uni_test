import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getRequestWithoutAuth} from '../../config/helperFunction';
import {FilmsUrl} from '../../config/urls';
import {translateKeys} from '../translations';
import {message} from '../message';

interface FilmsState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  nextUrl: string | null;
}

const initialState: FilmsState = {
  data: [],
  status: 'idle',
  error: null,
  nextUrl: null,
};

export const getFilms = createAsyncThunk<any, string | undefined>(
  'films/getFilms',
  async (nextUrl = FilmsUrl, {rejectWithValue}) => {
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

const filmsData = createSlice({
  name: 'films',
  initialState,
  reducers: {
    clearFilmData: state => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
      state.nextUrl = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFilms.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getFilms.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        //state.data = action.payload;
        state.data = [...state.data, ...action.payload.results];
        state.nextUrl = action.payload.next;
      })
      .addCase(getFilms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = (action.payload as string) || message.errors.apiFail;
      });
  },
});

export const {clearFilmData} = filmsData.actions;
export default filmsData.reducer;
