"use client";
import {
  refreshToken as refreshTokenFn,
  selectUser,
} from "@/lib/features/auth/authSlice";
import { loginCheck } from "@/lib/features/auth/authSlice";
import {
  getFavorites,
  setInitialStateFromLS,
} from "@/lib/features/favorites/favoritesSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import Cookies from "js-cookie";
import { ReactNode, useEffect } from "react";

interface Props {
  readonly children: ReactNode;
}

const Hoc = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const cookies = Cookies.get("jwt-session");
    if (cookies) {
      const { accessToken, refreshToken } = JSON.parse(cookies);
      dispatch(loginCheck(accessToken)).then((res) => {
        if (res.payload?.error?.message === "jwt expired")
          dispatch(refreshTokenFn(refreshToken));
      });
    }
    // if (!cookies) {
    //   dispatch(
    //     setInitialStateFromLS(JSON.parse(localStorage.getItem("favorites")!))
    //   );
    // }
  }, []);

  return <>{children}</>;
};

export default Hoc;
