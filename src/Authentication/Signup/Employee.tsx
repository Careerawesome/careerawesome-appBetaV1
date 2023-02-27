import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CareerAwesomeInput } from "../../components/Cafields";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";
import { RegisterUser } from "../State/userAction";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import axios from "axios";
import { AES, enc } from "crypto-js";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const AlertSnack = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  isAgreement: Yup.boolean()
    .required("You must accept the agreement to continue")
    .oneOf([true], "Acceptance of the agreement is required"),
  confirmPassword: Yup.string()
    .required("Password is mendatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

interface signupStates {
  userData: {
    authenticated: boolean;
    loading: boolean;
    credentials: object;
  };
  RegisterUser: any;
}

function Employee({
  userData: { authenticated, loading, credentials },
  RegisterUser,
}: signupStates): JSX.Element {
  const [submiting, setSubmiting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.push("/");
    }
  }, [authenticated]);

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

  const onSubmit:any = async (data: any) => {
    setSubmiting(true);
    const signupData = data;
    Object.assign(signupData, { role: "employee" });
    console.log(signupData);
    const headers = {
      "Content-Type": "application/json",
      "secrete-api-key": `${process.env.DATE}`,
    };
    const response = await axios.post(
      "https://api.careerawesome.xyz/api/users/signup",
      signupData,
      { headers }
    );
    // set an Alert Toast
    const encrypt = (value: string) =>
      AES.encrypt(value, "secret-key").toString();
    const email = encrypt(data.email);
    // store the email to local storage
    // screteName of localstorage is SN
    const SN = "thiehnehrt2y9";
    localStorage.setItem(SN, email);

    // then push to the verify page
    const eM = encodeURIComponent(JSON.stringify({ email }));
    //show the Alert UI
    handleClick({
      vertical: "top",
      horizontal: "right",
    });
    // Then Push
    router.push({
      pathname: "/verify-email",
      query: { eM },
    });
    setSubmiting(false);
    // RegisterUser(data)
  };

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Box>
        <Grid container spacing={0}>
          <Grid item md={6}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/career-awesome-351619.appspot.com/o/milad-fakurian-PGdW_bHDbpI-unsplash%20(1).jpg?alt=media&token=e30d9d89-911c-4c74-983c-077110029b04"
              alt="Picture of the author"
              style={{
                height: "100vh",
                width: "100%",
              }}
            />
            {/* https://firebasestorage.googleapis.com/v0/b/career-awesome-351619.appspot.com/o/Logo%20only%20view%20(1).png?alt=media&token=68245863-79ef-48b4-8a5d-b851362e9da1 */}
          </Grid>
          <Grid item md={6}>
            <Box>
              <Box sx={{ maxWidth: "500px", margin: "55px auto 0 auto" }}>
                <Box>
                  <Box>
                    <Typography
                      sx={{ fontWeight: 700 }}
                      gutterBottom
                      variant="h3"
                    >
                      Welcome to CareerAwesome
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      Join Career Awesome to take control of your career and
                      stay organized. we will give you the tools and support you
                      need to thrive. Sign up now and unlock endless
                      possibilities!
                      <br />
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      Already a member?
                      <Link href="/login">
                        <span style={{ color: "blue" }}> Click to login</span>
                      </Link>
                    </Typography>
                  </Box>
                  <form>
                    <Box sx={{ padding: "1rem 0" }}>
                      <Grid container spacing={2}>
                        <Grid md={12} item>
                          <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <CareerAwesomeInput
                                placeholder="Your email address eg; john@careerawesome.io"
                                error={!!errors.email}
                                helperText={errors?.email?.message}
                                label="Email"
                                color="primary"
                                fullWidth
                                {...field}
                              />
                            )}
                          />
                        </Grid>
                        <Grid md={6} item>
                          <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <CareerAwesomeInput
                                placeholder="Enter strong password using chacracters and numbers"
                                error={!!errors.password}
                                helperText={errors?.password?.message}
                                label="Password"
                                type="password"
                                color="primary"
                                fullWidth
                                {...field}
                              />
                            )}
                          />
                        </Grid>
                        <Grid md={6} item>
                          <Controller
                            name="confirmPassword"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <CareerAwesomeInput
                                placeholder="Confirm your password"
                                error={!!errors.confirmPassword}
                                helperText={errors?.confirmPassword?.message}
                                label="Password"
                                type="password"
                                color="primary"
                                fullWidth
                                {...field}
                              />
                            )}
                          />
                        </Grid>
                        <Grid>
                          <Box sx={{ mt: 1 }}>
                            <Controller
                              name="isAgreement"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <FormControl>
                                  <FormControlLabel
                                    sx={{ margin: 0 }}
                                    control={
                                      <Checkbox
                                        color="primary"
                                        required
                                        {...field}
                                      />
                                    }
                                    label={
                                      <Typography variant="body2">
                                        I have read and agree to the terms and
                                        conditions
                                      </Typography>
                                    }
                                  />
                                </FormControl>
                              )}
                            />
                            {!!errors.isAgreement && (
                              <Box sx={{ mb: 1, mt: 1 }}>
                                <Alert severity="info">
                                  Before you continue, we just need you to agree
                                  to our terms and conditions
                                </Alert>
                              </Box>
                            )}
                          </Box>
                        </Grid>
                      </Grid>
                      <Box>
                        <Box></Box>
                      </Box>
                    </Box>
                    <Box>
                      <LoadingButton
                        loading={submiting}
                        onClick={handleSubmit(onSubmit)}
                        fullWidth
                        variant="contained"
                      >
                        Create Account
                      </LoadingButton>
                    </Box>
                  </form>
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <Box sx={{ mb: 2 }}>
                    <Divider>
                      <Typography variant="body2" align="center">
                        OR
                      </Typography>
                    </Divider>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid md={6} item>
                      <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        startIcon={<i className="fa-brands fa-google" />}
                      >
                        Sign up with Google
                      </Button>
                    </Grid>
                    <Grid md={6} item>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        startIcon={<i className="fa-brands fa-linkedin" />}
                      >
                        Sign up with LinkedIn
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <AlertSnack
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registration Successful, check your email to verify
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

export default connect(mapStateToProps, { RegisterUser })(Employee);
