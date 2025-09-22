"use client";

import Card from "../components/card";
import UseIsMobile from "../context/ismobile-context";
import Image from "next/image";
import { CardData } from "../components/data/card-data";
import { useEffect } from "react";
import Button from "../components/button";
import { ArrowRight } from "lucide-react";

export default function Basics() {
  const { isMobile } = UseIsMobile();

  return (
    <section
      className={`w-full flex ${
        isMobile ? "flex-col" : "flex-row"
      } gap-4 sm:gap-8 bg-[#fff] px-8 py-[150px]`}
    >
      <aside
        className={`flex flex-col text-black gap-4 ${
          isMobile ? "w-full" : "w-1/2"
        } md:w-full`}
      >
        <h3
          className={`font-light ${
            isMobile ? "text-[40px] text-left" : "text-[60px]"
          }`}
        >
          Beyond The {isMobile ? null : <br />}
          Business{" "}
          <span className="relative">
            Banking
            <Image
              width={200}
              height={160}
              src="/underliner.png"
              alt="underliner"
              className="absolute left-[5%] -bottom-[10px] -translate-x-[5%] translate-y-[a0px]"
            />
          </span>{" "}
          {isMobile ? null : <br />} Basics
        </h3>
        <p>
          Manage money, reach goals. Simple tools, expert{" "}
          {isMobile ? null : <br />} guidance. Get started today!
        </p>

        <Button
          text="Get Started"
          className="text-white bg-black w-fit px-3 py-2 rounded-3xl text-[16px] font-light"
          iconClassName="p-2 flex justify-center items-center bg-[#fff] rounded-[50%] w-fit text-[#182700]"
          icon={<ArrowRight size={20} />}
        />
      </aside>
      <aside
        className={`flex justify-center ${
          isMobile ? "w-full" : "w-1/2"
        } items-center border-black border py-3  px-2 rounded-2xl sm:w-full`}
      >
        <article
          id="cardHolder"
          className="grid grid-cols-2 grid-rows-2 gap-2 relative"
        >
          {CardData.map((cardItem) => (
            <Card
              key={cardItem.id}
              id={cardItem.id}
              title={cardItem.title}
              image={cardItem.image}
            />
          ))}
          <Image
            src="/Bank.svg"
            width={50}
            height={50}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-[50%] bg-[#fff] p-2 rounded-[50%] z-10"
          />
        </article>
      </aside>
    </section>
  );
}
