import Link from "next/link";

const Kits = () => {
  return (
    <section className="h-screen pb-20 relative overflow-hidden bg-[url('/kits/kits_layers_base.jpeg')] bg-cover text-white">
      <div className="h-full">
        <div className="h-full bg-[url('/kits/kits_layers_front.png')] bg-contain bg-no-repeat bg-right "></div>
        <div className="w-full h-full relative -top-[95%] left-[2%]  bg-[url('/kits/kits_outline.png')] bg-contain bg-no-repeat bg-right"></div>
      </div>

      <div className="absolute top-24 left-20">
        <h1 className="text-3xl font-semibold">КОМПЛЕКТЫ</h1>
        <h2 className="mt-[10px] mb-10 text-xs font-light">
          Варианты наших покрытий применимые в дизайне
        </h2>
        <nav>
          <ol className="flex flex-col gap-9">
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"kits/concrete"}
              >
                Арт-Бетон
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/kits/worldMap"}
              >
                Карта мира
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/"}
              >
                Арт-Шелк
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/"}
              >
                Венеция
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/"}
              >
                Арт-Песок
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/"}
              >
                Велюр
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/"}
              >
                Штукатурка для фассада
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/"}
              >
                Покраска стен внутри помещений
              </Link>
            </li>
            <li>
              <Link
                className="py-3 px-8 border border-white rounded-2xl text-xl"
                href={"/"}
              >
                Покраска стен снаружи помещений
              </Link>
            </li>
          </ol>
        </nav>
        <p className="max-w-[558px] mt-[74px] text-xl font-medium before:block before:w-[122px] before:h-[3px] before:mb-4 before:rounded before:bg-white">
          Создайте свой неповторимый стиль с помощью комплектов Lofta Colora
        </p>
      </div>
    </section>
  );
};

export default Kits;
