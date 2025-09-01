import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

function getSeoDescription(text: string, maxLength = 160): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength);
  return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
}

export async function POST(req: NextRequest) {
  try {
    // Get the JSON data from request body
    const app = await req.json();

    // Create folder name based on app title
    const folderPath = path.join(process.cwd(), "app", "(apps)", "apps", app.title.replace(/\s+/g, "-"));

    const filePath = path.join(folderPath, "page.tsx");

    const seoDescription = getSeoDescription(app.totalAppDetails.description);

    const dynamicContent = `
import SlickContr from "Components/SlickContainer/SlickContr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "${app.totalAppDetails.title}",
   description: "${seoDescription}",
  keywords: ['${app.totalAppDetails.genre}',' ${app.totalAppDetails.title}', '${
      app.totalAppDetails.developer
    }', 'karunakar patel'],
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
    title: '${app.totalAppDetails.title}',
    description: "${seoDescription}",
    url:  "${folderPath}",
    siteName: 'Play out the game of ${app.totalAppDetails.title}',
    images: [
      {
        url: "${app.totalAppDetails.headerImage}", // Replace with your image
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
    title: "${app.totalAppDetails.title}",
    description: "${seoDescription}",
    images: ["${app.totalAppDetails.headerImage}"],
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
        <div className="h-96  bg-slate-100 relative">
          <Image
            className="w-full h-96 mt-20"
            alt="background-image"
            // fill
            width={920}
            height={820}
            src={
            "${app.totalAppDetails.headerImage}"
            }
          />
        </div>
        <div className="mx-auto px-4   bg-slate-100 w-full md:w-11/12 lg:w-11/12 mt-2 rounded-sm ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-1 lg:col-span-1  ">
              <Image
              src={"${app.totalAppDetails.icon}"}
                width={96}
                height={125}
                alt='icon'
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>
            <div className="col-span-4 md:col-span-7 lg:col-span-7 pl-5">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold p-0 mt-4">${app.totalAppDetails.title}</h1>
              <p className="text-slate-600 text-base md:text-lg lg:text-lg py-0 m-0">${
                app.totalAppDetails.developer
              }</p>
              <div className="gap-2 mt-2 hidden md:flex lg:flex">
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  ⭐ ${app.totalAppDetails.score}
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  ${app.totalAppDetails.installs} installs
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  ${app.totalAppDetails.genre} 
                </span>
              </div>
            </div>
            <div className="ml-auto pb-2 col-span-5 md:col-span-3 lg:col-span-3 my-auto">
              <Link
                href={"${app.totalAppDetails.url}"}
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
              className="prose prose-slate prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  "${app.totalAppDetails.descriptionHTML}"
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
              slickObj={${JSON.stringify(app.totalAppDetails.screenshots)}}
            />
          </div>

          {/* Trailer */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">${app.totalAppDetails.title} Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src={"${app.totalAppDetails.video}"}
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
              <dd className="font-medium">${app.totalAppDetails.ratings}</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">${app.totalAppDetails.installs}</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">${app.totalAppDetails.genre}</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Released</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">29.4.41 Version</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Teen Content Rating</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">${app.totalAppDetails.IAPRange}</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6  bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span> <span className="font-medium">${
                  app.totalAppDetails.developerLegalName
                }</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline" href={"${app.totalAppDetails.developerWebsite}"} target="_blank">
                ${app.totalAppDetails.developerWebsite}
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline" href="${app.totalAppDetails.developerLegalEmail}">
                ${app.totalAppDetails.developerLegalEmail}
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
    `;
    // Check if folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });

      // Generate the page content dynamically
      const pageContent = dynamicContent; // Replace this with your dynamic content

      // Write the file
      fs.writeFileSync(filePath, pageContent, "utf8");
    }

    return NextResponse.json({
      success: true,
      message: `Page generated at /apps/${app.title.replace(/\s+/g, "-")}`,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
