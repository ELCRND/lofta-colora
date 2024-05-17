"use client";
import Nav from "./Nav/Nav";
import Menu from "../../elements/Header/Menu";
import Logo from "../../elements/Header/Logo";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import Modal from "../Modal/Modal";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const AuthContext = createContext<{
  userIsRegister: boolean;
  setUserIsRegister: Dispatch<SetStateAction<boolean>>;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}>({
  userIsRegister: false,
  setUserIsRegister: () => {},
  setModalActive: () => {},
});

const Header = () => {
  const [userIsRegister, setUserIsRegister] = useState(false);
  const [isModalActive, setModalActive] = useState(false);
  const contextValue = useMemo(
    () => ({ userIsRegister, setUserIsRegister, setModalActive }),
    [userIsRegister]
  );
  const session = useSession();

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  return (
    <header className="_container w-full h-[76px] fixed flex justify-between items-center bg-black  text-white text-xl z-50">
      <Logo />
      <Nav />
      <div className="flex gap-6 items-center">
        <div>
          {session?.status === "authenticated" ? (
            <Link href={"/api/auth/signout"}>Sign Out</Link>
          ) : (
            <button type="button" onClick={handleModalOpen}>
              Sign Up
            </button>
          )}
        </div>

        <Menu />
      </div>
      {isModalActive && (
        <AuthContext.Provider value={contextValue}>
          <Modal onClose={handleModalClose}>
            <SignIn />
            <SignUp />
          </Modal>
        </AuthContext.Provider>
      )}
      <Toaster />
    </header>
  );
};

export default Header;
