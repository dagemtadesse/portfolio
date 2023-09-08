import { motion } from "framer-motion";
import { Button } from "../Button";
import { useFormik } from "formik";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [submitError, setSubmitError] = useState<string | undefined>();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: { email: "", fullname: "", message: "", submit: "" },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitError(undefined);
        await emailjs.send(
          "service_nvweqw6",
          "template_oqv32vr",
          values,
          "HQ6ywxsS1WPbuhcLW"
        );
        onClose();
      } catch (error) {
        setSubmitError("Unable to send you message. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: object({
      email: string().email().required().label("Email"),
      fullname: string().required().label("Full name"),
      message: string().required().max(2000),
    }),
  });

  const inputStyle = (error: boolean) =>
    `outline-1 outline-gray-700 border ${
      !error ? "border-gray-500" : "border-red-500"
    } text-base py-2 px-3`;

  return (
    <form
      className="absolute inset-0 max-w-[1076px] mx-auto"
      onSubmit={handleSubmit}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ ease: "linear", duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 bottom-0 drop-shadow-xl flex flex-col gap-4 py-6 px-6 bg-white md:max-w-lg w-full"
      >
        <h1 className="text-2xl mb-4 font-medium">Send me a message</h1>

        <div className="flex flex-col gap-3">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            className={inputStyle(Boolean(touched.fullname && errors.fullname))}
            name="fullname"
            maxLength={50}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={inputStyle(Boolean(touched.email && errors.email))}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={inputStyle(Boolean(touched.message && errors.message))}
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={2000}
          ></textarea>
          <p className="text-sm text-red-500">{submitError}</p>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <Button size="sm" variant="outlined" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button
            size="sm"
            variant="filled"
            type="submit"
            disable={!isValid || isSubmitting}
          >
            Send
          </Button>
        </div>
      </motion.div>
    </form>
  );
};
