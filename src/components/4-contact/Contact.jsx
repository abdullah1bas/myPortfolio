// @ts-nocheck
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const Contact = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(false);

  const handleClick = () => {
    setOpenAlert(true);
    setOpenAnimation(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    handleClick();
  };

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              {...register("email")}
              aria-invalid={errors.email ? true : false}
              disabled={!errors.email && openAnimation}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              {...register("textarea")}
              aria-invalid={errors.textarea ? true : false}
              disabled={!errors.textarea && openAnimation}
            />
          </div>

          <button
            type="submit"
            disabled={!errors.email && openAnimation && !errors.textarea}
            className="submit"
          >
            {!errors.email && openAnimation && !errors.textarea ? "Submitting ..." : "Submit"}
          </button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>

          {!errors.email && openAnimation && !errors.textarea && (
            <div
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </div>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;