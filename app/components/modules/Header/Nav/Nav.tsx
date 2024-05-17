import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ol className="flex gap-[86px]">
        <li>
          <Link href={"/kits"}>Комплекты</Link>
        </li>
        <li>
          <Link href={"/"}>Каталог</Link>
        </li>
        <li>
          <Link href={"/"}>Партнерам</Link>
        </li>
        <li>
          <Link href={"/"}>Акции</Link>
        </li>
        <li>
          <Link href={"/"}>О нас</Link>
        </li>
        <li>
          <Link href={"/"}>Услуги</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
