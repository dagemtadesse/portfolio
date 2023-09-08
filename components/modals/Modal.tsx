import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Modal = ({
  children,
  onClose,
}: {
  children?: ReactNode;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLDivElement>("#modal-contianer");
    setMounted(true);
  }, []);

  const modal = (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-5" onClick={onClose}>
      {children}
    </div>
  );
  return mounted ? createPortal(modal, ref.current!) : null;
};
