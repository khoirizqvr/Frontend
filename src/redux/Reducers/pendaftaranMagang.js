import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataPendaf: [],
};

const pendaftaranSlicer = createSlice({
  name: "pedaftaran",
  initialState,
  reducers: {
    setPendaf: (state, action) => {
      state.dataPendaf = action.payload;
    },
  },
});

export const { setPendaf } = pendaftaranSlicer.actions;
export default pendaftaranSlicer.reducer;
