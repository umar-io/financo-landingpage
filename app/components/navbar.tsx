"use client";

import Image from "next/image";
import { navlink } from "./data/navbar";
import Button from "./button";
import { useEffect, useState } from "react";
import useSideBar from "../context/sidebar-context";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import UseIsMobile from "../context/ismobile-context";

export default function Navbar() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
  });

  const { isMobile, setIsMobile } = UseIsMobile();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    setIsMobile(window.innerWidth <= 768);
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const { isToggled, sideBarToggler } = useSideBar();

  return (
    <header
      className={`h-[80px] w-full flex align-center bg-white sticky top-[0px] z-100  ${
        isMobile ? "px-2 justify-start" : "px-8 justify-evenly"
      }`}
    >
      <Image
        src="/brandlogo.png"
        width={150}
        height={150}
        alt="Navbar brand"
        loading="lazy"
        className={`fit ${isMobile ? "mobile-brand" : ""} `}
      />
      {isMobile ? (
        <>
          <div
            onClick={sideBarToggler}
            className="flex justify-end items-center w-full absolute right-0 top-1/2"
          >
            {isToggled ? "close" : <MenuIcon size={24} color="#182700" />}
          </div>

          <nav className="flex w-[80%] h-dvh bg-[#182700] absolute top-[80px] z-100 right-0">
            <ul className="flex flex-col justify-start items-start h-full text-left gap-5 pl-[20px] pt-[30px]">
              {navlink.map((item) => (
                <li key={item.id} className="text-white text-[18px]">
                  <Link href={""} className="flex">
                    {item.name} {item.icon}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex lg:flex-row flex-col justify-end items-center w-[40%] gap-8 relative">
              <Button
                text="Sign In"
                className={
                  "text-black bg-transparent border-[1px] w-fit px-3 py-2 rounded-2xl text-[16px] font-light absolute top-[75%]"
                }
                icon={<UserRound size={20} />}
              />
              <Button
                text="Get a Demo"
                className={
                  "text-white bg-black w-fit px-3 py-2 rounded-2xl text-[16px] font-light"
                }
              />
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="w-[50%] items-center ">
            <ul className="flex justify-evenly gap-8 items-center h-full">
              {navlink.map((item) => (
                <li key={item.id} className="text-black text-[16px]">
                  <Link href={""} className="flex">
                    {item.name} {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-end items-center w-[40%] gap-8">
            <Button
              text="Sign In"
              className={
                "text-black bg-transparent border-[1px] w-fit px-3 py-2 rounded-2xl text-[16px] font-light"
              }
              icon={<UserRound size={20} />}
            />
            <Button
              text="Get a Demo"
              className={
                "text-white bg-black w-fit px-3 py-2 rounded-2xl text-[16px] font-light"
              }
            />
          </div>
        </>
      )}
    </header>
  );
}
