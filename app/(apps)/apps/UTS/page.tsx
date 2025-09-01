import SlickContr from "Components/SlickContainer/SlickContr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Download and Install UTS App From Indian Railways",
  description:
    "UTS on mobile app is an Indian Railways official android mobile ticketing app to book unreserved train tickets.Who can use utsonmobile application? ",
  keywords: ["Travel & Local", " UTS", "Centre for Railway Information Systems", "karunakar patel"],
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
    title: "Download and Install UTS App From Indian Railways",
    description:
      "UTS on mobile app is an Indian Railways official android mobile ticketing app to book unreserved train tickets.Who can use utsonmobile application? ",
    url: "https://www.karunakarpatel.com/apps/UTS",
    siteName: "Play out the game of UTS",
    images: [
      {
        url: "https://play-lh.googleusercontent.com/DVOk_BEGv55EAWpgjX_ES3hiIjh1JRpjv1vBPsp-uNfNdpDiaIQHp1AwdgGUJtdi0A", // Replace with your image
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
    title: "UTS App From Indian Railways",
    description:
      "UTS on mobile app is an Indian Railways official android mobile ticketing app to book unreserved train tickets.Who can use utsonmobile application? ",
    images: [
      "https://play-lh.googleusercontent.com/DVOk_BEGv55EAWpgjX_ES3hiIjh1JRpjv1vBPsp-uNfNdpDiaIQHp1AwdgGUJtdi0A",
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
        <div className="h-96  bg-slate-100 relative">
          <Image
            className="w-full h-96 mt-20"
            alt="background-image"
            // fill
            width={920}
            height={820}
            src={
              "https://play-lh.googleusercontent.com/DVOk_BEGv55EAWpgjX_ES3hiIjh1JRpjv1vBPsp-uNfNdpDiaIQHp1AwdgGUJtdi0A"
            }
          />
        </div>
        <div className="mx-auto px-4   bg-slate-100 w-full md:w-11/12 lg:w-11/12 mt-2 rounded-sm ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-1 lg:col-span-1  ">
              <Image
                src={
                  "https://play-lh.googleusercontent.com/E-6l0O0rGrPRmLBI7yPvmhXg8pw_1NJ3gGBjrHs9dUDUGSaa0JKYiP-3Htbuw2B8Jp0"
                }
                width={96}
                height={125}
                alt="icon"
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>
            <div className="col-span-4 md:col-span-7 lg:col-span-7 pl-5">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold p-0 mt-4">UTS</h1>
              <p className="text-slate-600 text-base md:text-lg lg:text-lg py-0 m-0">
                Centre for Railway Information Systems
              </p>
              <div className="gap-2 mt-2 hidden md:flex lg:flex">
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  ⭐ 4.36
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  50,000,000+ installs
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  Travel & Local
                </span>
              </div>
            </div>
            <div className="ml-auto pb-2 col-span-5 md:col-span-3 lg:col-span-3 my-auto">
              <Link
                href={"https://play.google.com/store/apps/details?id=com.cris.utsmobile&hl=en&gl=us"}
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
                  "UTS on mobile app is an Indian Railways official android mobile ticketing app to book unreserved train tickets. <br> <br>Who can use utsonmobile application? <br>The service is not available to a person under the age of Twelve or previously suspended or removed from the services by Indian Railway.  <br> <br>By accepting the Terms &amp; Conditions or by otherwise using the Service or the website, it would be deemed that the concerned person is at least Twelve years of age and have not been previously suspended or removed from the Services by Indian Railway. The Person represents and warrants that he has the right, authority, and capacity to enter into this Agreement and to abide by all of the terms and conditions of this Agreement. The person shall not impersonate any other person or entity, or falsely state or otherwise misrepresent identity, age or affiliation with any other person or entity. <br> <br>Pre-requisites to avail the utsonmobile app service: ✅<br>Presently, utsonmobile app is available in Android, Windows &amp; iOS versions.  ✓ <br>The Smartphone should have good GPRS connectivity.  ✅ <br>In order to avail paperless mode of tickets, the Smartphone should be GPS enabled. <br>  <br>Registration Process: <br>User Registration for availing the above services can be done through the utsonmobile app or the website (https://www.utsonmobile.indianrail.gov.in). <br>The passenger needs to provide information like Mobile Number, Name, Password, Gender, Date of Birth for the one time registration process. <br>The mobile application would send an OTP to the mobile number specified against the USER ID field to ensure the validity of the mobile number. After successful registration, an SMS will be sent informing the user about the successful registration. A zero-balance R-Wallet account would be activated. <br> <br>Login Process: <br>After the registration, the passenger needs to enter the credentials in the login page for entering into the utsonmobile app.<br><br>Services offered by utsonmobile app: <br>1. Book Ticket: <br>    Normal Booking(Journey and Return tickets)✅ <br>    Quick Booking (Journey and Return tickets)✅  <br>    Platform Ticket ✅ <br>    Season Ticket ✅ <br>    QR Booking (Platform Tickets, Journey and Return Tickets)<br><br>2. Cancellation of Ticket :-<br>Paper Ticket with booking amount greater then cancellation charges can be cancelled using utsonmobile app before printing of ticket. Cancellation of Paperless Ticket is not allowed.<br><br>3. Booking History<br><br>4. R-Wallet:<br>✅R-Wallet Balance ✅ <br>    Recharge R-Wallet✅ <br>    History ✅ <br>    Surrender R-Wallet<br><br>5. Profile:<br>✅Change city ✅ <br>    Change Frequent travel Route ✅ <br>    Change Journey Details ✅ <br>    Change Password ✅ <br>    Change Handset Request ✅ <br>    Change Personal Details ✅ <br>    Sync Ticket<br><br>6. Show Booked Ticket:<br>Using &#39;show ticket&#39; feature the ticket can be showed to the TTE(Travelling Ticket Examiner) or TC. Off-line mode is also available to show the paperless ticket if Internet connection not available in the mobile.<br><br>Note:- <br>Paperless ticket booking(Book and Travel) is not allowed inside train or within station premises to avoid ticket booking just by seeing TTE(Travelling Ticket Examiner) or TC.<br>For booking of paperless ticket user should be away from Station premises/Railway track.<br><br>For Paper Ticket(Book and Print) mode of booking, It is mandatory to take printout of the ticket from ATVM/CoTVM kiosks or General Booking counters at station before boarding the Train.",
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
                "https://play-lh.googleusercontent.com/vMG5e9KufZgJg-4hMeDthv3fNnDTHHhTki2rarZUfag4_AwVT8I1C3DRl0UfSDhVZxQ",
                "https://play-lh.googleusercontent.com/6HHFZks-n8wpja7FxGf79fXkcD_elskSVYNHLfmWvIdYsbReVlqH5O-XbIVQ21p4HDvg",
                "https://play-lh.googleusercontent.com/23etyMc3FqobPTK-COGh37Nb3Zp2fhAn4RH0VB42zmKZ26_bTDXknAYixajK9FTSeA",
                "https://play-lh.googleusercontent.com/GMH-JgsuBOxC4WOaiR_l-eEFcmSWxU9ai2lOXma9fbh1P8RvurJfeEOZCiuDLz9ESDY",
                "https://play-lh.googleusercontent.com/UtrJhCPrrL1ZKTdsoY1hghFJR86o9dYKCHN48EqAbrS82qfi6E9UTePkBRm7j9S2kuQ",
                "https://play-lh.googleusercontent.com/ic5-JoXSrGzj-sGgLXgvE9fXrDelurBipZntYazKjo0dl8GkZjCQyHeQJ_D7auTAoKt2",
                "https://play-lh.googleusercontent.com/LdRD19lYV7FVSzdICjec8iZ6Lh5wlcWddAfTvK6HEHKV7Gri781Au2EEPwvJ0MVP4XI",
                "https://play-lh.googleusercontent.com/r2BpO1BTCV1O9K6ltCbTeY0qRaNbu8vxnSpnq75ahooYVxLq7olV3DDRgpQGnppi6w",
                "https://play-lh.googleusercontent.com/WUtPN-6RuF23d_CPZ7sczD5H4p-rhVy9IGZAy4vhiqz2vYsi2yXwkBNTyut5CzQwEz6M",
                "https://play-lh.googleusercontent.com/hZvssld0RL7VXqWNCbSrS95ytAEk7GYZ3JYv3rRsbPqJ1AudcY-_Rjcn2oktux9rGwQ",
                "https://play-lh.googleusercontent.com/3OZi9ABoDINCIpahoEY45R_KMNPP0iceS0ldYTPdrfUQXdwjJi5Lf6bN45m_Z2gvTw",
                "https://play-lh.googleusercontent.com/aJWTVHvW49FxtDqfH1-DPlBuZLaOF4TiiLWvj_s0EvQfaGzgsO8Ac_NRIQsJmrosvw",
                "https://play-lh.googleusercontent.com/r4km_C7QUVXijr6eaINXDsQ_X1xgsKZnchKpf7Gwgorj9z0btONfcen0c4cKb2sSF2I",
                "https://play-lh.googleusercontent.com/TnYH4ZpO79z2y_3lBNeXYWoJ3AT16xcXaqjM24hUlY2Ydtkwe7e9x_mRGkp_pHgHtV8",
                "https://play-lh.googleusercontent.com/3bsDBQX9DpxV2mYzPT4UIbkjGHwOxNOFi-vqAKzNCElVxPjzF5vhOjoROTELNnq8_qVZ",
                "https://play-lh.googleusercontent.com/H1U8H4vxK5jdLL0xx2nRhlbWxE20wq5e24xEAtqv-jo0MGAcNnDsLxPSv-Pqo8tTZVk",
                "https://play-lh.googleusercontent.com/n6226F-CZzZkCDPDY3nydRGk0FBFVnxYawzpPsauwEijpMlt_4JZfOocuAkFh0-qkNc",
                "https://play-lh.googleusercontent.com/pqUJ428OnE8jXZ3sngQ_0E9IXZdY6EbBnn92UtQXKYB9YtGXsJ-hn912L2dDk0oov9Q",
              ]}
            />
          </div>

          {/* Trailer */}
          <div className="space-y-4 hidden">
            <h2 className="text-xl font-bold">UTS Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe className="w-full h-full" src={"undefined"} title="Trailer" allowFullScreen />
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
              <dd className="font-medium">1407540</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">50,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Travel & Local</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Released</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">29.4.41 Version</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Teen Content Rating</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">undefined</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6  bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span>{" "}
                <span className="font-medium">Centre for Railway Information Systems</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline" href={"https://www.utsonmobile.indianrail.gov.in"} target="_blank">
                  https://www.utsonmobile.indianrail.gov.in
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline" href="crisntesapp@gmail.com">
                  crisntesapp@gmail.com
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
