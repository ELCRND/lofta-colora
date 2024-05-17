import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <svg width="49.000000" height="50.000000" viewBox="0 0 49 50" fill="none">
        <defs />
        <path
          d="M0 0L0 26.01L9.92 13.87L9.92 11.17L12.12 11.17L21.26 0L0 0Z"
          fill="#8F364B"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M21.26 0L12.12 11.17L37.86 11.17L32.19 0L21.26 0Z"
          fill="#6DC1B4"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M37.86 11.17L37.86 14.63L49 7.31L49 0L32.19 0L37.86 11.17Z"
          fill="#EBDE75"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M37.86 33.53L49 40.44L49 7.31L37.86 14.63L37.86 33.53Z"
          fill="#B8D477"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M28.75 50L49 50L49 40.44L37.86 33.53L37.86 39.83L34.42 39.83L28.75 50Z"
          fill="#788F9D"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M19.43 39.83L23.48 50L28.75 50L34.42 39.83L19.43 39.83Z"
          fill="#D98235"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M9.92 39.83L9.92 35.77L0 29.26L0 50L23.48 50L19.43 39.83L9.92 39.83Z"
          fill="#826C51"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M9.92 13.87L0 26.01L0 29.26L9.92 35.77L9.92 13.87Z"
          fill="#0092C8"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          d="M12.12 11.17L9.92 11.17L9.92 39.83L37.86 39.83L37.86 11.17L12.12 11.17ZM13.07 10.73L37.13 10.73L31.91 0.44L21.47 0.44L13.07 10.73ZM20.68 0L49 0L49 50L0 50L0 0L20.68 0ZM0.44 0.44L20.31 0.44L11.91 10.73L9.47 10.73L9.47 13.71L0.44 24.75L0.44 0.44ZM0.44 26.17L0.44 29.02L9.47 34.94L9.47 15.13L0.44 26.17ZM9.47 36.01L0.44 30.09L0.44 49.55L22.82 49.55L19.13 40.28L9.47 40.28L9.47 36.01ZM20.09 40.28L23.79 49.55L28.48 49.55L33.65 40.28L20.09 40.28ZM34.68 40.28L29.51 49.55L48.55 49.55L48.55 40.69L38.31 34.34L38.31 40.28L34.68 40.28ZM38.31 33.28L48.55 39.64L48.55 8.14L38.31 14.87L38.31 33.28ZM38.31 13.8L48.55 7.07L48.55 0.44L32.92 0.44L38.31 11.07L38.31 13.8Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </svg>
      <Link href={"/"} className="text-base">
        LOFTA COLORA
      </Link>
    </div>
  );
};

export default Logo;
