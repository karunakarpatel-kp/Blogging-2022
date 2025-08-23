"use client";

import GooglePlayDynamicPageComponent from "app/(apps)/_pagesComponents/GooglePlayDynamicPageComponent";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const AppDetails = () => {
  const url = `https://backend-slots.vercel.app/api/app-details`;
  const inputTxtAppIdRef = useRef<any>();
  const [inputAppId, setInputAppId] = useState<string>("");
  const [appData, setAppData] = useState<any>(null);

  const fetchAppDetails = async (appId: any) => {
    const dataFromAppStore = await axios.get(url, { params: { appId: appId } });
    const resP = await dataFromAppStore.data;
    setAppData(resP);
  };
  const onSubmitClickHandler = () => {
    // https://play.google.com/store/apps/details?id=ai.perplexity.app.android&hl=en_US
    const incomingAppId = inputTxtAppIdRef.current.value;
    if (incomingAppId === "") {
      alert("Enter Valid URL");
    }
    if (incomingAppId !== "") {
      const params = new URLSearchParams(incomingAppId.split("?")[1]);
      const appId = params.get("id")!;
      setInputAppId(appId);
      fetchAppDetails(appId);
    }
  };

  return (
    <>
      <section className="w-5/6 m-auto">
        <div className="w-full mt-5 grid grid-cols-10 gap-3">
          <div className="col-span-7 ">
            <label className="text-lg md:text-xl lg:text-xl pb-3 font-medium text-brandColor">Enter App Id</label>
            <input
              ref={inputTxtAppIdRef}
              name="appId"
              type="text"
              placeholder="Enter App Id"
              className=" w-full p-3 bg-slate-100 text-base md:text-lg lg:text-lg mt-2"
            />
          </div>

          <div className="col-span-3 start-3 relative">
            <button
              onClick={onSubmitClickHandler}
              type="submit"
              className=" bg-brandColor text-white px-5 py-3 text-base md:text-lg lg:text-lg rounded-sm hover:bg-slate-200 hover:text-brandColor w-full absolute bottom-0"
            >
              Submit
            </button>
          </div>
        </div>
        {appData && <GooglePlayDynamicPageComponent appData={appData} />}
      </section>
    </>
  );
};

export default AppDetails;

const appin = {
  title: "Subway Surfers",
  developer: "SYBO Games",
  score: "4.6",
  installs: "1,000,000,000+",
  genre: "Arcade",
  url: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en&gl=us",
  description:
    "DASH as fast as you can! \nDODGE the oncoming trains! \n\nHelp Jake, Tricky & Fresh escape from the grumpy Guard and his dog. \n\n★ Grind trains with your cool crew! \n★ Colorful and vivid HD graphics! \n★ Hoverboard Surfing! \n★ Paint powered jetpack! \n★ Lightning fast swipe acrobatics! \n★ Challenge and help your friends! \n\nJoin the most daring chase! \n\nA Universal App with HD optimized graphics.\n\nOriginally co-developed by SYBO and Kiloo.",
  screenShots: [
    "https://play-lh.googleusercontent.com/MYxB6AedO95sOoYM5B3q7_DDbYAzonV_15V8tuabDEyhM9NQTmoL0y-oDA7NCnp6oMU",
    "https://play-lh.googleusercontent.com/sQPwy6UqraoYT-gL3Gvx6R0HXfEGOvKWs8buCzRLJYIyHlp9skdVwnnOcG3dwo33ChF6",
    "https://play-lh.googleusercontent.com/czsFaiqHY2RmQEHhE4lJdy1gSPmpE95vq73yEpbnfr1kJdtusSIZ31KV6vNh4Jkq2g",
    "https://play-lh.googleusercontent.com/Vp0dhrObNtrkTpa05g23vwHzeKTI9PidTfll82Pg6_7lZR5qB_UUa3JMec-OeBp9Tr8",
    "https://play-lh.googleusercontent.com/sWoMRoXKgpdj9PglzDLUZlMbjNY93Mu02mypnqFsY7V890sfdRdYjHra9-q4i7ud5F-B",
    "https://play-lh.googleusercontent.com/IEsZRYQxZFq29caGyab9jqIr8uF4Y6FCCvBSp4oOwgHKYiwmxFTgtytXxjgoZfvMJpue",
    "https://play-lh.googleusercontent.com/ro0gleV4aBvbNcD0JtmrOnjsIH41psDPeER1Jmllk6g952A5Yfmfz2ponZJMDG0lrA",
    "https://play-lh.googleusercontent.com/Jo14Gss0Q2epJYwExQEwJMPiZ3N676ORoyzzw-iECxWUcpE-GucJEZOF3VP3hYNVTQ",
    "https://play-lh.googleusercontent.com/eF6Q_Oc9elTPIZcBALt7qUTK6HD2MaR-BDekDgD_LrDYqZ633kzcFBkHev1r1EUaQZg",
    "https://play-lh.googleusercontent.com/P_-XEyqqiZgL83PBq-_osYaBXpLLH4nXJqdUc1Ysp_w4zBGx7asGgydJ2wwvqES_6A0L",
    "https://play-lh.googleusercontent.com/IWpAebRdIL-2IZb4Tz6wFZZpbk8NBLmQDQgPOLVKhMPsRRRdbi8B3k705T9PYHLlKinq",
    "https://play-lh.googleusercontent.com/lX7aNqtAU_cy1ZNOpwsPK7LoQrtg0ppOcAr3EoiQT1LcqQ1I2Z4oaP_SYvt9eur5pA",
    "https://play-lh.googleusercontent.com/ST0jVnjfSFFUCXZUt_EAuEM5ayKL2AmV3WasZIrGdfBXQM6sA7XDsr4ssMzGgTJJGWFt",
    "https://play-lh.googleusercontent.com/PpMD7YWYbtHyzJgiszYqk286irt_do2c7UIdN70Tn1VM7KHMNnu-lbinY2eOTwI2T5J-",
    "https://play-lh.googleusercontent.com/wiOsQ5Js6Hp_kRCEiCrWg7ddViK9pR2MdYBdHGM2OyNRvO7r0FAgCUBTR04RgHJh3Q",
    "https://play-lh.googleusercontent.com/akGs5CXVn5HXLlsnhlam52oI51EgqHyxMXDHGg0Zy5nMvT5U4f7XjjhIBiL8Q55DGw",
    "https://play-lh.googleusercontent.com/LK5s47GRnFcH44OWfBmdU-wSh79UB4vEDNTiB3OnAtKKeu66BKEskI7-hIMtsmJvJ1o",
    "https://play-lh.googleusercontent.com/PsIB2qyR0RQTeEwxRVwDW56MSbdw16x9IV0R6k5rLuUwcHNsrjmiyZIdbUCg4kcuxQ",
    "https://play-lh.googleusercontent.com/MJJiQ1putguiL6iB8nYxCBzc-XqIUJHH1B_cns5l5uMNoOJuWDVgSA6hADE1nmx-f2ly",
    "https://play-lh.googleusercontent.com/hgAk1qrjMN2LRek4miCuYHMmBein28sPjNrtMVSZut32rP82Ns0DWBiQCf56PTVKPg",
    "https://play-lh.googleusercontent.com/bkRyLNLU5fcbfMfrNL8OA207HCuzWjVeteCDjkQxszqXvvzHRDRC_YKGApg3ZLhVsM8",
    "https://play-lh.googleusercontent.com/aQ6dFHnH8g3XCL8mAwi8EqJj-hI_T7uA_l2AUw5V3WiCpQaPDBUyycHI30XLkk_-ic4",
    "https://play-lh.googleusercontent.com/Ffkpq-KWyBnKQwyuQOoSQD-jNmUr-aHavlfOJWy3JL1wmIaHq1rZSvmTpVWjY0JVqRYr",
    "https://play-lh.googleusercontent.com/uAmEQeb1pGvtDYX02t91W82ChNctodQyhqxWPMyBPkyGzte_4eV1CdRs-wEZI6KNHGM0",
  ],
  totalAppDetails: {
    title: "Subway Surfers",
    description:
      "DASH as fast as you can! \nDODGE the oncoming trains! \n\nHelp Jake, Tricky & Fresh escape from the grumpy Guard and his dog. \n\n★ Grind trains with your cool crew! \n★ Colorful and vivid HD graphics! \n★ Hoverboard Surfing! \n★ Paint powered jetpack! \n★ Lightning fast swipe acrobatics! \n★ Challenge and help your friends! \n\nJoin the most daring chase! \n\nA Universal App with HD optimized graphics.\n\nOriginally co-developed by SYBO and Kiloo.",
    descriptionHTML:
      "DASH as fast as you can! <br>DODGE the oncoming trains! <br><br>Help Jake, Tricky &amp; Fresh escape from the grumpy Guard and his dog. <br><br>★ Grind trains with your cool crew! <br>★ Colorful and vivid HD graphics! <br>★ Hoverboard Surfing! <br>★ Paint powered jetpack! <br>★ Lightning fast swipe acrobatics! <br>★ Challenge and help your friends! <br><br>Join the most daring chase! <br><br>A Universal App with HD optimized graphics.<br><br>Originally co-developed by SYBO and Kiloo.",
    summary: "Help Jake, Tricky &amp; Fresh escape from the grumpy Inspector and his dog!",
    installs: "1,000,000,000+",
    minInstalls: 1000000000,
    maxInstalls: 2661928116,
    score: 4.555576,
    scoreText: "4.6",
    ratings: 42111235,
    reviews: 1792863,
    histogram: {
      "1": 2300074,
      "2": 696087,
      "3": 1485490,
      "4": 4455677,
      "5": 33173889,
    },
    price: 0,
    free: true,
    currency: "USD",
    priceText: "Free",
    available: true,
    offersIAP: true,
    IAPRange: "$0.99 - $99.99 per item",
    androidVersion: "6.0",
    androidVersionText: "6.0",
    androidMaxVersion: "VARY",
    developer: "SYBO Games",
    developerId: "7363891306616760846",
    developerEmail: "help_subwaysurf@sybogames.com",
    developerWebsite: "https://sybogames.com/",
    developerLegalName: "Sybo ApS",
    developerLegalEmail: "help_subwaysurf@sybogames.com",
    developerLegalAddress: "Holmens Kanal 7, sal 3, 1060 København K, Denmark",
    developerLegalPhoneNumber: "+45 50 20 74 75",
    privacyPolicy: "https://sybogames.com/privacy-policy/",
    developerInternalID: "7363891306616760846",
    genre: "Arcade",
    genreId: "GAME_ARCADE",
    categories: [
      {
        name: "Action",
        id: "GAME_ACTION",
      },
      {
        name: "Platformer",
        id: null,
      },
      {
        name: "Runner",
        id: null,
      },
      {
        name: "Arcade",
        id: "GAME_ARCADE",
      },
      {
        name: "Single player",
        id: null,
      },
      {
        name: "Stylized",
        id: null,
      },
      {
        name: "Experiences",
        id: null,
      },
      {
        name: "Funny",
        id: null,
      },
      {
        name: "Offline",
        id: null,
      },
    ],
    icon: "https://play-lh.googleusercontent.com/x0gzuXNOIe_RISFYF9YeBI1h6Xxb7ZKFgyz0bl_nNd59turcpwrg4WOl2r_FNCzAwA",
    headerImage:
      "https://play-lh.googleusercontent.com/l7MJuCVRC3jWgKlE5tXXYHGxbnQY1LDnI3SLQLgAaKpBsXjqmh03MfTauOeoLdDaHw",
    screenshots: [
      "https://play-lh.googleusercontent.com/MYxB6AedO95sOoYM5B3q7_DDbYAzonV_15V8tuabDEyhM9NQTmoL0y-oDA7NCnp6oMU",
      "https://play-lh.googleusercontent.com/sQPwy6UqraoYT-gL3Gvx6R0HXfEGOvKWs8buCzRLJYIyHlp9skdVwnnOcG3dwo33ChF6",
      "https://play-lh.googleusercontent.com/czsFaiqHY2RmQEHhE4lJdy1gSPmpE95vq73yEpbnfr1kJdtusSIZ31KV6vNh4Jkq2g",
      "https://play-lh.googleusercontent.com/Vp0dhrObNtrkTpa05g23vwHzeKTI9PidTfll82Pg6_7lZR5qB_UUa3JMec-OeBp9Tr8",
      "https://play-lh.googleusercontent.com/sWoMRoXKgpdj9PglzDLUZlMbjNY93Mu02mypnqFsY7V890sfdRdYjHra9-q4i7ud5F-B",
      "https://play-lh.googleusercontent.com/IEsZRYQxZFq29caGyab9jqIr8uF4Y6FCCvBSp4oOwgHKYiwmxFTgtytXxjgoZfvMJpue",
      "https://play-lh.googleusercontent.com/ro0gleV4aBvbNcD0JtmrOnjsIH41psDPeER1Jmllk6g952A5Yfmfz2ponZJMDG0lrA",
      "https://play-lh.googleusercontent.com/Jo14Gss0Q2epJYwExQEwJMPiZ3N676ORoyzzw-iECxWUcpE-GucJEZOF3VP3hYNVTQ",
      "https://play-lh.googleusercontent.com/eF6Q_Oc9elTPIZcBALt7qUTK6HD2MaR-BDekDgD_LrDYqZ633kzcFBkHev1r1EUaQZg",
      "https://play-lh.googleusercontent.com/P_-XEyqqiZgL83PBq-_osYaBXpLLH4nXJqdUc1Ysp_w4zBGx7asGgydJ2wwvqES_6A0L",
      "https://play-lh.googleusercontent.com/IWpAebRdIL-2IZb4Tz6wFZZpbk8NBLmQDQgPOLVKhMPsRRRdbi8B3k705T9PYHLlKinq",
      "https://play-lh.googleusercontent.com/lX7aNqtAU_cy1ZNOpwsPK7LoQrtg0ppOcAr3EoiQT1LcqQ1I2Z4oaP_SYvt9eur5pA",
      "https://play-lh.googleusercontent.com/ST0jVnjfSFFUCXZUt_EAuEM5ayKL2AmV3WasZIrGdfBXQM6sA7XDsr4ssMzGgTJJGWFt",
      "https://play-lh.googleusercontent.com/PpMD7YWYbtHyzJgiszYqk286irt_do2c7UIdN70Tn1VM7KHMNnu-lbinY2eOTwI2T5J-",
      "https://play-lh.googleusercontent.com/wiOsQ5Js6Hp_kRCEiCrWg7ddViK9pR2MdYBdHGM2OyNRvO7r0FAgCUBTR04RgHJh3Q",
      "https://play-lh.googleusercontent.com/akGs5CXVn5HXLlsnhlam52oI51EgqHyxMXDHGg0Zy5nMvT5U4f7XjjhIBiL8Q55DGw",
      "https://play-lh.googleusercontent.com/LK5s47GRnFcH44OWfBmdU-wSh79UB4vEDNTiB3OnAtKKeu66BKEskI7-hIMtsmJvJ1o",
      "https://play-lh.googleusercontent.com/PsIB2qyR0RQTeEwxRVwDW56MSbdw16x9IV0R6k5rLuUwcHNsrjmiyZIdbUCg4kcuxQ",
      "https://play-lh.googleusercontent.com/MJJiQ1putguiL6iB8nYxCBzc-XqIUJHH1B_cns5l5uMNoOJuWDVgSA6hADE1nmx-f2ly",
      "https://play-lh.googleusercontent.com/hgAk1qrjMN2LRek4miCuYHMmBein28sPjNrtMVSZut32rP82Ns0DWBiQCf56PTVKPg",
      "https://play-lh.googleusercontent.com/bkRyLNLU5fcbfMfrNL8OA207HCuzWjVeteCDjkQxszqXvvzHRDRC_YKGApg3ZLhVsM8",
      "https://play-lh.googleusercontent.com/aQ6dFHnH8g3XCL8mAwi8EqJj-hI_T7uA_l2AUw5V3WiCpQaPDBUyycHI30XLkk_-ic4",
      "https://play-lh.googleusercontent.com/Ffkpq-KWyBnKQwyuQOoSQD-jNmUr-aHavlfOJWy3JL1wmIaHq1rZSvmTpVWjY0JVqRYr",
      "https://play-lh.googleusercontent.com/uAmEQeb1pGvtDYX02t91W82ChNctodQyhqxWPMyBPkyGzte_4eV1CdRs-wEZI6KNHGM0",
    ],
    video: "https://www.youtube.com/embed/ZNbM8ZftzrA?ps=play&vq=large&rel=0&autohide=1&showinfo=0",
    videoImage:
      "https://play-lh.googleusercontent.com/l7MJuCVRC3jWgKlE5tXXYHGxbnQY1LDnI3SLQLgAaKpBsXjqmh03MfTauOeoLdDaHw",
    previewVideo: "https://play-games.googleusercontent.com/vp/mp4/1280x720/ZNbM8ZftzrA.mp4",
    contentRating: "Everyone 10+",
    contentRatingDescription: "Fantasy Violence",
    adSupported: true,
    released: "Sep 20, 2012",
    updated: 1755178803000,
    version: "3.51.0",
    recentChanges:
      "- It’s time to wrap up summer in style as the Subway Surfers head to Greece! Celebrate Greek mythology, take on epic events, and enjoy an exclusive 8 Ball Pool crossover.<br>- Unlock 8 Ball Jake and the slick 8 Ball Board by collecting Tokens across 6 cities in the exclusive crossover event.<br>- Valentina gets a divine upgrade in the Season Challenge, and a radiant new Surfer, Sunny, joins the Crew.<br>- This season is packed with sun, style, and summer send-off fun!",
    comments: [],
    preregister: false,
    earlyAccessEnabled: false,
    isAvailableInPlayPass: false,
    appId: "com.kiloo.subwaysurf",
    url: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en&gl=us",
  },
};
