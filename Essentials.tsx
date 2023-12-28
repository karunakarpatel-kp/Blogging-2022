import { nextjsInstallImage, welcomePatelsImage, ibomma, movierulz } from "@Components/Images/Image";

interface blogPostURLSProps {
  NEXTJS_INSTALLATION_RELATIVE: string;
  NEXTJS_INSTALLATION_ABSOLUTE: string;

  TOP10WEBSITES_REACTJS_ABSOLUTE: string;
  TOP10WEBSITES_REACTJS_RELATIVE: string;

  TAILWINDCSS_NEXTJS_ABSOLUTE: string;
  TAILWINDCSS_NEXTJS_RELATIVE: string;

  CODING_VS_PROGRAMMING_ABSOLUTE: string;
  CODING_VS_PROGRAMMING_RELATIVE: string;

  JSARRAY_METHODS_ABSOLUTE: string;
  JSARRAY_METHODS_RELATIVE: string;

  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  BLOG_PAGE_RELATIVE: string;
  BLOG_PAGE_ABSOLUTE: string;

  ABOUT_PAGE_ABSOLUTE: string;
  ABOUT_PAGE_RELATIVE: string;

  MOVIERULZ_ABSOLUTE: string;
  MOVIERUlZ_RELATIVE: string;

  IBOMMA_ABSOLUTE: string;
  IBOMMA_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
  };
}

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

export const BASE_URL: { HOME_PAGE_BASE_URL: string; BLOG_PAGE_BASE_URL: string; ABOUT_PAGE_BASE_URL: string } = {
  HOME_PAGE_BASE_URL: "https://www.karunakarpatel.com",
  BLOG_PAGE_BASE_URL: "https://www.karunakarpatel.com/Blog",
  ABOUT_PAGE_BASE_URL: "https://www.karunakarpatel.com/about",
};

export const blogPostURLS: blogPostURLSProps = {
  PRIVACY_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  HOME_PAGE_ABSOLUTE: BASE_URL.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  BLOG_PAGE_ABSOLUTE: BASE_URL.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",

  ABOUT_PAGE_ABSOLUTE: BASE_URL.ABOUT_PAGE_BASE_URL,
  ABOUT_PAGE_RELATIVE: "/about",

  NEXTJS_INSTALLATION_RELATIVE: "/Blog/nextjs_installation",
  NEXTJS_INSTALLATION_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/nextjs_installation`,

  MOVIERULZ_ABSOLUTE: `${BASE_URL.ABOUT_PAGE_BASE_URL}/movierulz`,
  MOVIERUlZ_RELATIVE: "/about/movierulz",

  IBOMMA_ABSOLUTE: `${BASE_URL.ABOUT_PAGE_BASE_URL}/ibomma`,
  IBOMMA_RELATIVE: "/about/ibomma",

  TOP10WEBSITES_REACTJS_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/top-10-websites-with-reactjs`,
  TOP10WEBSITES_REACTJS_RELATIVE: "/Blog/top-10-websites-with-reactjs",

  TAILWINDCSS_NEXTJS_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/tailwindcss-nextjs`,
  TAILWINDCSS_NEXTJS_RELATIVE: "/Blog/tailwindcss-nextjs",

  CODING_VS_PROGRAMMING_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/coding-vs-programming`,
  CODING_VS_PROGRAMMING_RELATIVE: "/Blog/coding-vs-programming",

  JSARRAY_METHODS_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/js-array-methods`,
  JSARRAY_METHODS_RELATIVE: "/Blog/js-array-methods",
};
export const SEO_OBJ: SEO_OBJ_Props = {
  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | KarunakarPatel Blog",
    description:
      "Welcome to KarunakarPatel privacy policy. In here you can find all the details about privacy policy of Karunakar Patel",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel contact page. In here you can find all the details of about KarunakarPatel contact information and a way to contact administrator of the KarunakarPatel site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel disclaimer page. In here you can find all the details of about KarunakarPatel's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
  },
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore the world of programming with Karunakar Patel, where we delve into the exciting landscape of programming knowledge. Here, you'll find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming. let's learn together step by step.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patel's Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
  },

  ABOUT_PAGE: {
    absoluteURL: blogPostURLS.ABOUT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.ABOUT_PAGE_RELATIVE,
    title:
      "About | Latest News on Trending Topics, Politician, Bollywood Celebrity, Sports Player, Latest Movies | KarunakarPatel Blog",
    description: "About | Find detailed coverage on About at KarunakarPatel Blog.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
  },

  MOVIERULZ_PAGE: {
    absoluteURL: blogPostURLS.MOVIERULZ_ABSOLUTE,
    relativeURL: blogPostURLS.MOVIERUlZ_RELATIVE,
    title: "Movierulz this is where you can watch pirated movies online",
    description:
      "About | Find detailed coverage on About at this is one of th ebest sdflkjsd flsdjflsdkfj sflkdjf dlkfd flkdjf dlfkdj KarunakarPatel Blog.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: movierulz,
    featuredImageAltText: "movierulz",
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
  },

  IBOMMA_PAGE: {
    absoluteURL: blogPostURLS.IBOMMA_ABSOLUTE,
    relativeURL: blogPostURLS.IBOMMA_RELATIVE,
    title: "Ibomma this is where you can watch pirated movies online",
    description:
      "About Ibomma | Find detailed coverage on About at this is one of th ebest sdflkjsd flsdjflsdkfj sflkdjf dlkfd flkdjf dlfkdj KarunakarPatel Blog.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: ibomma,
    featuredImageAltText: "movierulz",
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
  },

  // nextjs_installation
  NEXTJS_INSTALLATION: {
    absoluteURL: blogPostURLS.NEXTJS_INSTALLATION_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_INSTALLATION_RELATIVE,
    title: "Next.js Installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },

  TOP10WEBSITES_REACTJS: {
    absoluteURL: blogPostURLS.TOP10WEBSITES_REACTJS_ABSOLUTE,
    relativeURL: blogPostURLS.TOP10WEBSITES_REACTJS_RELATIVE,
    title: "Top 10 Next.js Installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-12-27T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },

  TAILWINDCSS_NEXTJS: {
    absoluteURL: blogPostURLS.TAILWINDCSS_NEXTJS_ABSOLUTE,
    relativeURL: blogPostURLS.TAILWINDCSS_NEXTJS_RELATIVE,
    title: "TailwindCSS 10 Next.js Installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-12-27T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },

  CODING_VS_PROGRAMMING: {
    absoluteURL: blogPostURLS.CODING_VS_PROGRAMMING_ABSOLUTE,
    relativeURL: blogPostURLS.CODING_VS_PROGRAMMING_RELATIVE,
    title: "Coding vs Programming installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-12-27T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },

  JSARRAY_METHODS: {
    absoluteURL: blogPostURLS.CODING_VS_PROGRAMMING_ABSOLUTE,
    relativeURL: blogPostURLS.CODING_VS_PROGRAMMING_RELATIVE,
    title: "JS ARRAY METHODS Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-12-27T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_INSTALLATION.title}`,
    description: `${SEO_OBJ.NEXTJS_INSTALLATION.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_INSTALLATION.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_INSTALLATION.tags!,
    featuredImage: SEO_OBJ.NEXTJS_INSTALLATION.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_INSTALLATION.featuredImageAltText}`,
  },
  {
    id: 1,
    url: `${blogPostURLS.MOVIERUlZ_RELATIVE}`,
    title: `${SEO_OBJ.MOVIERULZ_PAGE.title}`,
    description: `${SEO_OBJ.MOVIERULZ_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.MOVIERULZ_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.MOVIERULZ_PAGE.publishedTime}`,
    tags: SEO_OBJ.MOVIERULZ_PAGE.tags!,
    featuredImage: SEO_OBJ.MOVIERULZ_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.MOVIERULZ_PAGE.featuredImageAltText}`,
  },
  {
    id: 2,
    url: `${blogPostURLS.IBOMMA_RELATIVE}`,
    title: `${SEO_OBJ.IBOMMA_PAGE.title}`,
    description: `${SEO_OBJ.IBOMMA_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.IBOMMA_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.IBOMMA_PAGE.publishedTime}`,
    tags: SEO_OBJ.IBOMMA_PAGE.tags!,
    featuredImage: SEO_OBJ.IBOMMA_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.IBOMMA_PAGE.featuredImageAltText}`,
  },
  {
    id: 3,
    url: `${blogPostURLS.TOP10WEBSITES_REACTJS_RELATIVE}`,
    title: `${SEO_OBJ.TOP10WEBSITES_REACTJS.title}`,
    description: `${SEO_OBJ.TOP10WEBSITES_REACTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.TOP10WEBSITES_REACTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.TOP10WEBSITES_REACTJS.publishedTime}`,
    tags: SEO_OBJ.TOP10WEBSITES_REACTJS.tags!,
    featuredImage: SEO_OBJ.TOP10WEBSITES_REACTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.TOP10WEBSITES_REACTJS.featuredImageAltText}`,
  },
  {
    id: 4,
    url: `${blogPostURLS.TAILWINDCSS_NEXTJS_RELATIVE}`,
    title: `${SEO_OBJ.TAILWINDCSS_NEXTJS.title}`,
    description: `${SEO_OBJ.TAILWINDCSS_NEXTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.TAILWINDCSS_NEXTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.TAILWINDCSS_NEXTJS.publishedTime}`,
    tags: SEO_OBJ.TAILWINDCSS_NEXTJS.tags!,
    featuredImage: SEO_OBJ.TAILWINDCSS_NEXTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.TAILWINDCSS_NEXTJS.featuredImageAltText}`,
  },
  {
    id: 5,
    url: `${blogPostURLS.CODING_VS_PROGRAMMING_RELATIVE}`,
    title: `${SEO_OBJ.CODING_VS_PROGRAMMING.title}`,
    description: `${SEO_OBJ.CODING_VS_PROGRAMMING.description}`,
    lastUpdateTime: `${SEO_OBJ.CODING_VS_PROGRAMMING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.CODING_VS_PROGRAMMING.publishedTime}`,
    tags: SEO_OBJ.CODING_VS_PROGRAMMING.tags!,
    featuredImage: SEO_OBJ.CODING_VS_PROGRAMMING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.CODING_VS_PROGRAMMING.featuredImageAltText}`,
  },
  {
    id: 6,
    url: `${blogPostURLS.JSARRAY_METHODS_RELATIVE}`,
    title: `${SEO_OBJ.JSARRAY_METHODS.title}`,
    description: `${SEO_OBJ.JSARRAY_METHODS.description}`,
    lastUpdateTime: `${SEO_OBJ.JSARRAY_METHODS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.JSARRAY_METHODS.publishedTime}`,
    tags: SEO_OBJ.JSARRAY_METHODS.tags!,
    featuredImage: SEO_OBJ.JSARRAY_METHODS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.JSARRAY_METHODS.featuredImageAltText}`,
  },
];
