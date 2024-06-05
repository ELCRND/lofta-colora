"use client";
import { refreshToken as refreshTokenFn } from "@/lib/features/auth/authSlice";
import { loginCheck } from "@/lib/features/auth/authSlice";
import { setInitialStateFromLS } from "@/lib/features/slices/favoritesSlice";
import { useAppDispatch } from "@/lib/hooks";
import Cookies from "js-cookie";
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
    const cookies = Cookies.get("jwt-session");
    if (cookies) {
      console.log(12);
      const { accessToken, refreshToken } = JSON.parse(cookies);
      dispatch(loginCheck(accessToken)).then((res) => {
        if (res.payload?.error?.message === "jwt expired")
          dispatch(refreshTokenFn(refreshToken));
      });
    }
  }, []);

  return <>{children}</>;
};

export default Hoc;
