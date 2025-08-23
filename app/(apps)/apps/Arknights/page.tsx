import Image from "next/image";
import Link from "next/link";
import SlickContr from "Components/SlickContainer/SlickContr";

export default function Page() {
  return (
    <div>
      <header className="mt-9">
        <div className="block w-full h-60 relative">
          <Image
            className="w-full h-52 bg-cover bg-center"
            alt="background-image"
            fill
            src="https://play-lh.googleusercontent.com/BDeIbOiJJ-bx422j6tKwl7fI1KGpehHAlNH5P_jSdSpI45s0vIKt7-g549LQ5j1YH9H-"
          />
        </div>

        <div className="mx-auto px-4 mt-10 relative z-10 bg-slate-100 w-11/12 rounded-sm">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <Image
                src="https://play-lh.googleusercontent.com/6Xe9DWiMC76daosOC80Im9gqe25Q9P55LxJIGPTLbcdFkMXOur4mk8jTVxoqOaiAvAG4"
                alt="icon"
                width={96}
                height={125}
                className="w-24 h-26 rounded-2xl ring-4 ring-white shadow-xl object-cover"
              />
            </div>

            <div className="col-span-7 pl-5">
              <h1 className="text-3xl font-semibold p-0 m-0">Grammarly-AI Writing Assistant</h1>
              <p className="text-slate-600 text-lg py-3 m-0">Grammarly, Inc.</p>
              <div className="flex gap-2 mt-2">
                <span className="border rounded-full px-5 py-2 text-base bg-white">⭐ 4.1</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">50,000,000+ installs</span>
                <span className="border rounded-full px-5 py-2 text-base bg-white">Productivity</span>
              </div>
            </div>

            <div className="ml-auto pb-2 col-span-3 my-auto">
              <Link
                href="https://play.google.com/store/apps/details?id=com.grammarly.android.keyboard&hl=en&gl=us"
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
                Edit and correct your grammar, spelling, punctuation, and more with your personal writing assistant,
                grammar checker, and editor. The Grammarly writing app and proofreader allows you to write clearly,
                confidently, and mistake-free in all your apps. Advanced features such as the AI-powered rewrite tool
                help you enhance your vocabulary, spell check words, and improve your writing - from emails to social
                media posts. Grammarly grammar checker and editor - how does it work? Simply download Grammarly and
                start typing in any app. Grammarly will check each word, your grammar, spelling, punctuation, and tone,
                and help you improve your communication skills.{" "}
              </p>

              <p>
                Whether you're typing emails on the go, editing an important LinkedIn post, sending a text message, or
                composing an essential tweet, the Grammarly writing assistant and grammar checker lets you spell check,
                correct, edit and perfect your message from your mobile device with confidence. Leveraging the power of
                generative AI, Grammarly allows you to easily rewrite your messages by composing new versions for you to
                choose from.
              </p>

              <p>
                Simply select the rewrite option that makes your writing more descriptive, confident, formal - and much
                more! Grammarly works with any Android keyboard, such as Gboard or SwiftKey, so you’ll never have to
                switch keyboards when you need help writing that important email, text, or social post. Edit, spell
                check, and correct your writing in real time – Grammar checker: Know your grammar is always
                mistake-free. – Spelling checker and proofreader: Easily avoid common typos. – Advanced punctuation
                correction: Take the guesswork out of punctuation.
              </p>

              <p>
                Writing assistant and proofreader: Improve your communication skills – Receive short, clear explanations
                for every correction. – Understand your mistakes and avoid them in the future. Improve your writing
                through GenAI - Select your text and click “improve it” to see GenAI-created new versions - Choose
                versions to shorten, add more description, sound more confident, and more! *** Uplevel Your
                Communication Skills With Premium *** Take your writing and communication skills from good to great with
                our advanced features and suggestions. Grammarly Premium helps you strike the right tone, gives you
                real-time feedback, and helps you broaden your vocabulary by suggesting impactful, vivid words to help
                your message, social media post, or email come to life. Premium features include: ✓ Vocabulary
                enhancement ✓ Clarity improvements ✓ Tone adjustments ✓ Word choice ✓ Formality level ✓ Fluency
                **************** We designed the Grammarly mobile app to be a writing assistant that works anywhere you
                write—no copying or pasting required, no proofreader needed. For any inquiries regarding the
                deactivation of the Grammarly Keyboard for Android, please refer to this article:
                https://support.grammarly.com/hc/en-us/articles/25038364027661--The-Grammarly-Keyboard-for-Android-will-be-discontinued
                Grammarly always keeps your writing safe and private. See our User Trust Guidelines for details:
                https://www.grammarly.com/trust By installing Grammarly’s mobile app, you agree to Grammarly’s Terms and
                Conditions (www.grammarly.com/terms) and acknowledge that you have read Grammarly’s Privacy Policy
                (https://www.grammarly.com/privacy-policy). California residents, please see the California Privacy
                Notice (https://www.grammarly.com/privacy-policy#for-california-users). With your consent, Grammarly may
                collect data about app usage and device type. Accessibility permission is used to process text written
                in apps and provide you with tailored writing assistance. We also use this permission to turn Grammarly
                on when you’re typing in apps.
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
                "https://play-lh.googleusercontent.com/asDNMni__JHwwldsWy2Axdg3ZcPKaPdJeTc-JqMIfHZBfOE6SWRJ88SejDSpFqLTWw",
                "https://play-lh.googleusercontent.com/-EuKvn-oXXWfSVQ-GF5QYypn5kl8FujAITRdtMRH9qn5u4PiFMRNFw1SkOG8L7VAnPHy",
                "https://play-lh.googleusercontent.com/dbrifXoTvBEGzvzeftecfoVAXq4r3F2OnnPiE_59X2VbxV9AJ8-cHjN76cXkP5Jeg3E",
                "https://play-lh.googleusercontent.com/XIVmhz8UxNScFUe-60X9tzwKNQBSwospAb5ZyoH03DVAvlxQdOSxtEE_dpdw01lhPA",
                "https://play-lh.googleusercontent.com/9vBqyx86lrw1sDX1cCGq-DT4mEMoKRVOKhB8glRd5aJR84ikIhHErszmzOGzcfZUMDc",
                "https://play-lh.googleusercontent.com/j-4feY5m14pkTlxInweQjXQwoM92syM7z_Ibz35SGJ1CS-yzpRmTL9mfsOd8sfvhIc8",
                "https://play-lh.googleusercontent.com/iq9d8HkzFYigJu-c8bCEEVK2oBRaGor1yzS4C5n2MJTpBTCTItIg3NRphJJqu1ygxqI",
                "https://play-lh.googleusercontent.com/SChQ5_QJXOahLZJTRK025wABPOYnRH4_ItV5DDKkXctRmvJtMJ6msA7bbGJhTEaJG44",
                "https://play-lh.googleusercontent.com/v6FztOUqLI7kUdJvO-xnanau-YkBDNWHIpvXooo0vc1zBfWdVrMAKm9f_CQF7IHICX8",
                "https://play-lh.googleusercontent.com/57ERh0alHvvtkeOgiezdS025gslOiSikYavbv2i0CKmkNkvE7gi5dpOvkQo1ZFhCzz0",
                "https://play-lh.googleusercontent.com/PeGfMvleu0SS0TwdC4LzvjgJng3RrUIv7buXUVT4pH8DE1C7aHx4DgT3ueyKKqvrfWo",
                "https://play-lh.googleusercontent.com/ZGtjl4_Vy5Ve7_LKDXO3RPUcO_Nz7l_gPbRP4obGidkpqLq3Adj6QVYrUfZO3N4LNoEL",
                "https://play-lh.googleusercontent.com/MfhFQRi1rLMU7XdCmKlgrqryv6-zs42HtR-11xqBuJD9Jr01O0I0C3u0_5vl4tes26g",
                "https://play-lh.googleusercontent.com/QUxzBCn53XJbhZxoj_GepfCgNegccbATbtMluBFhZicd92oXJR3_3aNRQKZ8PWw5SI0C",
                "https://play-lh.googleusercontent.com/EAl7QTDAn9KWz025emiyTqiz5qf5q1H_2BWpA8SaIMyzMwC2-ccEtFLpQb23vj6SXAQ",
                "https://play-lh.googleusercontent.com/J3H7oXzF9MWuvFOm_NMln8IM1sSDxFfnDekQ2xLl5nR3u9qm3LaNB8uD8m_cIXHTMwdz",
                "https://play-lh.googleusercontent.com/RWh1muWupfzP9okCHVaDcHBWk3DoquAKnyroJlzb9eMHiGOY3vOamsp8suaoqWPr-9A",
                "https://play-lh.googleusercontent.com/tOJfy7QSE85iB4NKhBCq-y55VLofvlwXLj9vaSpCdPf7x6XBZkYWm3pb3IuojadjPA",
              ]}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Trailer</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow border border-slate-200">
              <iframe className="w-full h-full" src="/" title="Trailer" frameBorder="0" allowFullScreen />
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="p-6 bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-center underline underline-offset-4">At a glance</h3>
            <dl className="grid grid-cols-2 gap-y-2 text-base">
              <dt className="text-slate-700">Rating</dt>
              <dd className="font-medium">4.1</dd>
              <dt className="text-slate-500">Installs</dt>
              <dd className="font-medium">50,000,000+</dd>
              <dt className="text-slate-500">Genre</dt>
              <dd className="font-medium">Productivity</dd>
              <dt className="text-slate-500">Released</dt>
              <dd className="font-medium">Dec 11, 2017</dd>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-medium">2.89.54151</dd>
              <dt className="text-slate-500">Content Rating</dt>
              <dd className="font-medium">Everyone</dd>
              <dt className="text-slate-500">IAP</dt>
              <dd className="font-medium">$29.99 - $139.99 per item</dd>
            </dl>
          </div>

          <div className="p-6 bg-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Developer</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-slate-500">Name:</span>
                <span className="font-medium">Grammarly, Inc.</span>
              </li>
              <li>
                <span className="text-slate-500">Website:</span>
                <Link className="underline" href="http://www.grammarly.com" target="_blank">
                  http://www.grammarly.com
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Email:</span>
                <Link className="underline" href="mailto:support@grammarly.com">
                  support@grammarly.com
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
