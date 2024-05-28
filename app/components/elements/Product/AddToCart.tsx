const AddToCart = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className="py-3 px-12 rounded-md bg-slate-500 text-white hover:bg-orange-400 disabled:bg-slate-500 transition-colors"
    >
      В корзину
    </button>
  );
};

export default AddToCart;
