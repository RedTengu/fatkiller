import { createSlice } from '@reduxjs/toolkit';

import { data } from '../utils/data';

const initialState = {
  user: data,
  totalKcal: 0,
  workoutToday: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userTotalKcal: (state, action) => {state.totalKcal = action.payload}
  }
});

const {actions, reducer} = userSlice;

export const {
  userTotalKcal
} = actions;

export default reducer;