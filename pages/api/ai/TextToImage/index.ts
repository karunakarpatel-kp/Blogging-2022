import { NextApiRequest, NextApiResponse } from "next";

const TextToImageServiceHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.send({ message: "This is a simple Text To Image API Service" });
};

export default TextToImageServiceHandler;
