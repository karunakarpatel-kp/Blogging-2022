import SlickContr from "Components/SlickContainer/SlickContr";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Header */}
      <header className="mt-9">
        <div className="block w-full h-60 relative">
          <Image
            className="w-full h-52 bg-cover bg-center"
            alt="background-image"
            fill
            src={
              "https://play-lh.googleusercontent.com/3B2aW4Nka4xiq35ywcD5b5Rqb6IJw0ffm_QFlHM_rV9ex7wKtb0ddFOX8LJPxkemb78"
            }
          />
        </div>

        <div className=" mx-auto px-4 mt-10 relative z-10 bg-slate-100  w-11/12 rounded-sm">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1 ">
              <Image
                src="https://play-lh.googleusercontent.com/D4DUUFQDCsH9NIEa8hjMjQSWdtNhGX1Fd_jT-23ogAb5uMMqttqQDUJcUt4K_u8RYOQ"
                alt="icon"
                width={96}
                height={125}
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>

            <div className="col-span-7 pl-5">
              <h1 className="text-3xl font-semibold p-0 m-0">Arknights</h1>
              <p className="text-slate-600 text-lg py-3 m-0">Yostar Limited.</p>
              <div className="flex gap-2 mt-2">
                <span className="border rounded-full px-5 py-2 text-base bg-white">⭐ 4.4</span>
                <span className="pborder rounded-full px-5 py-2 text-base bg-white">5,000,000+ installs</span>
                <span className="pborder rounded-full px-5 py-2 text-base bg-white">Strategy</span>
              </div>
            </div>
            <div className="ml-auto pb-2 col-span-3 my-auto">
              <Link
                href="https://play.google.com/store/apps/details?id=com.YoStarEN.Arknights&hl=en&gl=us"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brandColor text-white shadow hover:opacity-90 transition underline-offset-4"
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
      <main className="mx-auto py-3 grid lg:grid-cols-3 gap-8 w-11/12 ">
        {/* Left Column */}
        <section className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="px-6 py-6 pt-2  bg-slate-50  shadow-sm">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <div className="prose prose-slate max-w-none">
              <p>
                Take on the role of a key member of Rhodes Island, a pharmaceutical company that fights both a deadly
                infection and the unrest it leaves in its wake. Together with your leader Amiya, you'll recruit
                Operators, train them, then assign them to various operations to protect the innocent and resist those
                who would thrust the world into turmoil.
              </p>
              <p>Your tactics will determine the future of Rhodes Island. Fight for the Dawn!</p>
              <ol className="list-outside list-disc">
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
            <SlickContr
              autoPlay={true}
              headingTitle="Screenshots"
              infinite={true}
              rows={1}
              slidesToShow={3}
              slickObj={[
                "https://play-lh.googleusercontent.com/DYl_jLOQ-0hARMxdYnYICs8nRvrdWeb-JsxRxUqqqxbAqhouuQPJ_VgID_LBiinzlg",
                "https://play-lh.googleusercontent.com/KOO5-WX-bOj89bQD1oX9XAJIE1i4FzaFwsyYEx2eAysHEjEbR2k9UgB-Dv8lT6HP0nk",
                "https://play-lh.googleusercontent.com/oL-2BQxv4XpLjT3aJNhhv8jgp78-glEzMPC_zpFh2z6eQ_mCr0dIB_4biCKMvAhYVg",
                "https://play-lh.googleusercontent.com/5Hm7H1tM-sBxKx4Q0hz-lw37XdsgT5BTRHdvzIIK8O27TDsdYD-e0jDsHM8rLU0kPDs",
                "https://play-lh.googleusercontent.com/8bnCVkGjfJ4S8XzxA2x9bTm7jTKjUSf_ZpQcU5h_eqHazTTyjyhD20uQJrti8jP5fw",
                "https://play-lh.googleusercontent.com/TGE4Avg5Hpgua-xLn93n7D6XNAXV8FMJpJ8Vx8ih6kEyRH2LlhY73glytO9RbZN13Mi8",
              ]}
            />
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
          <div className=" p-6  bg-slate-50  shadow-sm">
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
          <div className="p-6  bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span> <span className="font-medium">Yostar Limited.</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline" href="https://www.arknights.global" target="_blank">
                  https://www.arknights.global
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline" href="mailto:arknights.en.cs@yo-star.com">
                  arknights.en.cs@yo-star.com
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className="max-w-6xl mx-auto px-4 pb-10 text-sm text-slate-500">Generated with Tailwind CSS (CDN)</footer>
    </div>
  );
}
