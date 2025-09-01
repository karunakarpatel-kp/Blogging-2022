import React from "react";
import sampleImage from "@Public/grammarly.png";
import Image from "next/image";
import Link from "next/link";
import { generateAppRoutes } from "./generateAppRoutes";
import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.APPS_PAGE.absoluteURL });

const AppsPage = () => {
  return (
    <div className="AppsPageContainer  grid grid-cols-12 mt-20 min-h-[60vh]">
      <div className="one col-span-1  hover:scale-105 animate duration-150">
        <Link href="/apps/UTS" title="Tools Page" className="no-underline LoadingUI shadow-sm hover:underline ">
          <div className="col-span-12  p-0 m-0 flex justify-center align-middle relative h-32">
            <Image
              src={
                "https://play-lh.googleusercontent.com/E-6l0O0rGrPRmLBI7yPvmhXg8pw_1NJ3gGBjrHs9dUDUGSaa0JKYiP-3Htbuw2B8Jp0"
              }
              alt="UTS-railway-app-image"
              fill
              className="p-0 m-0 border border-slate-200 rounded-2xl shadow-sm"
            />
          </div>
          <h1 className="paraGraph text-center py-1 text-base font-semibold">
            Download and Install UTS App From Indian Railways
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default AppsPage;
