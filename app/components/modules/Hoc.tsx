"use client";
import { setInitialStateFromLS } from "@/lib/features/slices/favoritesSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ReactNode, useEffect } from "react";

interface Props {
  readonly children: ReactNode;
}

const Hoc = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setInitialStateFromLS(JSON.parse(localStorage.getItem("favorites")!))
    );
  }, []);

  return <>{children}</>;
};

export default Hoc;
