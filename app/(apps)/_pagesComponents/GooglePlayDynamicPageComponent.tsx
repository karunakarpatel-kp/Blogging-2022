import SlickContr from "Components/SlickContainer/SlickContr";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

interface GooglePlayDynamicPageComponentProps {
  appData: {
    totalAppDetails: {
      headerImage: string;
      icon: string;
      title: string;
      developer: string;
      description: string;
      descriptionHTML: string;
      score: string;
      installs: string;
      genre: string;
      video: string;
      previewVideo: string;
      url: string;
      screenshots: any[];
      price: string;
      IAPRange: string;
      reviews: string;
      ratings: string;
      free: string;
      developerEmail: string;
      developerWebsite: string;
      developerLegalName: string;
      developerLegalEmail: string;
    };
  };
}

const GooglePlayDynamicPageComponent = (props: GooglePlayDynamicPageComponentProps) => {
  const {
    headerImage,
    icon,
    title,
    developer,
    description,
    descriptionHTML,
    score,
    installs,
    genre,
    video,
    previewVideo,
    url,
    screenshots,
    price,
    IAPRange,
    reviews,
    ratings,
    free,
    developerEmail,
    developerLegalName,
    developerWebsite,
    developerLegalEmail,
  } = props.appData.totalAppDetails;

  console.log(props.appData);
  return (
    <div>
      {/* Header */}
      <header className="mt-9">
        <div className="block w-full h-60 relative">
          <Image className="w-full h-80 bg-cover bg-center" alt="background-image" fill src={headerImage} />
        </div>

        <div className=" mx-auto px-4 mt-10 relative z-10 bg-slate-100  w-11/12 rounded-sm">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1 ">
              <Image
                src={icon}
                alt="icon"
                width={96}
                height={125}
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>

            <div className="col-span-7 pl-5">
              <h1 className="text-3xl font-semibold p-0 m-0">{title}</h1>
              <p className="text-slate-600 text-lg py-3 m-0">{developer}</p>
              <div className="flex gap-2 mt-2">
                <span className="border rounded-full px-5 py-2 text-base bg-white">⭐ {score}</span>
                <span className="pborder rounded-full px-5 py-2 text-base bg-white">{installs} installs</span>
                <span className="pborder rounded-full px-5 py-2 text-base bg-white">{genre}</span>
              </div>
            </div>
            <div className="ml-auto pb-2 col-span-3 my-auto">
              <Link
                href={url}
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
              {/* <p
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></p> */}
              <p
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{
                  __html: descriptionHTML,
                }}
              />
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
              slickObj={screenshots}
            />
          </div>

          {/* Trailer */}
          <div className="space-y-0">
            <h2 className="text-xl font-bold">Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe className="w-full h-full" src={video} title="Trailer" frameBorder="0" allowFullScreen />
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
              <dd className="font-medium">{ratings}</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">{installs}</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">{genre}</dd>
              <dt className="text-slate-500">Price</dt>
              <dd className="font-medium">{price}</dd>
              <dt className="text-slate-500">Free</dt>
              <dd className="font-medium">{free}</dd>
              <dt className="text-slate-500">Reviews</dt>
              <dd className="font-medium">{reviews}</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">{IAPRange}</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6  bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span> <span className="font-medium">{developer}</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline" href={developerWebsite} target="_blank">
                  {developerLegalName}
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline" href={`mailto${developerEmail}`}>
                  {developerLegalEmail}
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default GooglePlayDynamicPageComponent;
