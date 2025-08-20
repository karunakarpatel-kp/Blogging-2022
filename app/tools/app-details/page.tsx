import React from "react";
import AppDetails from "Components/AppDetailsComps/AppDetails";
import AppDetailsaArticle from "Components/AppDetailsComps/AppDetailsaArticle";

const AppDetailsPage = () => {
  return (
    <>
      <div className="no-underline LoadingUI grid grid-cols-12  mt-20 mb-8 mx-2 border border-slate-100 shadow-md hover:ring-0 hover:ring-offset-0 hover:ring-cyan-300  ">
        <div className="border-0 border-slate-200 col-span-12  pl-3 py-3 text-center">
          <div className="Title px-3">
            <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold m-0 py-3 ">
              Get App Details from Google Play Store
            </h1>
            <p className="text-lg md:text-base  lg:text-xl leading-normal p-0 m-0 line-clamp-4  text-slate-600 font-normal my-3">
              By using this tool, you can pull out the raw data from the google play store by passing out app id in the
              url as a query string. You can check out the document on how to use this get App Details tool that i had
              published in the app details page.
            </p>
            <div className="flex space-x-1 md:space-x-2 border-0 border-red-900 flex-wrap  justify-center space-y-2 items-baseline mt-1 md:mt-3 lg:mt-5 ">
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
        <div className="component col-span-12 ">
          <AppDetails />
          <AppDetailsaArticle />
        </div>
      </div>
    </>
  );
};

export default AppDetailsPage;
