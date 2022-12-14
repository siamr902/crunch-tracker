import { toast } from "react-toastify";
import styles from "../styles/toast.module.css";

export const editSuccess = () => {
  toast("Your changes were successful", {
    theme: "dark",
    type: "success",
    position: "top-center",
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    hideProgressBar: true,
    autoClose: 2000,
    bodyClassName: styles.toast,
  });
};

export const editDiscard = () => {
  toast("Changes Discarded.", {
    theme: "dark",
    type: "info",
    position: "top-center",
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    hideProgressBar: true,
    autoClose: 2000,
    bodyClassName: styles.toast,
  });
};

export const exerciseToast = () => {
  toast("You need at least 1 exercise.", {
    theme: "dark",
    type: "warning",
    position: "top-center",
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    hideProgressBar: true,
    bodyClassName: styles.toast,
  });
};

export const notifyWelcome = (name: string | undefined): void => {
  toast(`Welcome, ${name ?? "Anonymous"}! 👋`, {
    position: "top-center",
    theme: "dark",
    autoClose: 2000,
    pauseOnHover: false,
    hideProgressBar: true,
    bodyClassName: styles.toast,
  });
};

export const notifyUnauthenticated = (): void => {
  toast("You must sign in to receive notifications.", {
    type: "error",
    position: "top-center",
    theme: "dark",
    autoClose: 3000,
    pauseOnHover: false,
    hideProgressBar: true,
    bodyClassName: styles.toast,
  });
};
