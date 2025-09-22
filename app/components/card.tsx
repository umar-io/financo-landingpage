import React from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ICard {
  id: number;
  title: string;
  image: StaticImport;
}

const Card: React.FC<ICard> = ({ title, image }) => {
  return (
    <article className="flex flex-col justify-center items-center bg-[#f8f8f8] rounded-2xl gap-2 px-2 py-[30px]">
      <Image src={image} width={36} height={36} alt="..." />
      <p className="text-black font-thin text-bold text-center"> {title}</p>
    </article>
  );
};

export default Card;
