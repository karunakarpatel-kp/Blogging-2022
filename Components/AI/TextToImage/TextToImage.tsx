import { LoadingButton } from "@mui/lab";
import { Box, Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { sendUserEnteredPrompt } from "store/AIUtilitySlice";
import { callTextToSpeechService } from "store/ai/TextToSpeechSlice/TextToSpeechSlice";
import { AppDispatch } from "store/centralStore";

const TextToImage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInputRef = useRef<any>();
  const [promptFieldError, setPromptFieldError] = useState<boolean>(false);

  const onBtnClickHandler = () => {
    const userPromptMsg = userInputRef.current.value;
    if (userPromptMsg.trim() === "") {
      setPromptFieldError(true);
    } else if (userPromptMsg.length > 0) {
      setPromptFieldError(false);
      dispatch(sendUserEnteredPrompt(userPromptMsg));
      dispatch(callTextToSpeechService());
    }
  };

  const onBlurHandler = () => {
    const userPromptMsg = userInputRef.current.value;
    if (userPromptMsg.trim().length > 0) {
      setPromptFieldError(false);
    }
  };

  return (
    <>
      <Box component="form" boxShadow={{ xs: 0, sm: 0, md: 3, lg: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          label="Enter Prompt In Here"
          minRows={8}
          inputRef={userInputRef}
          error={promptFieldError}
          onBlur={onBlurHandler}
          helperText={promptFieldError && "Please Enter Some Message"}
        />

        <LoadingButton
          variant="contained"
          disableElevation
          fullWidth
          loadingIndicator={"Generating..."}
          onClick={onBtnClickHandler}
          // loading
          sx={{ mt: 1 }}
        >
          Generate AI Image
        </LoadingButton>
      </Box>
    </>
  );
};

export default TextToImage;
