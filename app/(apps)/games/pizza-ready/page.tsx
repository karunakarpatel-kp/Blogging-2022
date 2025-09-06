import SlickContr from "Components/SlickContainer/SlickContr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Pizza Ready!",
  description: "",
  keywords: ["Simulation", " Pizza Ready!", "Supercent, Inc.", "karunakar patel"],
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
    title: "Pizza Ready!",
    description: "",
    url: "F:Blogging WebsiteBlogging-2022app(apps)appsPizza-Ready!",
    siteName: "Play out the game of Pizza Ready!",
    images: [
      {
        url: "https://play-lh.googleusercontent.com/-G-LVZLansErbBEx9DgCYYtX8mPM9yvBPgqkdsXZ_up0AjyiQJH7URaA-0XDs3cdlA0", // Replace with your image
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
    title: "Pizza Ready!",
    description: "",
    images: [
      "https://play-lh.googleusercontent.com/-G-LVZLansErbBEx9DgCYYtX8mPM9yvBPgqkdsXZ_up0AjyiQJH7URaA-0XDs3cdlA0",
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
      <header className="-mt-4 ">
        <div className="h-60 md:h-96  bg-slate-100 relative">
          <Image
            className="w-full h-60 md:h-96 mt-20"
            alt="background-image"
            // fill
            width={920}
            height={820}
            src={
              "https://play-lh.googleusercontent.com/-G-LVZLansErbBEx9DgCYYtX8mPM9yvBPgqkdsXZ_up0AjyiQJH7URaA-0XDs3cdlA0"
            }
          />
        </div>
        <div className="mx-auto px-4   bg-slate-100 w-full md:w-11/12 lg:w-11/12 mt-2 rounded-sm ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-1 lg:col-span-1  ">
              <Image
                src={
                  "https://play-lh.googleusercontent.com/lE0mHL_R56HzrTkZcAaSYvd-s3C_a2i_n5RV4OFmdfpLoVz2-vGQRuZ1hZDRmq4fWg"
                }
                width={96}
                height={125}
                alt="icon"
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>
            <div className="col-span-4 md:col-span-7 lg:col-span-7 pl-5">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold p-0 mt-4">Pizza Ready!</h1>
              <p className="text-slate-600 text-base md:text-lg lg:text-lg py-0 m-0">Supercent, Inc.</p>
              <div className="gap-2 mt-2 hidden md:flex lg:flex">
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  ⭐ 4.3373065
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  100,000,000+ installs
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  Simulation
                </span>
              </div>
            </div>
            <div className="ml-auto pb-2 col-span-5 md:col-span-3 lg:col-span-3 my-auto">
              <Link
                href={"https://play.google.com/store/apps/details?id=io.supercent.pizzaidle&hl=en&gl=us"}
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
          <div className="px-1 md:px-6 py-6 pt-2  bg-slate-50  shadow-sm">
            <div
              className="prose prose-slate prose-lg max-w-none prose-h1:text-4xl"
              dangerouslySetInnerHTML={{
                __html: `<header>
    <h1>🍕 Pizza Ready — Make Pizzas, Help People, and Grow Your Shop!</h1>
    <p class="lead">A simple and happy game where you pretend to own a pizza store. You bake, you sell, and you make people smile.</p>
  </header>

  <section>
    <h2>What is Pizza Ready?</h2>
    <p>Pizza Ready is a pretend game where you run your own pizza shop. You make yummy pizzas, give them to hungry people, and try to make your shop the best in town. It is easy to learn and lots of fun.</p>
  </section>

  <section>
    <h2>Be the Boss of Your Pizza Shop</h2>
    <p>In the game, <strong>you</strong> are the boss. You pick what pizzas to make and how to serve them. You can buy better ovens and make pizzas faster. Little by little your shop gets bigger and happier.</p>
  </section>

  <section>
    <h2>Two Ways to Buy Pizza</h2>
    <p>There are two ways people can get pizza from you:</p>
    <ul>
      <li><strong>Counter:</strong> Customers come inside and you hand them a slice with a smile.</li>
      <li><strong>Drive-thru:</strong> Cars line up and you give pizza through a window—quick and fun!</li>
    </ul>
    <p>Using both ways helps your shop sell more pizzas and more people are happy.</p>
  </section>

  <section>
    <h2>Hire Helpers and Make a Team</h2>
    <p>You can hire helpers so you do not have to do everything alone. Give them jobs like stirring dough, baking, or taking money. When helpers learn new things, they work faster and customers wait less.</p>
  </section>

  <section>
    <h2>Open More Shops — Grow Big!</h2>
    <p>When your first shop does well, you can open more shops in other places. Little shops can become many shops. One day you might have pizza stores in many cities and become a pizza boss!</p>
  </section>

  <section>
    <h2>Totally Free to Play</h2>
    <p>Pizza Ready does not cost any money to start. You can play and have fun without paying. It is great for kids and for anyone who likes cooking games.</p>
  </section>

  <section>
    <h2>Why Kids Like This Game</h2>
    <ul>
      <li>It is easy to understand.</li>
      <li>You see quick rewards — happy customers and coins!</li>
      <li>You practice making choices and planning your shop.</li>
      <li>It feels like playing pretend in real life.</li>
    </ul>
  </section>

  <section>
    <h2>How to Start Playing</h2>
    <p>Find the game on your device, tap to open it, and follow the simple steps to make your first pizza. Try different toppings and see what customers like most. Have fun and try to beat your own score!</p>
  </section>

  <section class="faq">
    <h2>Simple Questions (FAQs)</h2>

    <h3>Q: Who should play Pizza Ready?</h3>
    <p>A: Anyone who likes pizza and games! Kids, teens, and big people who want to pretend to run a shop can play.</p>

    <h3>Q: Do I need to pay to play?</h3>
    <p>A: No. The game is free to start. Some extras might be offered, but you can have fun without buying anything.</p>

    <h3>Q: Can I play without internet?</h3>
    <p>A: You can play many parts of the game offline, but online helps with updates and new things.</p>

    <h3>Q: How do I make my shop better faster?</h3>
    <p>A: Serve customers quickly, upgrade your ovens and helpers, and open new shops. Little improvements add up.</p>

    <h3>Q: Is the game safe for kids?</h3>
    <p>A: Yes. It is meant to be gentle and easy. Parents should check app settings if they worry about ads or purchases.</p>
  </section>`,
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
                "https://play-lh.googleusercontent.com/rETByqLdpCFE06Sz6SS7eBa1quQdH6YwlRlCHJ73aTADJDFP9Rwr2nuvWxXvHNpqrg",
                "https://play-lh.googleusercontent.com/-nWDaybtRqjFHnWvcKmTXlgj-1mcgpXMlmD1SGM1ij264s-lcgcf1Ao8fHg_6no60lo",
                "https://play-lh.googleusercontent.com/NkZIShM24uGmkhx57XBubBHEybwkL3cTrypBAny_xkDfOTEcBiXhVxd1esWrFb79fg",
                "https://play-lh.googleusercontent.com/As_-ca-Ag_oigvoWzGi0T5D4AkVhRoEVAxPwWr8g_r6VrqPGO1-ZYVte9uKI5P8XQv1A",
                "https://play-lh.googleusercontent.com/UC_MM7IyQeKnKSpNmzrIKOsfz0RAuyvr589uvoVvVOkrQKeIYzA5Xj8hZDtjoS7i3Zma",
                "https://play-lh.googleusercontent.com/a4qjlQY__q0mg1c2wjVAvfVZ-DjuDQjkjH3223mxNDLrN-L9mFRqCg73Zk4sAeSPaC0",
                "https://play-lh.googleusercontent.com/4i_XwzJnhDZkX9CQzFWjRS1-956a9VeV5T3z8FlMEI2u8v0LdUMaof5EgUvChbtTr3g6",
                "https://play-lh.googleusercontent.com/5hIIGxIsKAmvqlw3Pe5VA7Gjzt7IH3O5UyeCW2gnF82uSI0kRuEsjzXwHl72g3G4noY",
                "https://play-lh.googleusercontent.com/jYINkXBqYewXMpFSCxMO7JLi3utTb7ib946YLOG8913Qlzhchv0IT5imqPN8ANXtLLs",
                "https://play-lh.googleusercontent.com/iGlCRypCpVP9PRd9oP5ic1DIAj12DGm6sV10jiS5abrX675CsPJmdFsXpQuFJnDjpOc",
                "https://play-lh.googleusercontent.com/GbmZofkbcdseE_j4UWNtO4L_yoPn3HoCCPs52u-TUsiOv9T80pQagaPJX6hi0llC3mr5",
                "https://play-lh.googleusercontent.com/bPJCtNCZdFM-TB7i75RWa255JcveutlmuCCKk9Vp2zYk2WZaC1aYHfmRPSwUi4CRcg",
                "https://play-lh.googleusercontent.com/yCK-RRRn2OWRh579qtTuHq9zMBq5q_qNHOhi9r5y_9w4RdIo8udZitAeJXf0a70h0w",
                "https://play-lh.googleusercontent.com/RrfM58JnbLyuFGq0Mc3WNfmRh1wpnf-S6roRMMcccD-G-yMmInphNyOTgF2UZOt1fEM",
                "https://play-lh.googleusercontent.com/_KQ0wQWmjtHDsCmOIaWe7-MXwNuUG4C6hzcShw9eYPV3qY4nsc56p3nOc9KWqsFCRx9b",
                "https://play-lh.googleusercontent.com/ANXRs1nWhzVXL8fuEb2p9S1rVzjTVryugqWHCPtWImhhNN_KAgNfu-uPSRJH5UsFiJMw",
                "https://play-lh.googleusercontent.com/Jf5XA0UosjJjlVnIxpCIr-Bdqbu6npknUtH0VqPctLQcl0A3HN66dpaLcbi3vN9S6wv0",
                "https://play-lh.googleusercontent.com/ArV-HAeA4ahlvXEk-x-BcS1fO4xw4JQRULxK2SoyTfu7kTs-u_rc4cd_SY9xSVvUflli",
                "https://play-lh.googleusercontent.com/oWihUqH4Ou08W0cfCmWxea2fQfFEQy8DjnnmhqWgkfQl8qe51Aklr7sE4RYBgdUUchA",
                "https://play-lh.googleusercontent.com/MIUaLzm1Yv8fnC3TfSyIF3hKFAM0xL9glXJT8ZBveAgejft9TBeNNHVFar-T0iajvA",
                "https://play-lh.googleusercontent.com/OwRdA6MIWiuLa1bp3X8WBk4yXRdh_zb0nyjfnB6jMNnxe-up68bzYqXpJdUPYS51yA",
                "https://play-lh.googleusercontent.com/P8JT0Wkp7K800KErFiA1HHRPdhLPlsppAwDWWJi9O01RWnvRCJ0ajjEdsem3ObTJTQ",
                "https://play-lh.googleusercontent.com/5_1YwKujhGRk1OCN6sLjoWcXAXxtn0GxbwtECVjlQ9RhdpAI39-Ew5hHGf59JMYWpg",
                "https://play-lh.googleusercontent.com/w-brm0745C_KVHHaXbEtwsv_vis2akj-1Wu1hnHSgJYyf8NtgMc30HSlCre8AKwpBeE",
              ]}
            />
          </div>

          {/* Trailer */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Pizza Ready! Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src={"https://www.youtube.com/embed/mYWuCEGo3LM?ps=play&vq=large&rel=0&autohide=1&showinfo=0"}
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
            <h3 className="text-lg font-semibold mb-3 text-center underline underline-offset-4">About the Game</h3>
            <dl className="grid grid-cols-2 gap-y-2 text-base">
              <dt className="text-slate-700">Ratings</dt>
              <dd className="font-medium">1730478</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">100,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Simulation</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Released</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">29.4.41 Version</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Teen Content Rating</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">$0.99 - $49.99 per item</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6  bg-slate-50 shadow-sm break-words">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span>{" "}
                <span className="font-medium break-words ">슈퍼센트 주식회사</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline break-words" href={"https://supercent.io/"} target="_blank">
                  https://supercent.io/
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline break-words" href="help@supercent.io">
                  help@supercent.io
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
