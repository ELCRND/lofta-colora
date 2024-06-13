import Link from "next/link";

const routes = [
  { path: "/kits/concrete", title: "Арт-Бетон" },
  { path: "/kits/worldMap", title: "Карта мира" },
  { path: "/", title: "Арт-Шелк" },
  { path: "/", title: "Венеция" },
  { path: "/", title: "Арт-Песок" },
  { path: "/", title: "Велюр" },
  { path: "/", title: "Штукатурка для фассада" },
  { path: "/", title: "Покраска стен внутри помещений" },
  { path: "/", title: "Покраска стен снаружи помещений" },
];

const Kits = () => {
  return (
    <section className="h-screen pb-20 relative overflow-hidden bg-[url('/kits/kits_bg.jpeg')] text-white">
      <div className="absolute top-24 left-20">
        <h1 className="text-3xl font-semibold">КОМПЛЕКТЫ</h1>
        <h2 className="mt-[10px] mb-10 text-xs font-light">
          Варианты наших покрытий применимые в дизайне
        </h2>
        <nav className="relative z-10">
          <ol className="flex flex-col gap-9">
            {routes.map((route) => (
              <KitsLinkComponents path={route.path} title={route.title} />
            ))}
          </ol>
        </nav>
        <p className="max-w-[558px] mt-[74px] text-xl font-medium before:block before:w-[122px] before:h-[3px] before:mb-4 before:rounded before:bg-white">
          Создайте свой неповторимый стиль с помощью комплектов Chroma Art.
        </p>
      </div>
    </section>
  );
};

export default Kits;

const KitsLinkComponents = ({
  path,
  title,
}: {
  path: string;
  title: string;
}) => {
  return (
    <li>
      <Link
        className="_inner-nav py-3 px-8 border border-white rounded-2xl text-xl outline-none"
        href={path}
      >
        {title}
      </Link>
    </li>
  );
};
