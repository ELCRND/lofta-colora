import { ReactNode, useEffect } from "react";
import { setInitialStateFromLS } from "@/lib/features/slices/favoritesSlice";
import { useAppDispatch } from "@/lib/hooks";

interface Props {
  readonly children: ReactNode;
}

const Hoc = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Synchronization Redux store with LS
    if (typeof window !== "undefined") {
      const dataFromLS = localStorage.getItem("favorites");

      if (dataFromLS) {
        dispatch(setInitialStateFromLS(JSON.parse(dataFromLS)!));
      }
    }
  }, [dispatch]);
  return <>{children}</>;
};

export default Hoc;
