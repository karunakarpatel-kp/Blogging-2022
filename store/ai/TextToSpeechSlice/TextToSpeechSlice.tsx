import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "process";

interface TextToSpeechProps {
  text2SpeechData: any;
  text2SpeechDataloading: "PENDING" | "FULLFILLED" | "REJECTED";
}

const initialState = {
  text2SpeechData: null,
  text2SpeechDataLoading: "PENDING",
};

export const callTextToSpeechService = createAsyncThunk("callTextToSpeechService", async (_, thunkAPI) => {
  // const apiEndPoint = "/api/ai/TextToSpeech/genTextToSpeech";
  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
  // };

  const dataToSend = {
    inputs: "A car on the beach with sunset as a background",
    modelURL: process.env.TEXT_TO_SPEECH_API_SERVICE,
  };

  // try {
  //   const response = await axios.post(apiEndPoint, JSON.stringify(dataToSend), { headers });
  //   console.log(response, "Response From FrontEnd...!");
  // } catch (error) {
  //   console.log(error, "Error From FrontEnd...!");
  // }
  try {
    // Make a POST request to the server's API endpoint to generate audio
    const response = await fetch("/api/ai/TextToSpeech/genTextToSpeech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch audio data.");
    }

    // Get the audio data as an ArrayBuffer
    const data = await response.arrayBuffer();

    // Convert ArrayBuffer to Blob and create a URL for the audio
    const blob = new Blob([data], { type: "audio/mpeg" });
    const audioUrl = URL.createObjectURL(blob);
    return audioUrl;
  } catch (error) {
    console.log(Error, "Error From Client");
  }
});

export const TextToSpeechSlice = createSlice({
  name: "TextToSpeech",
  initialState,
  reducers: {
    resetTextToSpeechSlice: (state, action: PayloadAction<any>) => {
      state.text2SpeechData = action.payload;
      state.text2SpeechDataLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(callTextToSpeechService.pending, (state, action: PayloadAction<any>) => {
      state.text2SpeechDataLoading = "PENDING";
      state.text2SpeechData = null;
    });
    builder.addCase(callTextToSpeechService.fulfilled, (state, action: PayloadAction<any>) => {
      state.text2SpeechDataLoading = "FULFILLED";
      state.text2SpeechData = action.payload;
    });
    builder.addCase(callTextToSpeechService.rejected, (state, action: PayloadAction<any>) => {
      state.text2SpeechDataLoading = "REJECTED";
      state.text2SpeechData = null;
    });
  },
});

export default TextToSpeechSlice.reducer;

export const { resetTextToSpeechSlice } = TextToSpeechSlice.actions;
