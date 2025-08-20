import React from "react";

const AppDetails = () => {
  return (
    <>
      <section className="w-5/6 m-auto">
        <div className="w-full mt-5 grid grid-cols-10 gap-3">
          <div className="col-span-7 ">
            <label className="text-lg md:text-xl lg:text-xl pb-3 font-medium text-brandColor">Enter App Id</label>
            <input
              name="appId"
              type="text"
              placeholder="Enter App Id"
              className=" w-full p-3 bg-slate-100 text-base md:text-lg lg:text-lg mt-2"
            />
          </div>

          <div className="col-span-3 start-3 relative">
            <button
              // onClick={onSubmitClickHandler}
              type="submit"
              className=" bg-brandColor text-white px-5 py-3 text-base md:text-lg lg:text-lg rounded-sm hover:bg-slate-200 hover:text-brandColor w-full absolute bottom-0"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDetails;
