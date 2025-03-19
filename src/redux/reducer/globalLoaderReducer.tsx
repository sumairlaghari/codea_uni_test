import {createSlice} from '@reduxjs/toolkit';

interface loaderState {
  loaderState: boolean;
}

const initialState: loaderState = {
  loaderState: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    toggleLoader: state => {
      return {loaderState: !state.loaderState};
    },
  },
});

// Export actions
export const {toggleLoader} = loaderSlice.actions;

// Export reducer
export default loaderSlice.reducer;
