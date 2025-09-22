"use client";

import Button from "../components/button";
import Image from "next/image";
import { companyBrand } from "../components/data/company-brands";
import { ArrowRight } from "lucide-react";
import UseIsMobile from "../context/ismobile-context";
import { useEffect, useRef } from "react";

export default function Hero() {
  const { isMobile } = UseIsMobile();
  const brandContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = brandContainer.current;
    if (!container) return;

    const scrollSpeed = 0.5; // Adjust for a slower or faster scroll
    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        // Scroll right
        container.scrollLeft += scrollSpeed;

        // If at the end, jump back to the beginning to create a loop
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, 20); // Interval in milliseconds
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    // Start scrolling when the component mounts
    startScrolling();

    // Clean up interval on unmount
    return () => stopScrolling();
  }, []);

  return (
    <section className="flex flex-col justify-start p-8 items-start w-full bg-[#efefef]">
      <article className="lg:flex-row flex w-full justify-start items-start py-8 flex-col lg:gap-0.5 gap-8">
        <aside className="lg:w-1/2 w-full lg:justify-start justify-center capitalize font-bold">
          <small className="lg:text-[12px] text-[#fff]">
            welcome to financo
          </small>
          <h2 className="text-[#182700] lg:text-[60px] text-[35px] lg:text-left">
            keep{" "}
            <span className="relative">
              making
              <Image
                src="/underliner.png"
                alt="underliner"
                width={170}
                height={160}
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2"
              />
            </span>{" "}
            <br />
            money for you
          </h2>
        </aside>
        <aside className="lg:w-1/2 w-full text-black flex flex-col lg:gap-8 gap-[40px] justify-center">
          <p className="text-black lg:text-[27px] text-[16px] lg:pr-[40px]">
            Financo online banking allows you to easily manage your funds and
            perfectly control your cash flow
          </p>
          <Button
            className="pr-3 pl-5 py-2 bg-[#182700] w-fit rounded-3xl text-white gap-1.5"
            text="Bank With Financo"
            iconClassName="p-2 flex justify-center items-center bg-[#fff] rounded-[50%] w-fit text-[#182700]"
            icon={<ArrowRight size={20} />}
          />
        </aside>
      </article>
      <article className="lg:flex hidden justify-center w-full pt-[40px] relative">
        <Image
          src="/Visual.png"
          alt="visualizer"
          width={1000}
          height={1000}
          className="z-10"
        />
        <Image
          src="/card_three.png"
          width={200}
          height={200}
          alt="card_one"
          className="absolute right-[7%] top-[14%]"
        />
        <Image
          src="/Card.png"
          width={200}
          height={200}
          alt="card_two"
          className="absolute left-[8%] z-1 top-[20%] "
        />
        <Image
          src="/Cards.png"
          width={400}
          height={300}
          alt="card_three"
          className="absolute bottom-[0%] left-[7%] z-20 "
        />
      </article>
      <div
        ref={brandContainer}
        className="flex scrollbar-0 overflow-x-scroll overflow-hidden justify-evenly items-center py-10 w-full lg:gap-2 gap-4"
      >
        {companyBrand.map((brand) => (
          <Image
            src={brand.imageSource}
            key={brand.id}
            alt={brand.alt}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
