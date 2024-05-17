import Portal, { createContainer } from "@/lib/features/portal/portal";
import {
  MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AuthContext } from "../Header/Header";

type Props = { onClose?: () => void; children: React.ReactNode };

const MODAL_CONTAINER_ID = "modal-container-id";

const Modal = ({ onClose, children }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);
  const { userIsRegister } = useContext(AuthContext);

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    // const handleWrapperClick = (event: MouseEvent) => {
    // const { target } = event;

    //   if (target instanceof Node && rootRef.current === target) {
    //     onClose?.();
    //   }
    // };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    // window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      // window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div ref={rootRef} className="_modal-container">
        <div className={`_modal ${userIsRegister && "_flip"}`}>
          <button
            className="text-white text-2xl ml-auto mr-4 block"
            type="button"
            onClick={handleClose}
          >
            x
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
