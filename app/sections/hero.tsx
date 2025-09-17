import { UserRound } from "lucide-react";
import Button from "../components/button";
import Image from "next/image";
import { companyBrand } from "../components/data/company-brands";

export default function Hero() {
  return (
    <section className="flex flex-col justify-start p-8 items-start w-full bg-[#EFEFEF]">
      <article className="flex w-full justify-start items-start py-8">
        <aside className="w-1/2 justify-start capitalize font-bold">
          <small>welcome to financo</small>
          <h2 className="text-[#182700] text-[60px] ">
            keep making <br />
            money for you
          </h2>
        </aside>
        <aside className="w-1/2 text-black flex flex-col gap-8 justify-center">
          <p className="text-black text-[27px] pr-[40px]">
            Financo online banking allows you to easily manage your funds and
            perfectly control your cash flow
          </p>
          <Button
            className="px-2 py-3 bg-[#182700] w-fit rounded-2xl text-white"
            text="Bank With Financo"
            icon={
              <UserRound size={20} className="p-3 rounded-[50%] text-white" />
            }
          />
        </aside>
      </article>
      <article className="flex justify-center w-full py-[40px] relative">
        <Image
          src="/visual.png"
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
          src="/card.png"
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
      <div className="flex justify-evenly items-center py-10">
        {companyBrand.map((brand) => (
          <img src={brand.imageSource} key={brand.id} alt={brand.alt} />
        ))}
      </div>
    </section>
  );
}
