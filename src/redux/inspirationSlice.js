import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  inspirationList: [],
  currentInspiration: {},
};

export const inspirationSlice = createSlice({
  name: "inspiration",
  initialState,
  reducers: {
    setInspiration: (state, action) => {
      return {
        ...state,
        inspirationList: [...state.inspirationList, action.payload],
      };
    },
    deleteInspiration: (state, action) => {
      return {
        ...state,
        inspirationList: state.inspirationList.filter(
          (item, index) => index !== action?.payload
        ),
      };
    },
    setCurrentInspiration: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        currentInspiration: action.payload,
      };
    },
    updateInspiration: (state, { payload }) => {
      const updatedItems = [...state.inspirationList];
      updatedItems[payload.currentIndex] = { ...updatedItems[payload.currentIndex], ...payload };
      state.inspirationList = updatedItems;
      console.log(updatedItems)
    },
  },
});

export const {
  setInspiration,
  deleteInspiration,
  updateInspiration,
  setCurrentInspiration,
} = inspirationSlice.actions;

export default inspirationSlice.reducer;
