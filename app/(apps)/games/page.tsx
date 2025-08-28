import React from "react";
import sampleImage from "@Public/grammarly.png";
import Image from "next/image";
import Link from "next/link";

const GamesPage = () => {
  return (
    <div className="AppsPageContainer  grid grid-cols-3 px-5 md:grid-cols-5 lg:grid-cols-10 gap-5 mt-20">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return (
          <>
            <div className="one hover:scale-105 animate duration-150">
              <Link
                href="/apps/Arknights"
                title="Tools Page"
                className="no-underline LoadingUI shadow-sm hover:underline "
              >
                <div className="col-span-12  p-0 m-0 flex justify-center align-middle relative h-32">
                  <Image
                    src={sampleImage}
                    alt="sample-image"
                    fill
                    className="p-0 m-0 border border-slate-200 rounded-2xl shadow-sm"
                  />
                </div>
                <h1 className="paraGraph text-center py-1 text-base font-semibold">Grammarly AI Assistant</h1>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GamesPage;
