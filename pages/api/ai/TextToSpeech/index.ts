// import { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const genText2SpeechHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const reqBody = req.body;

  if (!reqBody.inputs) {
    throw new Error("There is no inputs field in the request Body");
  }

  if (!reqBody.modelURL) {
    throw new Error("There is no Model URL in the request Body");
  }

  const userEnteredInput = reqBody.inputs;
  const userSelectedURL = reqBody.modelURL;

  const stringifiedData = JSON.stringify(userEnteredInput);
  const url = userSelectedURL;

  let config: any = {
    method: "POST",

    // maxBodyLength: Infinity,
    url: "https://api-inference.huggingface.co/models/facebook/mms-tts-eng",
    // url: "https://api-inference.huggingface.co/models/facebook/musicgen-small",
    headers: {
      "Content-Type": "audio/flac",
      Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
    },
    data: stringifiedData,

    responseType: "blob",
    // timeout: 10000,
  };

  const modelFetchRes = await fetch("https://api-inference.huggingface.co/models/facebook/mms-tts-eng", {
    // headers: { Authorization: "Bearer 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" },
    method: "POST",
    body: JSON.stringify({
      inputs: "karunakar is good boy and he is very talented",
      modelURL: "hi/hi",
    }),
  });

  if (!modelFetchRes.ok) {
    throw new Error("Internal Server Error");
  }
  const modelFetchData = await modelFetchRes.blob();
  const blobURL = URL.createObjectURL(modelFetchData);
  res.status(200);
  console.log(blobURL, "Server Log");
  res.send(blobURL);
};

export default genText2SpeechHandler;
