import SlickContr from "Components/SlickContainer/SlickContr";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Download and Install Ludo King Online game ",
  description:
    "THIS IS OFFICIAL LUDO KING GAME 1.5 Billion Downloads! Voice chat available. Ludo King® is board game played between friends, family & kids. check out the details in this complete blog posts.",
  keywords: ["Board", " Ludo King®", "Gametion", "karunakar patel"],
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
    title: "Download and Install Ludo King Online game ",
    description:
      "THIS IS OFFICIAL LUDO KING® GAME 1.5 Billion Downloads! Voice chat available. Ludo King® is board game played between friends, family & kids.",
    url: "https://www.karunakarpatel.com/games/Ludo-King",
    siteName: "Play out the game of Ludo King®",
    images: [
      {
        url: "https://play-lh.googleusercontent.com/oNrcdO-4BaTdGo87-9GdTtOeQwLMIl3Co8zPW_OCNZgfRpOgLZhndCs_GsNjTn0HVKc", // Replace with your image
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
    title: "Download and Install Ludo King Online game ",
    description:
      "THIS IS OFFICIAL LUDO KING® GAME 1.5 Billion Downloads! Voice chat available. Ludo King® is board game played between friends, family & kids.",
    images: [
      "https://play-lh.googleusercontent.com/oNrcdO-4BaTdGo87-9GdTtOeQwLMIl3Co8zPW_OCNZgfRpOgLZhndCs_GsNjTn0HVKc",
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
              "https://play-lh.googleusercontent.com/oNrcdO-4BaTdGo87-9GdTtOeQwLMIl3Co8zPW_OCNZgfRpOgLZhndCs_GsNjTn0HVKc"
            }
          />
        </div>
        <div className="mx-auto px-4   bg-slate-100 w-full md:w-11/12 lg:w-11/12 mt-2 rounded-sm ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-1 lg:col-span-1  ">
              <Image
                src={
                  "https://play-lh.googleusercontent.com/AwrQb4bJk-34pw_ye7VhjDN0Azraz_pYYq9s5FbcapiF7qfxbYYvqWl-TjIF9xJIeA"
                }
                width={96}
                height={125}
                alt="icon"
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>
            <div className="col-span-4 md:col-span-7 lg:col-span-7 pl-5">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold p-0 mt-4">Ludo King®</h1>
              <p className="text-slate-600 text-base md:text-lg lg:text-lg py-0 m-0">Gametion</p>
              <div className="gap-2 mt-2 hidden md:flex lg:flex">
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  ⭐ 4.2015386
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  1,000,000,000+ installs
                </span>
                <span className="border rounded-full px-8 md:px-5 py-1 md:py-2 text-xs md:text-base bg-white">
                  Board
                </span>
              </div>
            </div>
            <div className="ml-auto pb-2 col-span-5 md:col-span-3 lg:col-span-3 my-auto">
              <Link
                href={"https://play.google.com/store/apps/details?id=com.ludo.king&hl=en&gl=us"}
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
                __html: `
      <h1>Ludo King® - Play the Classic Board Game on Your Phone!</h1>
      <p>Hello there! 👋 Do you like playing games with your friends and family? Guess what! There’s a super fun game called <strong>Ludo King®</strong>, and now you can play it right on your phone or tablet. You don’t need a board, dice, or tokens, everything is digital! 🎲</p>
      <p>Ludo King® is the modern version of the classic game of <strong>Ludo</strong> that kings and queens used to play a long time ago in India. It’s a fun game where you roll dice, move your tokens, and try to reach the center of the board before your friends. 🏆</p>

      <h2>Amazing Facts About Ludo King®</h2>
      <ul>
        <li>Over <strong>1.5 billion downloads</strong> worldwide! 🌏</li>
        <li>You can <strong>talk to friends while playing</strong> using voice chat 🎤</li>
        <li>Play with your <strong>family, friends, or even kids</strong></li>
        <li>Play <strong>2 to 6 players online</strong> or enjoy <strong>offline mode</strong> with the computer</li>
      </ul>

      <h2>Different Game Modes</h2>
      <ul>
        <li><strong>Snakes and Ladders</strong> - Play with 2 to 4 players 🐍🪜</li>
        <li><strong>8 Player Tournaments</strong> – Compete with lots of players online 🏅</li>
        <li><strong>Daily Goals</strong> – Complete fun tasks and get free dice, coins, and diamonds 💎</li>
      </ul>
      <p>Every month, a <strong>new Ludo season</strong> is released to keep things exciting!</p>

      <h2>Game Themes – Make It Colorful!</h2>
      <ul>
        <li>Disco / Night Mode 💃🌙</li>
        <li>Nature 🌿</li>
        <li>Egypt 🏺</li>
        <li>Pinball 🎰</li>
        <li>Candy 🍭</li>
        <li>Christmas 🎄</li>
        <li>Penguin 🐧</li>
        <li>Battle ⚔️</li>
        <li>Diwali 🪔</li>
        <li>Pirate 🏴‍☠️</li>
        <li>Marble ⚪</li>
        <li>Alien 👽</li>
        <li>Octopus 🐙</li>
        <li>Taj Mahal 🕌</li>
      </ul>

      <h2>How to Play Ludo King®</h2>
      <ol>
        <li><strong>Download the app</strong> on Android, iOS, Windows, or even on your computer 💻📱</li>
        <li><strong>Open the app</strong> and choose your game mode</li>
        <li>Roll the dice and move your tokens around the board</li>
        <li>Try to reach the center <strong>before your friends</strong> do</li>
        <li>If you land at the start of a ladder, climb it to go up faster! 🪜</li>
        <li>If a snake bites you, you slide down. Oops! 🐍</li>
      </ol>
      <p><strong>Tip:</strong> The game is all about <strong>luck and strategy</strong>. Plan your moves carefully and try to block other players.</p>

      <h2>Special Features of Ludo King®</h2>
      <ul>
        <li><strong>Play offline</strong> – No internet? No problem! Play with the computer 🤖</li>
        <li><strong>Local Multiplayer</strong> – Pass your phone and play with friends nearby 👥</li>
        <li><strong>Online Multiplayer</strong> – Play with friends or random players worldwide 🌍</li>
        <li><strong>Invite Facebook Friends</strong> – Challenge your buddies in private rooms 📲</li>
        <li><strong>Private Chat</strong> – Text or voice chat with friends while playing 💬🎤</li>
        <li><strong>Save & Load Game</strong> – Continue your game anytime 💾</li>
        <li><strong>Low-End Device Support</strong> – Works smoothly on older phones too 📱</li>
      </ul>

      <h2>Ludo King® and Snakes & Ladders</h2>
      <p>Remember Snakes and Ladders from your childhood? Ludo King® includes it too! 🐍🪜 The goal is simple: reach tile 100 first. But you can only move as many spaces as the dice shows. Land on a ladder to climb up, or a snake to slide down. A game full of ups and downs, just like life!</p>

      <h2>Fun Names and Trivia</h2>
      <p>Did you know Ludo is called different names around the world?</p>
      <ul>
        <li>Fia, Le Jeu de Dada, Non t’arrabbiare, Cờ cá ngựa, Uckers, Petits Chevaux…</li>
        <li>People sometimes misspell it: Loodo, Chakka, Lido, Lado, Ledo, Leedo, Laado, Lodo</li>
      </ul>
      <p>No matter the name, it’s <strong>all about fun and family time</strong>! 🥳</p>

      <h2>Follow Ludo King® for News and Updates</h2>
      <ul>
        <li>Facebook: <a href="https://www.facebook.com/ludokinggame" target="_blank">https://www.facebook.com/ludokinggame</a></li>
        <li>Twitter: <a href="https://twitter.com/LudoKingGame" target="_blank">https://twitter.com/LudoKingGame</a></li>
        <li>YouTube: <a href="https://www.youtube.com/c/LudoKing" target="_blank">https://www.youtube.com/c/LudoKing</a></li>
        <li>Instagram: <a href="https://www.instagram.com/ludokinggame/" target="_blank">https://www.instagram.com/ludokinggame/</a></li>
        <li>Official site: <a href="https://ludoking.com" target="_blank">https://ludoking.com</a></li>
      </ul>

      <h2>Conclusion</h2>
      <p>Ludo King® is more than a game. It’s <strong>fun, colorful, and social</strong>. You can play with friends, family, or even strangers around the world. It brings <strong>nostalgia</strong> and new excitement together. So roll the dice, move your tokens, and <strong>become the Ludo King! 👑</strong></p>
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
                "https://play-lh.googleusercontent.com/0CEVKudlzo2Rae1qRvQmp3OAfYIe0sdymw_oPPjZRbTpZPPHhOl46SH0vA7MKWWU_5LC",
                "https://play-lh.googleusercontent.com/yRs4Wyajye9P8ppwD-8GpW6N8dTgOcvgP8eR5S2Tqwfe2fODn5VcXadGPV2Nu-pJJJg",
                "https://play-lh.googleusercontent.com/tBTNowiwvx-y3yyUmZM0dVGgTqNTp883qUkAu_9j_z9zzslIemfy-7qDM-ENoUL-pIOS",
                "https://play-lh.googleusercontent.com/Oo-vfb_bZQC-6a8Q1x942Ym51PkoWDF2TsSLmHBVfeGz0aCAAORT7C8B_8yNjS7vRPo",
                "https://play-lh.googleusercontent.com/_hypEz_ZhimAjFEyBmtN0tR2r6ZkA8B2_kd2mmNKTh_1LsEotwpT13IT2R3DApn_Jg",
                "https://play-lh.googleusercontent.com/u7ua0PKATtdyzlMHVtfedkHB__SPoZ4r98XEnCYijMdoIYkl2tn34awiSY4Oequ96g",
                "https://play-lh.googleusercontent.com/URdV18ol-DmLc9eDA0G_2jX3TZre9Gy95YqgvUvx9ivcKlqze9D1tAsYf1WL8MEuIGw",
                "https://play-lh.googleusercontent.com/nRq5qRblfS4Fj2r07JsNmgKKXo_VQ9KOlIMMTMiFqwxKavsZEGngmMNGlFqm2VmqSPQ",
                "https://play-lh.googleusercontent.com/JIG1DmhaLOT-StNWspIeCYSX-B1e_pzCCx8hgAr9p87bZIR-oTtaBd9zQiuCCgOjKw",
                "https://play-lh.googleusercontent.com/gM7jR_VNXqtF-Yu8BPrzMPr7MN-M8d7qXduV9E6N9ajbWlh9aL6HBb90QVsGDynEkBo",
                "https://play-lh.googleusercontent.com/MnAxvnrysUVwf1LrLJfw2Mbx6BfXnWwoWQE_UoucRuuZsXvBOl5cqfGCqILwdUvjbRo",
                "https://play-lh.googleusercontent.com/1SKmja_TiR_0lcyDZH1_gmy1NsQM3U1XgFbqcterC8mh-PhYxQpZ1_wa3Gsm75ElvQ",
                "https://play-lh.googleusercontent.com/K6iwopsY0Vo0lsLn-EiNMGvw5elUUDE8Wtnjs0QYOEsXchIeFXltNyRfcHbm3raUWKM",
                "https://play-lh.googleusercontent.com/vpq8Il_Ieg7pFuEHEQFc1A2OMr2rtZrESzhZSg6DjzigHP55D0DMzfSHbDeIexxr9t4",
                "https://play-lh.googleusercontent.com/CtCW159O_63hOLd0tZn5WqQwBaxNtFKcBRUVmdzR9uCUYT6ezPSs5HRQI6izLeWqiA",
                "https://play-lh.googleusercontent.com/NZXSpORGy7sGLLPcOtwUeeRlOfn6cAUsHxbwFjNyUrUytLFRqvfFtOAZfcLLJ-0FTw",
                "https://play-lh.googleusercontent.com/mELoNRNd3uyf6rvyPb656RZNOf0c7u4-bLDIPI0z0VDYiimqyNVa-jLLx5A-WeGyDQ",
                "https://play-lh.googleusercontent.com/lB5lXeZrTg6uHOutlV_qPYzGURPTwcgJRxWQ76j4Deck4P8itr04i8wyLuLpfKscnk8Z",
                "https://play-lh.googleusercontent.com/2g9ZsxOaX66aGgo-4bXckCeBmGcYHR9CxveuYWs7p7Jq5rYD88gInFLSSQXDllWKktQ",
                "https://play-lh.googleusercontent.com/HrFMBrTjQQ5L03J-y-ZQyJetKkuuPU9CQ28M06S-5a3GZGoheZcJGhopZu6FC6ifniY7",
                "https://play-lh.googleusercontent.com/hKZL6E-ouxvicfevc9Hqj3I9LkcyMB9PMOt0QZV2sBPMA0M9MeQQ_7ZoSzlllGsTwa0",
                "https://play-lh.googleusercontent.com/lLsB5AvY0Vk7HZLzoHdt5s8Q5D2BbmFBucCf6qJAiq9VbrFZybfx8GercDk_Ymy-uw",
                "https://play-lh.googleusercontent.com/v6dEV9A_vsAZHN5Zx8un7oxrpLjVAIm7unHkdiDRkxoHCzSalbr0WZQR-H7bINMxDsI",
                "https://play-lh.googleusercontent.com/2qIw7esEcqVcAXDFc6tCFa9tI7Fr6pfVK7VFFkjHcw27vfwT5XPc2LeiBNzRzfrHGFA",
                "https://play-lh.googleusercontent.com/JE0EWjZ-5xtI7oVt_-DV50T7VBttJvwIDKJPVUr3gCPxHwcAhpta0bl8YXbBFQkNe0M",
                "https://play-lh.googleusercontent.com/_BqcHdqO4NsYqe4pr0BkGLkpZY8OxkHeehcMhss1dPpsqtse28fhCN8OEyrJ3drLzbdO",
                "https://play-lh.googleusercontent.com/P7CPD45pBz12Sdu3COZqqONfwW1rxtJiYF-o42UFgov85UQaQesmxWHK9VkUdiIsTA",
                "https://play-lh.googleusercontent.com/ZkG7EBFDacH-PYChraz3f7SMqdf-jWLK_i2NhtjVGFR5R5Yc5bPmVJndyRNyFUn9RJU",
                "https://play-lh.googleusercontent.com/wLZ5nHEEzzVn5ppX2c-d3nKifw0zIuOcaUrgPr0T3NGd2KTxMLESTzmumJJvi84-Cw",
                "https://play-lh.googleusercontent.com/ydP0RnXA2h85P6apvoMIddcZFiRgDP7TCs1TisQNYo0os4BhBSdEVsV824YZPjnpfAaK",
                "https://play-lh.googleusercontent.com/FS-IIRqUNAlkcVYlXCn3887qt_yJlsPnnKUwMTQWxK7jk_PEoBiyuZ2-EpNXBARVJw",
                "https://play-lh.googleusercontent.com/19taRS7hLXsGby-0r_sCTMkEhs81GnRdAjtF6LHdCtc5ZQ9bBgocMRSsKpqDp--zVQ",
              ]}
            />
          </div>

          {/* Trailer */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Ludo King® Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src={"https://www.youtube.com/embed/Drk0gHwMr8I?ps=play&vq=large&rel=0&autohide=1&showinfo=0"}
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
              <dd className="font-medium">10148829</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">1,000,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Board</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Released</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">29.4.41 Version</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Teen Content Rating</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">$0.49 - $369.09 per item</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6  bg-slate-50 shadow-sm !break-words">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span>{" "}
                <span className="font-medium">GAMETION GLOBAL TECHNOLOGIES PTE. LIMITED</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline" href={"https://gametion.com/"} target="_blank">
                  https://gametion.com/
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline" href="support@gametion.com">
                  support@gametion.com
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
