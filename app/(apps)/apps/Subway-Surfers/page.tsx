import SlickContr from "Components/SlickContainer/SlickContr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Subway Surfers",
  description: "Description goes here",
  keywords: ["Arcade", " Subway Surfers", "SYBO Games", "karunakar patel"],
  category: "apps",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Subway Surfers",
    description: "description goes here...!",
    url: "F:Blogging WebsiteBlogging-2022app(apps)appsSubway-Surfers",
    siteName: "Play out the game of Subway Surfers",
    images: [
      {
        url: "https://play-lh.googleusercontent.com/l7MJuCVRC3jWgKlE5tXXYHGxbnQY1LDnI3SLQLgAaKpBsXjqmh03MfTauOeoLdDaHw", // Replace with your image
        width: 1200,
        height: 630,
        alt: "My Next.js App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subway Surfers",
    description: "Description goes here...!",
    images: [
      "https://play-lh.googleusercontent.com/l7MJuCVRC3jWgKlE5tXXYHGxbnQY1LDnI3SLQLgAaKpBsXjqmh03MfTauOeoLdDaHw",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const page = () => {
  return (
    <>
      <header className="-mt-3 ">
        <div className="h-72  bg-slate-100 relative">
          <Image
            className="w-full h-72 mt-20"
            alt="background-image"
            // fill
            width={220}
            height={120}
            src={
              "https://play-lh.googleusercontent.com/l7MJuCVRC3jWgKlE5tXXYHGxbnQY1LDnI3SLQLgAaKpBsXjqmh03MfTauOeoLdDaHw"
            }
          />
        </div>
        <div className="mx-auto px-4   bg-slate-100 w-full md:w-11/12 lg:w-11/12 mt-2 rounded-sm ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-1 lg:col-span-1  ">
              <Image
                src={
                  "https://play-lh.googleusercontent.com/x0gzuXNOIe_RISFYF9YeBI1h6Xxb7ZKFgyz0bl_nNd59turcpwrg4WOl2r_FNCzAwA"
                }
                width={96}
                height={125}
                alt="alt"
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>
            <div className="col-span-4 md:col-span-7 lg:col-span-7 pl-5">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold p-0 mt-4">Subway Surfers</h1>
              <p className="text-slate-600 text-base md:text-lg lg:text-lg py-0 m-0">SYBO Games</p>
              <div className="gap-2 mt-2 hidden md:flex lg:flex">
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  ⭐ 4.555235
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  1,000,000,000+ installs
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  Arcade
                </span>
              </div>
            </div>
            <div className="ml-auto pb-2 col-span-5 md:col-span-3 lg:col-span-3 my-auto">
              <Link
                href={"https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en&gl=us"}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brandColor text-white shadow hover:opacity-90 transition underline-offset-4 text-xs md:text-lg lg:text-xl"
              >
                View on Play Store
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6m0 0v6m0-6L10 16" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="mx-auto  grid grid-cols-12 gap-4 w-11/12 mt-2 ">
        {/* Left Column */}
        <section className="col-span-12 md:col-span-8 lg:col-span-8 space-y-8">
          {/* About */}
          <div className="px-6 py-6 pt-2  bg-slate-50  shadow-sm">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  "DASH as fast as you can! <br>DODGE the oncoming trains! <br><br>Help Jake, Tricky &amp; Fresh escape from the grumpy Guard and his dog. <br><br>★ Grind trains with your cool crew! <br>★ Colorful and vivid HD graphics! <br>★ Hoverboard Surfing! <br>★ Paint powered jetpack! <br>★ Lightning fast swipe acrobatics! <br>★ Challenge and help your friends! <br><br>Join the most daring chase! <br><br>A Universal App with HD optimized graphics.<br><br>Originally co-developed by SYBO and Kiloo.",
              }}
            />
          </div>
          {/* Screenshots */}
          <div className="space-y-4 m-0 p-0 ">
            <SlickContr
              autoPlay={true}
              headingTitle="Screenshots"
              infinite={true}
              rows={1}
              slidesToShow={3}
              slickObj={[
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
              ]}
            />
          </div>

          {/* Trailer */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Subway Surfers Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src={"https://www.youtube.com/embed/ZNbM8ZftzrA?ps=play&vq=large&rel=0&autohide=1&showinfo=0"}
                title="Trailer"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Right Column */}
        <aside className="col-span-12 md:col-span-4 lg:col-span-4 space-y-6">
          {/* Meta */}
          <div className=" py-2 px-6 bg-slate-50  shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-center underline underline-offset-4 ">About the Game</h3>
            <dl className="grid grid-cols-2 gap-y-2 text-base">
              <dt className="text-slate-700">Ratings</dt>
              <dd className="font-medium">42102733</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">1,000,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Arcade</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Released</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">29.4.41 Version</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Teen Content Rating</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">$0.99 - $99.99 per item</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6  bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span> <span className="font-medium">Sybo ApS</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline" href={"https://sybogames.com/"} target="_blank">
                  https://sybogames.com/
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline" href="help_subwaysurf@sybogames.com">
                  help_subwaysurf@sybogames.com
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  );
};

export default page;
