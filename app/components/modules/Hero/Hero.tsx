import Link from "next/link";
import Logo from "../../elements/Hero/Logo/Logo";

const Hero = () => {
  return (
    <section className="h-screen grid bg-[url('/hero/hero_bg.jpeg')] bg-cover text-white text-center">
      <div className="flex flex-col items-center absolute top-[170px] left-1/2 -translate-x-1/2">
        <Logo />
        <h1 className="mt-6 text-4xl font-normal">CHROMA ART</h1>
        <h2 className="text-2xl font-normal">Ваш проводник в мир дизайна</h2>
      </div>
      <div className="_container self-end mb-9 flex justify-between">
        <p className="max-w-[520px] text-2xl text-start before:block before:w-[122px] before:h-[3px] before:mb-4 before:rounded before:bg-white">
          Способ самовыражения и индивидуального подхода к оформлению стен
          современного интерьера
        </p>
        <div className="flex gap-9 self-end">
          <Link href={"/"}>
            <svg
              width="21.000000"
              height="20.000000"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.05 0C4.5 0 0 4.5 0 10.05C0 15.09 3.71 19.25 8.54 19.97L8.54 12.71L6.06 12.71L6.06 10.07L8.54 10.07L8.54 8.31C8.54 5.4 9.96 4.12 12.38 4.12C13.54 4.12 14.15 4.21 14.44 4.25L14.44 6.55L12.79 6.55C11.77 6.55 11.41 7.53 11.41 8.62L11.41 10.07L14.42 10.07L14.01 12.71L11.41 12.71L11.41 20C16.31 19.33 20.1 15.14 20.1 10.05C20.1 4.5 15.6 0 10.05 0Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
            >
              <defs />
              <path
                d="M16.18 2.92C14.29 1.04 11.78 0 9.11 0C3.6 0 -0.88 4.47 -0.88 9.98C-0.88 11.74 -0.42 13.46 0.45 14.97L-0.9 20L4.33 18.76C5.79 19.55 7.43 19.97 9.1 19.97L9.11 19.97C14.61 19.97 19.09 15.49 19.1 9.99C19.1 7.32 18.06 4.81 16.18 2.92ZM14 13.55C13.79 14.13 12.77 14.69 12.31 14.74C11.85 14.78 11.42 14.94 9.32 14.11C6.78 13.11 5.18 10.51 5.05 10.34C4.93 10.18 4.03 8.99 4.03 7.76C4.03 6.54 4.68 5.93 4.91 5.68C5.14 5.43 5.41 5.37 5.57 5.37C5.74 5.37 5.91 5.37 6.05 5.38C6.23 5.38 6.43 5.39 6.61 5.81C6.84 6.3 7.32 7.54 7.38 7.66C7.45 7.79 7.49 7.93 7.4 8.1C7.32 8.26 7.28 8.37 7.16 8.51C7.03 8.66 6.89 8.84 6.78 8.95C6.66 9.07 6.53 9.21 6.67 9.46C6.82 9.71 7.32 10.53 8.06 11.19C9.01 12.04 9.82 12.3 10.07 12.43C10.32 12.55 10.46 12.53 10.61 12.36C10.75 12.2 11.23 11.64 11.4 11.39C11.56 11.14 11.73 11.18 11.96 11.26C12.19 11.34 13.42 11.95 13.66 12.07C13.91 12.2 14.08 12.26 14.14 12.36C14.2 12.47 14.2 12.97 14 13.55Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
            >
              <defs />
              <path
                d="M4.65 0C1.59 0 -0.9 2.48 -0.9 5.55L-0.9 14.44C-0.9 17.51 1.59 20 4.65 20L13.54 20C16.61 20 19.1 17.51 19.1 14.44L19.1 5.55C19.1 2.48 16.61 0 13.54 0L4.65 0ZM15.76 2.22C16.38 2.22 16.88 2.72 16.88 3.33C16.88 3.94 16.38 4.44 15.76 4.44C15.15 4.44 14.65 3.94 14.65 3.33C14.65 2.72 15.15 2.22 15.76 2.22ZM9.1 4.44C12.17 4.44 14.65 6.93 14.65 10C14.65 13.06 12.17 15.55 9.1 15.55C6.03 15.55 3.54 13.06 3.54 10C3.54 6.93 6.03 4.44 9.1 4.44ZM9.1 6.66C8.21 6.66 7.37 7.01 6.74 7.64C6.12 8.26 5.76 9.11 5.76 10C5.76 10.88 6.12 11.73 6.74 12.35C7.37 12.98 8.21 13.33 9.1 13.33C9.98 13.33 10.83 12.98 11.45 12.35C12.08 11.73 12.43 10.88 12.43 10C12.43 9.11 12.08 8.26 11.45 7.64C10.83 7.01 9.98 6.66 9.1 6.66Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="31.000000"
              height="21.000000"
              viewBox="0 0 31 21"
              fill="none"
            >
              <defs />
              <path
                id="Vector"
                d="M30.41 0.28C29.88 -0.05 29.05 -0.1 28.19 0.16L28.19 0.16C27.29 0.43 2.62 8.31 1.62 8.63C1.44 8.67 -0.16 9.12 0.01 10.1C0.15 11 1.44 11.36 1.59 11.41L7.86 13C8.28 14.04 9.81 17.84 10.15 18.65C10.36 19.16 10.71 19.82 11.31 19.96C11.84 20.11 12.37 19.98 12.71 19.78L16.54 17.13L22.73 20.72L22.88 20.79C23.3 20.93 23.7 21 24.09 21C24.38 21 24.67 20.95 24.94 20.87C25.87 20.59 26.24 19.93 26.28 19.85L30.9 1.96C31.18 1.01 30.79 0.52 30.41 0.28ZM13.39 13.64L11.28 17.84L9.16 12.59L25.38 3.67L13.39 13.64Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
