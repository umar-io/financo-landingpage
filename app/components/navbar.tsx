"use client";

import Image from "next/image";
import { navlink } from "./data/navbar";
import Button from "./button";
import { useEffect } from "react";
import useSideBar from "../context/sidebar-context";
import { UserRound, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import UseIsMobile from "../context/ismobile-context";

export default function Navbar() {
  const { isToggled, sideBarToggler } = useSideBar();
  const { isMobile, setIsMobile } = UseIsMobile();

  // Unified useEffect to handle mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return (
    <header
      className={`
        h-[80px] w-full flex items-center bg-white sticky top-0 z-50
        ${isMobile ? "px-4 justify-between" : "px-8 justify-center"}
      `}
    >
      <Image
        src="/brandlogo.png"
        width={150}
        height={150}
        alt="Navbar brand"
        className="fit"
      />

      {/* Desktop Navigation */}
      <nav
        className={`${
          isMobile ? "hidden" : "flex"
        } w-1/2 justify-evenly items-center`}
      >
        <ul className="flex justify-evenly gap-8 w-full">
          {navlink.map((item) => (
            <li
              key={item.id}
              className="text-black text-[16px] flex items-center"
            >
              <Link href="#">
                <span className="flex w-fit">
                  {item.name} {item.icon}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Buttons */}
      <div
        className={`${
          isMobile ? "hidden" : "flex"
        } w-[40%] justify-end items-center gap-8`}
      >
        <Button
          text="Sign In"
          className="text-black bg-transparent border-0 w-fit px-3 py-2 rounded-2xl text-[16px] font-light"
          icon={<UserRound size={20} />}
        />
        <Button
          text="Get a Demo"
          className="text-white bg-black w-fit px-3 py-2 rounded-2xl text-[16px] font-light"
        />
      </div>

      {/* Mobile-only elements */}
      {isMobile && (
        <>
          {/* Mobile Menu Icon */}
          <div onClick={sideBarToggler} className="p-2 cursor-pointer">
            {isToggled ? (
              <X size={24} color="#182700" />
            ) : (
              <MenuIcon size={24} color="#182700" />
            )}
          </div>

          {/* Mobile Sidebar */}
          <nav
            className={`
              ${isToggled ? "translate-x-0" : "translate-x-full"}
              w-[80%] h-dvh bg-[#182700] fixed top-[80px] right-0 z-40 transition-transform duration-500 ease-in-out flex flex-col items-start pt-[100px] pl-6 gap-6
              `}
          >
            {/* Sidebar Content */}
            <ul className="flex flex-col gap-5">
              {navlink.map((item) => (
                <li
                  key={item.id}
                  className="text-white text-[18px] flex w-fit gap-2"
                >
                  <Link href="#">
                    <span className="w-fit flex">
                      {item.name} {item.icon}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 mt-8">
              <Button
                text="Sign In"
                className="text-black bg-white border-white border-[1px] w-fit px-3 py-2 rounded-2xl text-[16px] font-light"
                icon={<UserRound size={20} />}
              />
              <Button
                text="Get a Demo"
                className="text-white bg-black w-fit px-3 py-2 rounded-2xl text-[16px] font-light"
              />
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
