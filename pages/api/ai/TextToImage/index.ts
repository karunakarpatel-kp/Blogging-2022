import { NextApiRequest, NextApiResponse } from "next";

const TextToImageServiceHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sampleReqBody = {
    url: process.env.STABLE_DIFFUSION_2_1_URL,
  };

  const text2ImageRes = await fetch(process.env.STABLE_DIFFUSION_2_1_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
    },
    body: JSON.stringify({
      inputs: "A car met accident with large blue color truck",
    }),
  });

  if (!text2ImageRes.ok) {
    res.send({ message: "Internal Server Error" });
  }

  const text2ImageData = await text2ImageRes.arrayBuffer();
  const base64ImageData = Buffer.from(text2ImageData).toString("base64");

  res.send(base64ImageData);
};

export default TextToImageServiceHandler;
