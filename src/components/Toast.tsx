import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useAppContext } from "../App/Context";

const Toast = ({ message, type }) => {
  // eslint-disable-next-line
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      dispatch({ type: "CLEAR_MSG" });
    }, 5000);
  }, [message, dispatch]);

  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      sx={{ bottom: { xs: 0, sm: 30 } }}
    >
      <Alert
        severity={type || "success"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
