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
            src="https://play-lh.googleusercontent.com/NUdqW9OF1bdiixhT_L0gNYm7p49tFwwC-T3ksNPtzbNVhsBXpdcIxjOOERRcvoYGuLQU"
          />
        </div>

        <div className="mx-auto px-4 mt-10 relative z-10 bg-slate-100 w-11/12 rounded-sm">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <Image
                src="https://play-lh.googleusercontent.com/wnNYBAH1m-XJMfduOHfEATQAhCwyKUYeHAD1Fi9-OjtxKyPKjFEmgWvbx-OX2dM65xjp"
                alt="icon"
                width={96}
                height={125}
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>

            <div className="col-span-7 pl-5">
              <h1 className="text-3xl font-semibold p-0 m-0">Zerodha Kite - Trade & Invest</h1>
              <p className="text-slate-600 text-lg py-3 m-0">Zerodha</p>
              <div className="flex gap-2 mt-2">
                <span className="border rounded-full px-5 py-2 text-base bg-white">⭐ 4.1</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">10,000,000+ installs</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">Finance</span>
              </div>
            </div>

            <div className="ml-auto pb-2 col-span-3 my-auto">
              <Link
                href="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en&gl=us"
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
      <main className="mx-auto py-3 grid lg:grid-cols-3 gap-8 w-11/12">
        {/* Left Column */}
        <section className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="px-6 py-6 pt-2 bg-slate-50 shadow-sm">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  "Zerodha Kite is our flagship trading app for the share market. We serve over 1.6 crore customers across our platform, with active traders placing 2+ crore orders every day.<br><br>Invest in everything<br><br>• All stocks on NSE and BSE stock exchanges - trade NSE stock and BSE stock securities.<br>• Equity shares, government bonds, T-bills, SDLs, and Sovereign Gold Bonds.<br>• Apply for IPO, buybacks, rights issues, and OFS - IPOs with instant application facility.<br>• Build wealth through systematic share trading and delivery-based investing.<br><br>Account and Finance Tools<br><br>• Open demat account integrated with CDSL depositories for share holding.<br>• Track and analyze your portfolio with detailed analytics and market trading insights.<br>• Share trading with instant pledge facility for additional margin - pledge shares for leverage.<br>• Financial reports and statements for all investments - track charges, profits, and performance.<br>• Gift shares, ETFs, and bonds to your loved ones from your demat account.<br><br>Why Kite?<br><br>• Zero brokerage delivery investments in stocks, bonds, ETFs, IPOs, government bonds, and gold bonds (statutory charges applicable).<br>• Advanced trading tools including option chain, charting, F&O analytics, and investment research.<br>• Comprehensive tax-ready reports to track your portfolio and file taxes easily with complete financial statements.<br>• Free access to Zerodha's ecosystem products like Sensibull, Tijori, Streak, and Quicko for trading and investing.<br>• No gimmicks, spam, or annoying push notifications.<br><br>Trade in Stock Market<br><br>• Trade futures and options (F&O) like Nifty, Sensex, FinNifty, BankNifty on NSE and BSE exchanges.<br>• Intraday trading with advanced charting tools and real-time market live data for stock trading.<br>• Currency derivatives trading: Futures on USDINR, EURINR, JPYINR and GBPINR pairs, with options primarily available on USDINR.<br>• Option Chain with real-time option prices, IV, OI and OI change for option buying and option trading.<br>• Margin Trading Facility (MTF) to buy equity shares with leverage up to 5x for margin trading.<br>• Commodities derivatives trading on MCX including crude oil, gold, silver and more commodity contracts.<br><br>All tools you need to trade and invest<br><br>• Basket orders to place multiple trades across securities with real-time margin requirements for stock trading.<br>• Alerts for price movements on stocks, Nifty 50, and other securities.<br>• GTT orders for long-term positions up to one year - for investors who buy and hold equity.<br>• Option trading with iceberg orders to reduce impact costs in derivatives and futures options trading.<br>• Create SIPs on stocks and ETFs for systematic investing - start investing with as little as ₹500.<br>• Access NSE and BSE markets across intraday, delivery, derivatives and FNO segments for market trading.<br>• Online trading with instant order execution across stock exchanges and segments.<br><br>Zerodha Universe products<br><br>• Sensibull for F&O option trading and derivatives analysis with advanced tools.<br>• Tijori for fundamental research and stock analysis.<br>• Streak for backtesting trading strategies.<br>• smallcase for thematic investing in stock baskets - invest in ideas, not just stocks.<br>• Quicko for tax filing - file taxes with integrated financial data.<br><br>Share market app with complete NSE stock, BSE stock and commodities access. Investors can invest, trade and manage their demat account. Whether you're into intraday trading, long-term investing, or futures options trading, Zerodha provides tools for stock market participation. Start your investment journey with Zerodha for online trading and investing.",
              }}
            />
          </div>

          {/* Screenshots */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Screenshots</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "https://play-lh.googleusercontent.com/DYl_jLOQ-0hARMxdYnYICs8nRvrdWeb-JsxRxUqqqxbAqhouuQPJ_VgID_LBiinzlg",
                "https://play-lh.googleusercontent.com/KOO5-WX-bOj89bQD1oX9XAJIE1i4FzaFwsyYEx2eAysHEjEbR2k9UgB-Dv8lT6HP0nk",
                "https://play-lh.googleusercontent.com/oL-2BQxv4XpLjT3aJNhhv8jgp78-glEzMPC_zpFh2z6eQ_mCr0dIB_4biCKMvAhYVg",
                "https://play-lh.googleusercontent.com/5Hm7H1tM-sBxKx4Q0hz-lw37XdsgT5BTRHdvzIIK8O27TDsdYD-e0jDsHM8rLU0kPDs",
                "https://play-lh.googleusercontent.com/8bnCVkGjfJ4S8XzxA2x9bTm7jTKjUSf_ZpQcU5h_eqHazTTyjyhD20uQJrti8jP5fw",
                "https://play-lh.googleusercontent.com/TGE4Avg5Hpgua-xLn93n7D6XNAXV8FMJpJ8Vx8ih6kEyRH2LlhY73glytO9RbZN13Mi8",
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
                src="https://www.youtube.com/embed/JWBWtlFiNo8?ps=play&vq=large&rel=0&autohide=1&showinfo=0"
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
          <div className="p-6 bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-center underline underline-offset-4">At a glance</h3>
            <dl className="grid grid-cols-2 gap-y-2 text-base">
              <dt className="text-slate-700">Rating</dt>
              <dd className="font-medium">4.1</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">10,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Finance</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Jun 27, 2019</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">3.9.0</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Everyone</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">No In-App Purchases</dd>
            </dl>
          </div>

          {/* Developer Info */}
          <div className="p-6 bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span> <span className="font-medium">Zerodha</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>{" "}
                <Link className="underline" href="https://zerodha.com" target="_blank">
                  https://zerodha.com
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>{" "}
                <Link className="underline" href="mailto:kite@zerodha.com">
                  kite@zerodha.com
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
