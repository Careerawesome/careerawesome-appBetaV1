import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";
import { CareerAwesomeInput } from "../../components/Cafields";
import axios from "axios";
import { AES, enc } from "crypto-js";
import Alert from "@mui/material/Alert";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { connect } from "react-redux";
import { RegisterUser } from "../State/userAction";
import LoadingButton from "@mui/lab/LoadingButton";

export interface State extends SnackbarOrigin {
  open: boolean;
}
const AlertSnack = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EmailVerify({RegisterUser}:any) {
  const [verifying, setVerifying] = useState(false)
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    // get the email
    const decrypt = (value: string) =>
      AES.decrypt(value, "secret-key").toString(enc.Utf8);
    const getEmail: any = localStorage.getItem("thiehnehrt2y9");
    const email = decrypt(getEmail);
    setEmail(email);
  }, [email]);

  const SubmitVerification = async () => {
    setVerifying(true)
    try {
        const payload = {email, code}
        const registerPayload = {email}
        console.log(payload)
        // verify the email first 
        const verify = await axios.post("https://api.careerawesome.xyz/api/users/verify-email", payload)
        console.log(verify.data);
        if(verify.data.status === "success"){
            RegisterUser(registerPayload)  
            setVerifying(false) 
        }
    } catch (error) {
        console.log(error)
        setVerifying(false)
    }
  };
  // the Alert Button

  const [openAlert, setOpenAlert] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  const { vertical, horizontal, open } = openAlert;

  const handleClick = (newState: SnackbarOrigin) => {
    setOpenAlert({ open: true, ...newState });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert({ ...openAlert, open: false });
  };
  const resendVerification = async () => {
    const payload = { email };
    const response:any = await axios.post("https://api.careerawesome.xyz/api/users/resend-code", payload);
    handleClick({
        vertical: "top",
        horizontal: "right",
    });
    console.log(response.data)
  };
  const handleChange = (e:any) =>{
    setCode(e.target.value)
  }
  return (
    <Box sx={{ height: "100vh", padding: "120px 20px" }}>
      <Box sx={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
        <Box>
          <img
            src="https://zone-assets-api.vercel.app/assets/icons/ic_lock_password.svg"
            alt="padlock"
          />
        </Box>
        <Box>
          <Typography gutterBottom variant="h3">
            Please Check your Email
          </Typography>
          <Typography sx={{ mb: 4 }} gutterBottom variant="body2">
            We're just a step away from making sure your account is fully set
            up. Please enter the following code on our website to complete the
            verification process: we have sent your a code to {email}
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <CareerAwesomeInput
             onChange={handleChange}
            label="Input Your Code to Verify Email"
          />
        </Box>
        <Box>
          <Typography variant="body2">
            Didn't get the email{" "}
            <Button variant="text" onClick={resendVerification}>
              click to resend
            </Button>
          </Typography>
        </Box>
        <Box>
          <LoadingButton loading={verifying} onClick={SubmitVerification} variant="contained" fullWidth>
            Verify
          </LoadingButton>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <AlertSnack
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Verification code sent again
        </AlertSnack>
      </Snackbar>
    </Box>
  );
}

interface StateProps {
    userStates: {
      authenticated: boolean;
      loading: boolean;
      credentials: object;
    };
  }
const mapStateToProps = (state: StateProps) => {
    return { userData: state.userStates };
  };
  
export default connect(mapStateToProps, { RegisterUser })(EmailVerify);
