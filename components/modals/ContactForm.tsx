import { useFormik } from "formik";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";
import { useContext, useState } from "react";
import { snackBarContext } from "./SnackBar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [submitError, setSubmitError] = useState<string | undefined>();
  const snackBarCtx = useContext(snackBarContext);

  const { handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
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
        snackBarCtx.setMessage("Thanks for reaching out!");
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

  return (
    <Dialog
      open={true}
      onClose={onClose}
      fullWidth
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        elevation: 0,
        variant: "outlined",
      }}
    >
      <DialogTitle>Send me a message</DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <TextField
            size="small"
            label="Full Name"
            type="text"
            name="fullname"
            inputProps={{ maxLength: 60 }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            size="small"
            label="Email"
            type="email"
            inputProps={{ maxLength: 60 }}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            multiline
            label="Message"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{ maxLength: 5000 }}
          />

          {submitError && <Typography variant="body2" color="error">{submitError}</Typography>}
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          size="small"
          variant="outlined"
          type="button"
          onClick={onClose}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
        >
          {!isSubmitting ? "Send" : "Sending..."}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
