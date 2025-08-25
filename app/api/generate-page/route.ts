import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get the JSON data from request body
    const app = await req.json();

    // Create folder name based on app title
    const folderPath = path.join(process.cwd(), "app", "(apps)", "apps", app.title.replace(/\s+/g, "-"));

    const filePath = path.join(folderPath, "page.tsx");

    const dynamicContent = `
import SlickContr from "@/Components/SlickContainer/SlickContr";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="mt-9">
        <div className="block w-full h-60 relative">
          <Image
            className="w-full h-52 bg-cover bg-center"
            alt="background-image"
            fill
            src="${app.totalAppDetails.headerImage}"
          />
        </div>

        <div className="mx-auto px-4 mt-10 relative z-10 bg-slate-100 w-11/12 rounded-sm">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <Image
                src="${app.totalAppDetails.icon}"
                alt="icon"
                width={96}
                height={125}
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>

            <div className="col-span-7 pl-5">
              <h1 className="text-3xl font-semibold p-0 m-0">${app.title}</h1>
              <p className="text-slate-600 text-lg py-3 m-0">${app.developer}</p>
              <div className="flex gap-2 mt-2">
                <span className="border rounded-full px-5 py-2 text-base bg-white">⭐ ${app.score}</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">${app.installs} installs</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">${app.genre}</span>
              </div>
            </div>

            <div className="ml-auto pb-2 col-span-3 my-auto">
              <Link
                href="${app.url}"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brandColor text-white shadow hover:opacity-90 transition underline-offset-4"
              >
                View on Play Store
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto py-3 grid lg:grid-cols-3 gap-8 w-11/12">
        <section className="lg:col-span-2 space-y-8">
          <div className="px-6 py-6 pt-2 bg-slate-50 shadow-sm">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <div className="prose prose-slate max-w-none">
              <p>${app.totalAppDetails.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <SlickContr
              autoPlay={true}
              headingTitle="Screenshots"
              infinite={true}
              rows={1}
              slidesToShow={3}
              slickObj={${JSON.stringify(app.totalAppDetails.screenshots)}}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src="${app.totalAppDetails.video}"
                title="Trailer"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="p-6 bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-center underline underline-offset-4">At a glance</h3>
            <dl className="grid grid-cols-2 gap-y-2 text-base">
              <dt className="text-slate-700">Rating</dt>
              <dd className="font-medium">${app.score}</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">${app.installs}</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">${app.genre}</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">${app.totalAppDetails.released}</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">${app.totalAppDetails.version}</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">${app.totalAppDetails.contentRating}</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">${app.totalAppDetails.IAPRange}</dd>
            </dl>
          </div>

          <div className="p-6 bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span>
                <span className="font-medium">${app.totalAppDetails.developer}</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>
                <Link className="underline" href="${app.totalAppDetails.developerWebsite}" target="_blank">
                  ${app.totalAppDetails.developerWebsite}
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>
                <Link className="underline" href="mailto:${app.totalAppDetails.developerEmail}">
                  ${app.totalAppDetails.developerEmail}
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className="max-w-6xl mx-auto px-4 pb-10 text-sm text-slate-500">Generated with Tailwind CSS</footer>
    </div>
  );
}
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
