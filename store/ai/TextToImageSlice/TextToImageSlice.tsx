import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  textToImageData: any;
  textToImageLoadingStatus: "" | "PENDING" | "FULFILLED" | "REJECTED";
}

const initialState = {
  textToImageData: null,
  textToImageLoadingStatus: "",
};

export const callTextToImageService = createAsyncThunk("callTextToImageService", async (incomingPayload, thunkAPI) => {
  console.log(incomingPayload, "INCOMING PAYLOAD TEXT2IMAGE");
});

const TextToImageSlice = createSlice({
  name: "TextToImageSlice",
  initialState,
  reducers: {
    resetTextToImageSlice: (state, action: PayloadAction<any>) => {
      state.textToImageData = null;
      state.textToImageLoadingStatus = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(callTextToImageService.pending, (state, action: PayloadAction<any>) => {
      state.textToImageData = null;
      state.textToImageLoadingStatus = "PENDING";
    });
    builder.addCase(callTextToImageService.fulfilled, (state, action: PayloadAction<any>) => {
      state.textToImageData = action.payload;
      state.textToImageLoadingStatus = "FULFILLED";
    });
    builder.addCase(callTextToImageService.rejected, (state, action) => {
      state.textToImageData = null;
      state.textToImageLoadingStatus = "REJECTED";
    });
  },
});

export default TextToImageSlice.reducer;

export const { resetTextToImageSlice } = TextToImageSlice.actions;
