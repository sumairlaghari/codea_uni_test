import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ThemeState {
  state: 'light' | 'dark' | 'system';
  systemTheme: 'light' | 'dark';
  statusBar: 'light-content' | 'dark-content';
}

const initialState: ThemeState = {
  state: 'dark', // Default theme mode
  systemTheme: 'light', // Store current system theme
  statusBar: 'light-content',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setSystemMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.state = 'system';
      state.systemTheme = action.payload; // Store system theme in Redux
      state.statusBar =
        action.payload == 'dark' ? 'light-content' : 'dark-content';
    },
    setLightMode: state => {
      state.state = 'light';
      state.statusBar = 'dark-content';
    },
    setDarkMode: state => {
      state.state = 'dark';
      state.statusBar = 'light-content';
    },
  },
});

// Export actions
export const {setSystemMode, setLightMode, setDarkMode} = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
