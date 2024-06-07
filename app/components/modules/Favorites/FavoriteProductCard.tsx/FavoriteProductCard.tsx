import Image from "next/image";
import RemoveFromFavorites from "@/app/components/elements/Favorites/RemoveFromFavorites";
import Title from "@/app/components/elements/Favorites/Title";
import { setProduct } from "@/lib/features/slices/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { IProduct } from "@/types/products";
import {
  removeFavoritesFromLS,
  removeFromFavorites,
} from "@/lib/features/favorites/favoritesSlice";

type Props = {
  product: IProduct;
  modalHandler: VoidFunction;
  user: {
    email: string;
    _id: string;
  } | null;
};

const FavoriteProductCard = ({ product, modalHandler, user }: Props) => {
  console.log(product);
  const dispatch = useAppDispatch();
  const buy = () => {
    dispatch(setProduct(product));
    modalHandler();
  };
  const remove = () => {
    user?.email
      ? dispatch(
          removeFromFavorites({ email: user.email, productId: product._id })
        )
      : dispatch(removeFavoritesFromLS(product._id));
  };
  return (
    <div className="w-full p-4 flex gap-x-4 rounded-xl bg-[#3d3a3a] bg-opacity-20 border border-transparent [box-shadow:12px_14px_30px_0px_rgb(0,0,0)] text-white self-start hover:bg-opacity-40 hover:border-gray-300 transition-colors">
      <Image
        src={product.images[0]}
        alt={product.type}
        width={100}
        height={50}
      />
      <Title
        name={product.name}
        type={product.type}
        date={product.date}
        price={product.price}
        handleClick={buy}
      />
      <RemoveFromFavorites handleClick={remove} />
    </div>
  );
};

export default FavoriteProductCard;
