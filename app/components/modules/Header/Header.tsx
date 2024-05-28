"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Modal from "../Modal/Modal";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Logo from "../../elements/Header/Logo";
import GlobalNavigation from "../../elements/Header/GlobalNavigation";
import MenuBtn from "../../elements/Header/MenuBtn";
import Menu from "./Menu/Menu";

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
  const [isShowMenu, setIsShowMenu] = useState(false);
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
    <AuthContext.Provider value={contextValue}>
      <header className="_container w-screen h-[76px] fixed flex justify-between items-center bg-black  text-white text-xl z-50">
        <Logo />
        <GlobalNavigation />
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
          <MenuBtn handleClick={() => setIsShowMenu((p) => !p)} />
          <Menu isShow={isShowMenu} />
        </div>
        {isModalActive && (
          <Modal
            onClose={handleModalClose}
            cnModal={`_auth-modal ${userIsRegister && "_flip"}`}
            cnModalWrapper={`_auth-modal-container`}
          >
            <SignIn />
            <SignUp />
          </Modal>
        )}
      </header>
    </AuthContext.Provider>
  );
};

export default Header;