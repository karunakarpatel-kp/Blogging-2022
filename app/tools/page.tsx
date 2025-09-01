import React from "react";
import sampleImage from "@Public/coding.jpg";
import Image from "next/image";
import Link from "next/link";
import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.TOOLS_PAGE.absoluteURL });

const ToolsPage = () => {
  return (
    <Link
      href={"tools/app-details"}
      title="Tools Page"
      className="no-underline LoadingUI grid grid-cols-12  mt-20 mb-8 mx-2 border-0 border-slate-100 hover:cursor-pointer hover:shadow-md hover:ring-1 hover:ring-offset-0 hover:ring-cyan-300 shadow-sm "
    >
      <div className="border-0 border-green-500 col-span-12 md:col-span-4 p-0 m-0 flex justify-center align-middle relative h-[220px] md:h-[auto] lg:h-[260px] ">
        <Image src={sampleImage} alt="sample-image" fill className="p-0 m-0 " />
      </div>
      <div className="rightSection border border-slate-200 col-span-12 md:col-span-8 pl-3 py-3">
        <div className="Title px-3">
          <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold m-0 py-3">
            Get App Details from Google Play Store
          </h1>
          <p className="text-lg md:text-base  lg:text-xl leading-normal p-0 m-0 line-clamp-4  text-slate-600 font-normal my-3">
            By using this tool, you can pull out the raw data from the google play store by passing out app id in the
            url as a query string. You can check out the document on how to use this get App Details tool that i had
            published in the app details page.
          </p>
          <div className="flex  space-x-1 md:space-x-2 border-0 border-red-900 flex-wrap  justify-start space-y-2 items-baseline mt-1 md:mt-3 lg:mt-5 ">
            <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base text-slate-700 font-normal ">
              Get App Details
            </div>
            <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base text-slate-700 font-normal ">
              Tools
            </div>
            <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base text-slate-700 font-normal ">
              Karunakar Patel Get App Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToolsPage;
