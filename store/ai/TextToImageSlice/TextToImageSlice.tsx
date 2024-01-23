import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateProps {
  textToImageData: any;
  textToImageLoadingStatus: "" | "PENDING" | "FULFILLED" | "REJECTED";
}

const initialState = {
  textToImageData: null,
  textToImageLoadingStatus: "",
};

export const callTextToImageService = createAsyncThunk("callTextToImageService", async (incomingPayload, thunkAPI) => {
  const data = JSON.stringify({});
  try {
    const text2ImageResp = await axios.post("/api/ai/TextToImage", data, {});
    const text2imageData = await text2ImageResp.data;
    const imgConstruct = `data:image/jpeg;base64,${text2imageData}`;
    return imgConstruct;
  } catch (error) {
    console.log(error, "ERROR WITH CLIENT");
  }
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
