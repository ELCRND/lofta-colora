import { removeFromFavorites } from "@/lib/features/slices/favoritesSlice";
import { setProduct } from "@/lib/features/slices/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { IProduct } from "@/types/products";
import Image from "next/image";

type Props = {
  product: IProduct;
  modalHandler: VoidFunction;
};

const FavoriteProductCard = ({ product, modalHandler }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setProduct(product));
    modalHandler();
  };
  return (
    <div className="w-full p-4 flex gap-x-4 rounded-xl bg-[#3d3a3a] bg-opacity-20 border border-transparent [box-shadow:12px_14px_30px_0px_rgb(0,0,0)] text-white self-start hover:bg-opacity-40 hover:border-gray-300 transition-colors">
      <Image
        src={product.images[0]}
        alt={product.type}
        width={100}
        height={50}
      />
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={handleClick}
          className="flex flex-col text-2xl hover:text-orange-300 transition-colors"
        >
          <span className="text-balance">{product.type}</span>
          <span>{product.name}</span>
        </button>
        <span className="">{product.price}Р</span>
      </div>
      <button
        onClick={() => dispatch(removeFromFavorites(product._id))}
        className="self-start ml-auto"
        type="button"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default FavoriteProductCard;
