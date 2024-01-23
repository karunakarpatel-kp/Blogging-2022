interface TextToImageServiceListProps {
  name: string;
  url: string;
}

export const TextToImageServiceList: TextToImageServiceListProps[] = [
  {
    name: "Stable Diffusion 2-1",
    url: process.env.STABLE_DIFFUSION_2_1_URL!,
  },
  {
    name: "An Another Name Server",
    url: process.env.STABLE_DIFFUSION_2_1!,
  },
];
