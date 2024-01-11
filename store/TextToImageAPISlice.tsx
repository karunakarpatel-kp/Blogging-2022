import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {}

const initialState: initialStateProps = {};

export const callTextToImageService = createAsyncThunk("callTextToImageService", async () => {});

const TextToImageAPISlice = createSlice({
  name: "TextToImageAPISlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(callTextToImageService.pending, (state, action) => {
      console.log("hi");
    });
  },
});

export default TextToImageAPISlice.reducer;
