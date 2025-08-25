"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

interface SlickContainerProps {
  headingTitle: string;
  autoPlay: boolean;
  infinite: boolean;
  slidesToShow: number;
  rows: number;
  slickObj: any[];
}

const SlickContr = (props: SlickContainerProps) => {
  const { headingTitle, autoPlay, infinite, slidesToShow, rows, slickObj } = props;
  return (
    <div className="py-0 px-2 mt-6 ">
      <h2 className=" text-2xl font-semibold mb-0 pb-0">{headingTitle}</h2>
      <Slider
        autoplay={autoPlay}
        infinite={infinite}
        slidesToShow={slidesToShow}
        arrows={true}
        rows={rows}
        className=""
      >
        {slickObj &&
          slickObj.map((singleItem) => {
            return (
              <>
                <div className="px-2 relative">
                  <Image
                    src={singleItem}
                    alt={`${headingTitle} game screenshot`}
                    width={600}
                    height={550}
                    className="w-full object-cover rounded-xl shadow"
                  />
                </div>
              </>
            );
          })}
      </Slider>
    </div>
  );
};

export default SlickContr;

{
  /* <div className="px-2">
          <Image
            src={
              "https://play-lh.googleusercontent.com/ohF1ht6lXKY4ybjXlMrt2IjCdKBpgl1NUA6ftvNemA2iGxT0SP8HEZDseeYC5Q420Q"
            }
            alt="screenshot"
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-xl shadow"
          />
        </div> */
}
