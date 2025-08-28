import React from "react";
import sampleImage from "@Public/grammarly.png";
import Image from "next/image";
import Link from "next/link";

const AppsPage = () => {
  return (
    <div className="AppsPageContainer  grid grid-cols-12 mt-20">
      <div className="one col-span-1  hover:scale-105 animate duration-150">
        <Link href="/apps/Arknights" title="Tools Page" className="no-underline LoadingUI shadow-sm hover:underline ">
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
    </div>
  );
};

export default AppsPage;
