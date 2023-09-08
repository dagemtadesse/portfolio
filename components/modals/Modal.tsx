import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }: { children?: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLDivElement>("#modal-contianer");
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, ref.current!) : null;
};
