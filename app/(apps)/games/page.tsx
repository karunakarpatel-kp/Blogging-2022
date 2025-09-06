import React from "react";
import sampleImage from "@Public/grammarly.png";
import Image from "next/image";
import Link from "next/link";
import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.GAMES_PAGE.absoluteURL });

const GamesPage = () => {
  return (
    <div className="AppsPageContainer grid grid-cols-12 mt-20 min-h-[60vh] gap-2 md:gap-2  px-2">
      <div className="one col-span-4 md:col-span-1 lg:col-span-1  hover:scale-105 animate duration-150">
        <Link
          href="/games/Ludo-King"
          title="Ludo King Game"
          className="no-underline LoadingUI shadow-sm hover:underline "
        >
          <div className="col-span-12  p-0 m-0 flex justify-center align-middle relative h-32">
            <Image
              src={
                "https://play-lh.googleusercontent.com/AwrQb4bJk-34pw_ye7VhjDN0Azraz_pYYq9s5FbcapiF7qfxbYYvqWl-TjIF9xJIeA"
              }
              alt="Ludo King Poster"
              fill
              className="p-0 m-0 border border-slate-200 rounded-2xl shadow-sm"
            />
          </div>
          <h1 className="paraGraph text-center py-1 text-base font-semibold">Ludo King</h1>
        </Link>
      </div>

      <div className="one col-span-4 md:col-span-1 lg:col-span-1  hover:scale-105 animate duration-150">
        <Link
          href="/games/pizza-ready"
          title="Pizza Ready"
          className="no-underline LoadingUI shadow-sm hover:underline "
        >
          <div className="col-span-12  p-0 m-0 flex justify-center align-middle relative h-32">
            <Image
              src={
                "https://play-lh.googleusercontent.com/lE0mHL_R56HzrTkZcAaSYvd-s3C_a2i_n5RV4OFmdfpLoVz2-vGQRuZ1hZDRmq4fWg"
              }
              alt="Pizza Ready Poster"
              fill
              className="p-0 m-0 border border-slate-200 rounded-2xl shadow-sm"
            />
          </div>
          <h1 className="paraGraph text-center py-1 text-base font-semibold">Pizza Ready!</h1>
        </Link>
      </div>
    </div>
  );
};

export default GamesPage;
