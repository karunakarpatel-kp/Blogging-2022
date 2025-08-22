import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="mt-9">
        <div className="block w-full h-60 relative">
          <Image
            className="w-full h-52 object-cover"
            alt="background-image"
            fill
            src="https://play-lh.googleusercontent.com/3B2aW4Nka4xiq35ywcD5b5Rqb6IJw0ffm_QFlHM_rV9ex7wKtb0ddFOX8LJPxkemb78"
          />
        </div>

        <div className="mx-auto px-4 mt-10 relative z-10 bg-slate-100 w-11/12 rounded-sm">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <Image
                src="https://play-lh.googleusercontent.com/D4DUUFQDCsH9NIEa8hjMjQSWdtNhGX1Fd_jT-23ogAb5uMMqttqQDUJcUt4K_u8RYOQ"
                alt="icon"
                width={96}
                height={125}
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>

            <div className="col-span-7 pl-5">
              <h1 className="text-3xl font-semibold">Arknights</h1>
              <p className="text-slate-600 text-lg py-3">Yostar Limited.</p>
              <div className="flex gap-2 mt-2">
                <span className="border rounded-full px-5 py-2 text-base bg-white">⭐ 4.4</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">5,000,000+ installs</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">Strategy</span>
              </div>
            </div>

            <div className="ml-auto pb-2 col-span-3 my-auto">
              <Link
                href="https://play.google.com/store/apps/details?id=com.YoStarEN.Arknights&hl=en&gl=us"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white shadow hover:opacity-90 transition underline-offset-4"
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
      <main className="mx-auto py-6 grid lg:grid-cols-3 gap-8 w-11/12">
        {/* Left Column */}
        <section className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="px-6 py-6 pt-2 bg-slate-50 shadow-sm rounded">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <div className="prose prose-slate max-w-none">
              <p>
                Take on the role of a key member of Rhodes Island, a pharmaceutical company that fights both a deadly
                infection and the unrest it leaves in its wake. Together with your leader Amiya, you'll recruit
                Operators, train them, then assign them to various operations to protect the innocent and resist those
                who would thrust the world into turmoil.
              </p>
              <p>Your tactics will determine the future of Rhodes Island. Fight for the Dawn!</p>
              <ol className="list-disc pl-5">
                <li>Gorgeous anime-style game with a perfect combination of RPG and strategy elements</li>
                <li>Hundreds of unique Operators across a variety of classes open up countless gameplay options</li>
                <li>Hundreds of unique Operators across a variety of classes open up countless gameplay options</li>
                <li>Hundreds of unique Operators across a variety of classes open up countless gameplay options</li>
                <li>Hundreds of unique Operators across a variety of classes open up countless gameplay options</li>
              </ol>
            </div>
          </div>

          {/* Screenshots */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Screenshots</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "https://play-lh.googleusercontent.com/ohF1ht6lXKY4ybjXlMrt2IjCdKBpgl1NUA6ftvNemA2iGxT0SP8HEZDseeYC5Q420Q",
                "https://play-lh.googleusercontent.com/ohF1ht6lXKY4ybjXlMrt2IjCdKBpgl1NUA6ftvNemA2iGxT0SP8HEZDseeYC5Q420Q",
                "https://play-lh.googleusercontent.com/8Dnnwo9o932gZBRxVQOSPvG_k4qy1V6uhrDvT_w2krStdxXzKhumCV17J5jjCY1ApU4",
              ].map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt="screenshot"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl shadow"
                />
              ))}
            </div>
          </div>

          {/* Trailer */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TRDsdsi20Ac?ps=play&vq=large&rel=0&autohide=1&showinfo=0&start=15"
                title="Trailer"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Right Column */}
        <aside className="space-y-6">
          {/* Meta */}
          <div className="p-6 bg-slate-50 shadow-sm rounded">
            <h3 className="text-lg font-semibold mb-3 text-center underline underline-offset-4">At a glance</h3>
            <dl className="grid grid-cols-2 gap-y-2 text-base">
              <dt className="text-slate-700">Rating</dt>
              <dd className="font-medium">4.4</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">5,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Strategy</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Jan 15, 2020</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">29.4.41</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Teen</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">$0.99 - $99.99 per item</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6 bg-slate-50 shadow-sm rounded">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span> <span className="font-medium">Yostar Limited.</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline text-blue-600" href="https://www.arknights.global" target="_blank">
                  https://www.arknights.global
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline text-blue-600" href="mailto:arknights.en.cs@yo-star.com">
                  arknights.en.cs@yo-star.com
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
