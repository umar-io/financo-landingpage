"use client";

import Image from "next/image";
import { navlink } from "./data/navbar";
import Button from "./button";
import { useEffect, useState } from "react";
import useSideBar from "../context/sidebar-context";
import { UserRound } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

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
      className={`h-[80px] w-full flex align-center bg-white ${
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
          <section className="flex w-full justify-end items-center">
            <div onClick={sideBarToggler}>{isToggled ? "close" : "open"}</div>
          </section>
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
