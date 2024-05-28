import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  onChange: VoidFunction;
};
const AlternativeImage = ({ onChange, src, alt, width }: Props) => {
  return (
    <label className="w-[100px] relative flex justify-center items-center cursor-pointer border border-transparent rounded-md has-[input:focus]:border-white has-[:checked]:border-amber-200">
      <input
        onChange={onChange}
        type="radio"
        name="size"
        className="absolute -z-10"
      />
      <Image src={src} alt={alt} width={width} height={10} />
    </label>
  );
};

export default AlternativeImage;
