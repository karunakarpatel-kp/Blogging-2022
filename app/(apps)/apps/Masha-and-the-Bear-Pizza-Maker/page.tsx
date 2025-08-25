import SlickContr from "Components/SlickContainer/SlickContr";
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
            src="https://play-lh.googleusercontent.com/8Yc5lMdn3seDJXqohIvW2OHKCLn5u7M2Faj0IRsu6sFRffLkGuDEHCCZMByCUG--XQ"
          />
        </div>

        <div className="mx-auto px-4 mt-10 relative z-10 bg-slate-100 w-11/12 rounded-sm">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <Image
                src="https://play-lh.googleusercontent.com/44BNhZoMunudEhmpWE1tWf6zV4xD4aRDJX0ayIEk1vYR413G7rSMY1oMgupa66eu-gg"
                alt="icon"
                width={96}
                height={125}
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>

            <div className="col-span-7 pl-5">
              <h1 className="text-3xl font-semibold p-0 m-0">Masha and the Bear Pizza Maker</h1>
              <p className="text-slate-600 text-lg py-3 m-0">DEVGAME KIDS games</p>
              <div className="flex gap-2 mt-2">
                <span className="border rounded-full px-5 py-2 text-base bg-white">⭐ 4.6</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">100,000,000+ installs</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">Role Playing</span>
              </div>
            </div>

            <div className="ml-auto pb-2 col-span-3 my-auto">
              <Link
                href="https://play.google.com/store/apps/details?id=com.devgame.masha.and.bear.pizzeria.games&hl=en&gl=us"
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
              <p>
                The pizzeria is open! 🍕 Free games for girls and boys are here! Enjoy Masha and the Bear games and
                deliver great pizza to friends! Pizza simulator is waiting for all little chefs! 👧 Anybody ordered this
                good pizza great pizza? 😋 We deliver fresh, juicy pizza all around the world in 30 minutes, because
                these are free pizza games for kids, and they are opening their own pizzeria! All the characters of the
                series Masha and the Bear kids cooking games can't wait to try it! Join these 5 year old games and have
                fun with pizza maker free! What's inside these kids games for free with pizza simulator? - 9 hungry
                friends! 🐼🐻 - 16 pizza recipes in these pizza eating games! 🍕 - 35 ingredients! 🍅 Free games for
                girls and boys are here in our pizza shop! What do you need to do in cooking games for kids: 🐻 Take
                orders! There are Margaritas, Pepperonis, Mexican pizzas, as well as 10 other varieties in our menu! We
                even have one with strawberries! You will love these fun and easy pizza making games! Become a real chef
                with us! 🍕 Make pizza in food games for kids! ﻿👩‍🍳 We'll flatten the dough, add some pepperonis,
                tomatoes, basil, mushrooms, olives, onions and other ingredients! Some pepper, a bit of salt - and there
                we go - good pizza great pizza is ready to meet the oven! The real pizzaiolo never forgets to grate some
                cheese on top to have a delicious brown crust! So many ingredients, recipes and combinations. These are
                cooking games for kids - where else will you see this? 👧 Deliver orders in these free pizza games for
                kids! Enjoy pizza maker free and deliver orders! We'll have to make it snappy to leave our every
                customer full and happy! Pop into the pizza-car and off we go - delivering our culinary masterpiece
                while it's hot! Don't worry about obstacles on the way! You will handle anything without dropping an
                olive in pizza making games! At the end of the journey, what's left is to cut the pizza and say Bon
                appetit!! Make pizza with Masha and the Bear Cooking Game! Free games for girls and boys are here! The
                pizzeria is open! Masha's hands are full with orders so she won't make it without you! In “Masha and the
                Bear Pizza Maker” you will need to put an apron on, get a rolling pin and make pizza on Earth in pizza
                eating games! Become a real chef with us in food games for kids! 😋﻿👩‍🍳 Your subscription will
                automatically renew at the end of the subscription period. The free trial will automatically convert to
                a paid subscription at the end of the trial period unless you turn off the auto-renew at least 24 hours
                before the end of the period. Your account will be charged for the applicable subscription fee within 24
                hours of the end of the previous subscription period or trial period. You may turn off auto-renewal at
                any time from your Google account settings. The current version of Terms of Use is available here:
                https://devgamekids.com/terms-of-use.html We need your opinion! ✉️ Contact us: support@devgameou.com 🔔
                Stay tuned: https://www.facebook.com/DEVGAME.Kids 💻 Our website: https://devgameou.com/ You have to
                make pizza to become a professional pizzaiolo with Masha and the Bear cooking game 🐻! Have fun in kids
                games for free, make friends and enjoy your adventure in 5 year old games with pizza simulator! Kids
                cooking games are here!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <SlickContr
              autoPlay={true}
              headingTitle="Screenshots"
              infinite={true}
              rows={1}
              slidesToShow={3}
              slickObj={[
                "https://play-lh.googleusercontent.com/R_mwPn9TgN0IFwuP21sIe-n9mExOAXLGZn9QmohUyoZlE_ZpUQDnu_EWhX5cp8WYvQ",
                "https://play-lh.googleusercontent.com/HOB9nPxTPHAcGzDciMjaG0bER6AvX07u80x2T2d8rMoHHaslCHitejVYeSC0YEDnR6A",
                "https://play-lh.googleusercontent.com/pe1E3gGSn6uRwdnFVBbPlSTgtq54SWj2t7PrsLxE2jErzL3y9jaUD0AoMyhfXiCCDC8j",
                "https://play-lh.googleusercontent.com/EGMSpufmdymuQ8klV48T5H7_B3FWohLS7ZCQXURKOjnJUGqpvyVBqjxqP9I_mMfYTA",
                "https://play-lh.googleusercontent.com/-b8GgfjEssNRuPvAWH_S6gk80Axswg9cFRoWGJij7EfbdHWZ8JUzA7VdleKOAob4jyU",
                "https://play-lh.googleusercontent.com/iPf3J70IVu6SDA5EV9GzApb0yVVN4be3h06CH2EYldR46mZOrBuDS8tMCX9DPLBYtEsr",
                "https://play-lh.googleusercontent.com/0nlgN6R7br468zE1EsAvxbUNd7KaIo--1zAaE6cq-o4cD5RXn0402E5MFdIL5klp1V8",
                "https://play-lh.googleusercontent.com/a1A7T7T4_fWUNnC23GJqfRTVhpnX43r9piZo9JVmvrNpRSOYobqBZ19Km6E4aTISMfMR",
                "https://play-lh.googleusercontent.com/Tb2JDhKtQicq5lrySN1HYvd3M_v1EigNlg3Twnk-bmFs_xu97qnkei1Od6iQrLjphQ",
                "https://play-lh.googleusercontent.com/YLisbDpa4DCs_IFHcrkludP1cCY8Ja9WBhlsc0cqL8dixfIa9bnVrshsTEWvJysE_A",
                "https://play-lh.googleusercontent.com/Ib89-Oo6S3h5pUgkhsa8J-cEaPbTlzchnnWsY02rrHVr3412PGY8hqzhEQ7Y3hDltps",
                "https://play-lh.googleusercontent.com/69u55sd_NdTtr-51qzfFsFD2WBpMqLz2bupLioxAXxJoDWAy1WNWj8dtXh6kidqQl0-t",
                "https://play-lh.googleusercontent.com/Ge5dkMTTZc2lSF-5NX6XKUEY8I1BAK-53CHX5Bt02pHlxAs7Iifm8ugMO6cLFArbE2_B",
                "https://play-lh.googleusercontent.com/qTw89xhYCL1mJ3LxFdJ4EzU9kuGd2FVd8dSNVQtdxVK-5wIXd0V8rFliavyX4ZfC0Q",
                "https://play-lh.googleusercontent.com/bh6a2pCczkn-kyggZyc9MfVZobsiEvMBGM5oY3BopYnLQiWsmbEQdBThi2SRYwY6B5g",
                "https://play-lh.googleusercontent.com/UHhrQ8m57Xh9l-jJKgBQ4yTZnWD-XFbA-JndYgKKTgEeUGtzjBIWUdFdGp2JMQJEHNE",
                "https://play-lh.googleusercontent.com/Lny84to32BfCfC0CWZICvIod5NdFsMMlrzSIxL3hBEFb5RsOk_-aim7Q77WUfYwk7wI",
                "https://play-lh.googleusercontent.com/glrfFl5e2bC8JHmqMx2QthLAooWts-jFFSbC_9YB5437QPMexhKdX4cAZjCyVHrSmnNa",
                "https://play-lh.googleusercontent.com/WhMF1OHAd4nmEU7MXGVoLcTgKeQo8ywiT30z93UCvCxABL-2x-nUFwbZjtdFL9UItss",
                "https://play-lh.googleusercontent.com/XfQ85Aymhaq4E7ehNA1hg8fqPwNgkXG7467LfgWpzK2Lq5L9qr9QV58ID9gQ_KoSrnul",
                "https://play-lh.googleusercontent.com/FdrPJocxz5LFRP_aV_QRSETf5tEayDnDKpqxPVuueJkTRD43i5vcf4M-WR0lCYP23hEU",
                "https://play-lh.googleusercontent.com/28cEchegZhzOovejZfP-skI-_ulqmo-hChB42gc0S3GC5v-XDzonnVzf2SMnfqlueA",
                "https://play-lh.googleusercontent.com/0ucAKZmqzYgz-0Dd5UGVFeSuwRJzjv8-8NDGEODbZrwY3Fra2kgLdvX93prVFYO2dBg",
                "https://play-lh.googleusercontent.com/CM2PbufOZzKKaj7ZY2PiU2u7bT29Gd6fFkEOUDZj4kFvLFHoX2Rr4tFSSVJtqZ9nYprG",
              ]}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/MRWP8T4iZN4?ps=play&vq=large&rel=0&autohide=1&showinfo=0"
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
              <dd className="font-medium">4.6</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">100,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Role Playing</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Nov 15, 2020</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">VARY</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Everyone</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">$0.49 - $39.99 per item</dd>
            </dl>
          </div>

          <div className="p-6 bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span>
                <span className="font-medium">DEVGAME KIDS games</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>
                <Link className="underline" href="https://devgameou.com/games/masha_and_bear_pizzeria/" target="_blank">
                  https://devgameou.com/games/masha_and_bear_pizzeria/
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>
                <Link className="underline" href="mailto:support@devgameou.com">
                  support@devgameou.com
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
