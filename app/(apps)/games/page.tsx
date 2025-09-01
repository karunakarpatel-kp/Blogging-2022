import React from "react";
import sampleImage from "@Public/grammarly.png";
import Image from "next/image";
import Link from "next/link";
import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.GAMES_PAGE.absoluteURL });

const GamesPage = () => {
  return (
    <div className="AppsPageContainer  grid grid-cols-3 px-5 md:grid-cols-5 lg:grid-cols-10 gap-5 mt-20 min-h-[60vh]">
      <div className="one hover:scale-105 animate duration-150">
        <Link href="/games/Ludo-King" title="Tools Page" className="no-underline LoadingUI shadow-sm hover:underline ">
          <div className="col-span-12  p-0 m-0 flex justify-center align-middle relative h-32">
            <Image
              src={
                "https://play-lh.googleusercontent.com/AwrQb4bJk-34pw_ye7VhjDN0Azraz_pYYq9s5FbcapiF7qfxbYYvqWl-TjIF9xJIeA"
              }
              alt="sample-image"
              fill
              className="p-0 m-0 border border-slate-200 rounded-2xl shadow-sm"
            />
          </div>
          <h1 className="paraGraph text-center py-1 text-base font-semibold">Ludo King</h1>
        </Link>
      </div>
    </div>
  );
};

export default GamesPage;
