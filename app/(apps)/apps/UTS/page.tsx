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
                __html: `
      <h1>UTS Mobile App – Book Train Tickets Easily!</h1>
      <p>Hey there! 👋 Do you know that in India, lots of people travel by train every day? Sometimes, buying a ticket at the station can take a long time. But guess what? There is a <strong>special app</strong> called <strong>UTS Mobile App</strong> that lets you buy train tickets using your phone! And you don’t even need to stand in a long line. Cool, right? 😎</p>
      <p>UTS stands for <strong>Unreserved Ticketing System</strong>, and it is made by <strong>Indian Railways</strong>. This app helps people get <em>unreserved train tickets</em>, which are tickets you can use without booking a seat in advance.</p>

      <h2>Who Can Use the UTS App?</h2>
      <ul>
        <li>Only <strong>people who are 12 years old or older</strong> can use it.</li>
        <li>People who were <strong>removed from the railway services</strong> before cannot use it.</li>
        <li>You must be honest and not pretend to be someone else.</li>
      </ul>
      <p>Basically, if you are old enough and follow the rules, you can use UTS to make your train travel easier! ✅</p>

      <h2>What You Need to Use UTS</h2>
      <ul>
        <li>A <strong>smartphone</strong> (Android, iPhone, or Windows phone) 📱</li>
        <li><strong>Internet connection</strong> (GPRS, 3G, 4G, or Wi-Fi) 🌐</li>
        <li>If you want <strong>paperless tickets</strong>, your phone needs <strong>GPS</strong> 📍</li>
      </ul>

      <h2>How to Register in UTS App (Step by Step)</h2>
      <ol>
        <li>Download the app from the <a href="https://play.google.com/store/apps/details?id=cris.org.in.prs.utsmobile" target="_blank">Google Play Store</a> or <a href="https://apps.apple.com/in/app/uts/id1100445200" target="_blank">Apple App Store</a>.</li>
        <li>Open the app and tap <strong>“Register”</strong>.</li>
        <li>Enter your <strong>Name, Mobile Number, Password, Gender, and Date of Birth</strong>.</li>
        <li>Verify your mobile number via <strong>OTP</strong>.</li>
        <li>Hooray! 🎉 Your account is ready, and the app will create an <strong>R-Wallet</strong> starting with zero money.</li>
      </ol>
      <p><strong>Tip:</strong> R-Wallet is like a little pocket inside the app where you can keep money to pay for tickets easily. 💰</p>

      <h2>How to Book a Ticket</h2>
      <ol>
        <li>Open the app and <strong>log in</strong>.</li>
        <li>Tap <strong>“Book Ticket”</strong>.</li>
        <li>Choose <strong>Journey Ticket</strong> or <strong>Return Ticket</strong>.</li>
        <li>Select your <strong>from</strong> and <strong>to station</strong>.</li>
        <li>Confirm fare and pay using <strong>R-Wallet</strong>, UPI, or card.</li>
        <li>Your ticket is ready! You can <strong>show it to the train conductor</strong> from your phone. 📲</li>
      </ol>
      <p><strong>Remember:</strong> Paperless tickets cannot be booked inside the station or inside the train. You must be a little away from the station.</p>

      <h2>Other Things You Can Do in UTS App</h2>
      <ul>
        <li><strong>Quick Booking:</strong> Book a ticket fast if you are in a hurry. ⏱️</li>
        <li><strong>Platform Ticket:</strong> Going to see someone off? Book a platform ticket.</li>
        <li><strong>Season Ticket:</strong> Saves time and money if you travel daily.</li>
        <li><strong>QR Booking:</strong> Some tickets can be booked using a QR code for easy scanning.</li>
        <li><strong>Cancel Ticket:</strong> Paper tickets can be cancelled, but paperless tickets cannot ❌.</li>
      </ul>

      <h2>How to Use R-Wallet</h2>
      <ol>
        <li>Open the app and go to <strong>R-Wallet → Recharge</strong>.</li>
        <li>Add money using <strong>UPI, net banking, or cards</strong>.</li>
        <li>Check your <strong>balance</strong> anytime.</li>
        <li>See your <strong>history</strong> of tickets and payments.</li>
      </ol>
      <p><strong>Tip:</strong> Keep some money in your R-Wallet so you can quickly buy tickets without waiting.</p>

      <h2>Show Your Ticket to the Conductor</h2>
      <p>Once your ticket is booked, tap <strong>“Show Ticket”</strong> in the app. The <strong>Train Ticket Examiner (TTE)</strong> or <strong>Ticket Collector (TC)</strong> will check it. Paperless tickets work even <strong>without internet</strong>! 🌐❌</p>

      <h2>Fun Tips for Kids (and Parents)</h2>
      <ul>
        <li>Keep your phone safe when showing the ticket.</li>
        <li>Don’t share your R-Wallet password with anyone 🔒.</li>
        <li>If traveling with family, you can book multiple tickets at once.</li>
        <li>Learn about the app before traveling to make your journey smooth 🛤️.</li>
      </ul>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>1. Can I cancel a paperless ticket?</h3>
      <p>No. Paperless tickets are <strong>non-refundable</strong>.</p>

      <h3>2. Can I book reserved seats?</h3>
      <p>No. UTS is only for <strong>unreserved tickets</strong>.</p>

      <h3>3. Can I use the app offline?</h3>
      <p>Yes! You can <strong>show your booked ticket</strong> offline.</p>

      <h3>4. Is UTS app available on iPhone?</h3>
      <p>Yes, it works on both Android and iPhone.</p>

      <h2>Conclusion</h2>
      <p>UTS App is like a <strong>magic helper</strong> for train travelers! It saves time, avoids queues, and helps you travel paperless. Follow these steps, keep your phone safe, and enjoy your journey! 🚂</p>
    `,
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
