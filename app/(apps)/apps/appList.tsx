export const getAppList = async () => {
  const data = await fetch("http://localhost:3000/apps");
  const posts = await data.json();
  console.log(data, "posts from apps");
};

export const appList = [
  {
    id: 0,
    url: `https://www.karunakarpatel.com/apps/Arknight`,
    title: `Arknight TItle`,
    description: `Description Goes Here`,
    lastUpdateTime: `September 01`,
    publishedTime: `September 01`,
    tags: ["games", "arknight", "app"],
    featuredImage: "image URL",
    featuredImageAltText: `alt Text Goes Here`,
    ogImageURL: `Header or Og Image Goes Here...!`,
  },
];
