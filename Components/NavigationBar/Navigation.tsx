"use client";
import React, { useEffect, useState } from "react";
import Logo from "public/Logo.svg";
import Image from "next/image";
import { FaAppStore, FaBlog, FaCar, FaCarSide, FaFantasyFlightGames, FaHome, FaToolbox, FaTools } from "react-icons/fa";
import { GiHamburgerMenu, GiToolbox } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import KarunakarPatelImage from "@Public/karunakarImage.svg";
import Link from "next/link";

interface NavigationProps {
  darkMode: boolean | null;
}

const Navigation = (props: NavigationProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [homePage, setHomePage] = useState<boolean>(false);

  const navigate = useRouter();
  const pathName = usePathname();

  const onOpenClickHandler = () => {
    setOpenMobileMenu(true);
  };

  const onCloseClickHandler = () => {
    setOpenMobileMenu(false);
  };

  const onLogoClickHandler = () => {
    navigate.push("/");
  };

  useEffect(() => {
    if (pathName === "/") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  }, [pathName, homePage]);

  return (
    <>
      <div
        className={
          !openMobileMenu
            ? "h-16  bg-brandColor border-b border-b-gray-500  md:ml-0 pl-2 grid grid-cols-12 fixed w-full z-50"
            : ""
        }
      >
        {/* Desktop */}
        <div className="hidden md:invisible md:flex col-span-1 border-0 border-white self-stretch justify-center items-center "></div>
        <div
          className="col-span-9 md:col-span-4 border-0 border-green-800 mt-1 ml-0 cursor-pointer"
          onClick={onLogoClickHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="48" viewBox="0 0 287 83">
            <g id="Group_39" data-name="Group 39" transform="translate(-370 -18)">
              <text
                id="Karunakar_"
                data-name="Karunakar "
                transform="translate(459 50)"
                fill="#ffca3e"
                font-size="35"
                font-family="Georgia-Bold, Georgia"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  Karunakar
                </tspan>
              </text>
              <text
                id="Patel_"
                data-name="Patel "
                transform="translate(459 93)"
                fill="#ffca3e"
                font-size="35"
                font-family="Georgia-Bold, Georgia"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  Patel
                </tspan>
              </text>
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="74"
                height="67"
                rx="10"
                transform="translate(370 27)"
                fill="#ffca3e"
              />
              <g id="Group_5" data-name="Group 5" transform="translate(387 45)">
                <line
                  id="Line_3"
                  data-name="Line 3"
                  x1="6.457"
                  y2="31.734"
                  transform="translate(18.605)"
                  fill="none"
                  stroke={props.darkMode ? "rgb(51,65,85)" : "#284a98"}
                  stroke-width="5"
                />
                <g id="Group_4" data-name="Group 4" transform="translate(0 8.071)">
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M16,26.488,28.562,16.244,16,6"
                    transform="translate(13.311 -6)"
                    fill="none"
                    // stroke="#284a98"
                    stroke={props.darkMode ? "rgb(51,65,85)" : "#284a98"}
                    stroke-linejoin="round"
                    stroke-width="5"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M14.562,6,2,16.244,14.562,26.488"
                    transform="translate(-2 -6)"
                    fill="none"
                    // stroke="#284a98"
                    stroke={props.darkMode ? "rgb(51,65,85)" : "#284a98"}
                    stroke-linejoin="round"
                    stroke-width="5"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="hidden md:block col-span-6 border-0 border-purple-400 m-0 p-0 ">
          <ul className="list-none flex space-x-2 text-white justify-end mt-2">
            <li>
              <Link
                href="/"
                className={`${
                  pathName === "/" ? "text-[#ffca3c]" : "text-white"
                } text-base shadow-md border border-slate-500 px-5 py-1 no-underline font-medium rounded-sm hover:underline hover:underline-offset-4`}
              >
                {/* <FaHome size={27} /> */}
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className="text-white text-base shadow-md border border-slate-500 px-5 py-1 no-underline font-medium rounded-sm hover:underline hover:underline-offset-4"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className={`${
                  pathName === "/Blog" || pathName!.includes("/Blog") ? "text-[#ffca3c] " : "text-white"
                } text-base shadow-md border border-slate-500 px-5 py-1 no-underline font-medium rounded-sm hover:underline hover:underline-offset-4`}
              >
                {/* <FaBlog size={25} className="pt-0" /> */}
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/apps"
                className="text-white text-base shadow-md border border-slate-500 px-5 py-1 no-underline font-medium rounded-sm hover:underline hover:underline-offset-4"
              >
                Apps
              </Link>
            </li>
            <li>
              <Link
                href="/games"
                className="text-white text-base shadow-md border border-slate-500 px-5 py-1 no-underline font-medium rounded-sm hover:underline hover:underline-offset-4"
              >
                Games
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden border-0 col-span-3 flex justify-center items-center  cursor-pointer">
          <GiHamburgerMenu size={27} fill="white" onClick={onOpenClickHandler} />
        </div>

        <div className="hidden md:invisible md:flex col-span-1 border border-white self-stretch justify-center items-center "></div>
      </div>

      {/* Mobile */}
      <div
        className={
          openMobileMenu
            ? "mobile block md:block bg-brandColor w-full h-svh z-50 p-0 m-0 fixed top-0 right-0 ease-in-out"
            : "hidden"
        }
      >
        <div
          className="mt-1 ml-0 cursor-pointer p-1 pb-4 mb-4 border-b border-b-slate-700"
          onClick={onLogoClickHandler}
          onClickCapture={onCloseClickHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="48" viewBox="0 0 287 83">
            <g id="Group_39" data-name="Group 39" transform="translate(-370 -18)">
              <text
                id="Karunakar_"
                data-name="Karunakar "
                transform="translate(459 50)"
                fill="#ffca3e"
                font-size="35"
                font-family="Georgia-Bold, Georgia"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  Karunakar
                </tspan>
              </text>
              <text
                id="Patel_"
                data-name="Patel "
                transform="translate(459 93)"
                fill="#ffca3e"
                font-size="35"
                font-family="Georgia-Bold, Georgia"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  Patel
                </tspan>
              </text>
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="74"
                height="67"
                rx="10"
                transform="translate(370 27)"
                fill="#ffca3e"
              />
              <g id="Group_5" data-name="Group 5" transform="translate(387 45)">
                <line
                  id="Line_3"
                  data-name="Line 3"
                  x1="6.457"
                  y2="31.734"
                  transform="translate(18.605)"
                  fill="none"
                  stroke="#284a98"
                  stroke-width="5"
                />
                <g id="Group_4" data-name="Group 4" transform="translate(0 8.071)">
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M16,26.488,28.562,16.244,16,6"
                    transform="translate(13.311 -6)"
                    fill="none"
                    stroke="#284a98"
                    stroke-linejoin="round"
                    stroke-width="5"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M14.562,6,2,16.244,14.562,26.488"
                    transform="translate(-2 -6)"
                    fill="none"
                    stroke="#284a98"
                    stroke-linejoin="round"
                    stroke-width="5"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className={openMobileMenu ? "absolute right-5 top-5 cursor-pointer border" : ""}>
          <IoMdClose size={26} fill="white" onClick={onCloseClickHandler} />
        </div>
        <ul className="list-none  text-white p-0 m-0">
          <li className="p-3 m-0">
            <Link
              href="/"
              className={`${
                pathName === "/" ? "text-[#ffca3c]" : "text-white"
              } border-b border-dotted no-underline pb-3 flex gap-3 ml-2 mr-2 `}
              onClick={onCloseClickHandler}
            >
              <span>
                <FaHome size={27} />
              </span>
              Home
            </Link>
          </li>
          <li className="p-3 m-0 -mt-0">
            <Link
              href="/Blog"
              className={`${
                pathName === "/cars" || pathName!.includes("/Blog") ? "text-[#ffca3c]" : "text-white"
              } border-b border-dotted no-underline pb-3 m-0 flex gap-3 ml-2 mr-2 `}
              onClick={onCloseClickHandler}
            >
              <span>
                <FaBlog size={25} className="pt-0" />
              </span>
              Blog
            </Link>
          </li>

          <li className="p-3 m-0 -mt-0">
            <Link
              href="/tools"
              className={`${
                pathName === "/cars" || pathName!.includes("/Blog") ? "text-[#ffca3c]" : "text-white"
              } border-b border-dotted no-underline pb-3 m-0 flex gap-3 ml-2 mr-2 `}
              onClick={onCloseClickHandler}
            >
              <span>
                <FaTools size={25} className="pt-0" />
              </span>
              Tools
            </Link>
          </li>

          <li className="p-3 m-0 -mt-0">
            <Link
              href="/apps"
              className={`${
                pathName === "/cars" || pathName!.includes("/Blog") ? "text-[#ffca3c]" : "text-white"
              } border-b border-dotted no-underline pb-3 m-0 flex gap-3 ml-2 mr-2 `}
              onClick={onCloseClickHandler}
            >
              <span>
                <FaAppStore size={25} className="pt-0" />
              </span>
              Apps
            </Link>
          </li>

          <li className="p-3 m-0 -mt-0">
            <Link
              href="/games"
              className={`${
                pathName === "/cars" || pathName!.includes("/Blog") ? "text-[#ffca3c]" : "text-white"
              } border-b border-dotted no-underline pb-3 m-0 flex gap-3 ml-2 mr-2 `}
              onClick={onCloseClickHandler}
            >
              <span>
                <FaFantasyFlightGames size={25} className="pt-0" />
              </span>
              Games
            </Link>
          </li>
        </ul>
      </div>

      <div className={`${homePage ? "bg-brandColor border-0 border-red-900 px-10" : "hidden"}`}>
        <div className="border-0 border-white text-white   max-w-7xl m-auto pt-14">
          <div className="kpImage border-0 border-sky-800 flex justify-center">
            <Image src={KarunakarPatelImage} alt="Karunakar Patel Image" className="ring-2  rounded-full" />
          </div>
          <div className="text-white border-0 text-center pb-6">
            <h1 className="text-white font-bold text-3xl md:text-4xl">Hi, Karunakar Patel</h1>
            <p className="text-white font-semibold text-xl">
              A front-end engineer focused on building top-notch web apps and helping developers improve their skills
            </p>
            <p className="text-white font-semibold text-xl">
              Find more about my{" "}
              <Link href="/" className="text-[#ffca3c] underline underline-offset-4">
                work{" "}
              </Link>
              and{" "}
              <Link href="/" className="text-[#ffca3c] underline underline-offset-4">
                article
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
