import { AnimatePresence, motion } from "framer-motion";
import { createContext, ReactNode, useEffect, useState } from "react";
import { X } from "react-feather";
import { Modal } from "./Modal";

export const SnackBar = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose?: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-transparent flex items-end justify-center md:pb-8"
      id="snackbar"
    >
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.75, opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-yellow  bg-darkBlue text-white  w-full md:max-w-md  flex"
      >
        <div className="grow py-3 px-5">{children}</div>
        <button
          className="p-3 before:absolute before:inset-0 relative hover:before:bg-white hover:before:bg-opacity-20 before:transition-all before:duration-300 before:ease-linear"
          onClick={onClose}
        >
          <X size={18} className="relative" />
        </button>
      </motion.div>
    </div>
  );
};

export const snackBarContext = createContext({
  message: "" as string | undefined,
  setMessage: (val: string) => {},
});

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    setTimeout(() => setMessage(undefined), 5000);
  }, [message]);

  return (
    <snackBarContext.Provider
      value={{ message, setMessage: (val: string) => setMessage(val) }}
    >
      {children}
      <AnimatePresence>
        {message && (
          <Modal>
            <SnackBar onClose={() => setMessage(undefined)}>{message}</SnackBar>
          </Modal>
        )}
      </AnimatePresence>
    </snackBarContext.Provider>
  );
};
