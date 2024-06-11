import { selectIsLoadingBasket } from "@/lib/features/basket/basketSlice";
import { useAppSelector } from "@/lib/hooks";

const AddToCart = ({
  disabled,
  onClick,
  isInBusket,
}: {
  disabled: boolean;
  onClick: VoidFunction;
  isInBusket: boolean;
}) => {
  const isLoading = useAppSelector(selectIsLoadingBasket);
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      onClick={onClick}
      className="py-3 px-12 rounded-md bg-slate-500 text-white hover:bg-orange-400 disabled:bg-slate-500 transition-colors"
    >
      {isLoading ? "Подождите..." : isInBusket ? "Добавлено" : "В корзину"}
    </button>
  );
};

export default AddToCart;
