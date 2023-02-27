import React, { useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";
import { CareerAwesomeInput } from "../../components/Cafields";
import * as Yup from "yup";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {connect} from "react-redux";
import {loginUser} from "../State/userAction"
import { useRouter } from "next/router";
import LoadingButton from '@mui/lab/LoadingButton';
// Yup Schema
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface LoginStates{
  userData: {
    authenticated: boolean;
    loading: boolean;
    credentials: object;
  };
  loginUser:any
}
function Login({userData: { authenticated, loading, credentials}, loginUser}:LoginStates): JSX.Element {
  const {
    control,
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
    setFocus,
    getValues,
  } = useForm({
    mode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });
  const router = useRouter()
  useEffect(() => {
    if(authenticated){
      router.push('/')
    }
  }, [authenticated])
  
  const onSubmit = async (data: any) => {
    console.log(data, loading);
    loginUser(data)
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
                      Login to Career Awesome
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      Login in to access tools and resources for your career
                      journey. Let's make your dream career a reality together!
                     <br/> 
                    </Typography>
                    <Typography gutterBottom variant="body2">
                    <span>New to CareerAwesome?</span>
                      <Link href="/signup">
                        <span style={{ color: "blue" }}>
                          {" "}
                          Create an account
                        </span>
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
                        <Grid md={12} item>
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
                      </Grid>
                      <Box>
                        <Box>
                          <Box sx={{ mt: 2 }}>
                            <Link href="/recovery">
                              <Typography variant="body2">
                                <span style={{color:"blue"}}>Forget password?</span>
                              </Typography>
                            </Link>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ paddingTop: "0.8rem" }}>
                      <LoadingButton  loading={loading} onClick={handleSubmit(onSubmit)} fullWidth variant="contained">
                        Login
                      </LoadingButton >
                    </Box>
                  </form>
                </Box>
                <Box sx={{ marginTop: "1.5rem" }}>
                  <Box sx={{ mb: 3 }}>
                    <Divider>
                      <Typography variant="subtitle2" align="center">
                        Or sign in with
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
                        Sign in with Google
                      </Button>
                    </Grid>
                    <Grid md={6} item>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        startIcon={<i className="fa-brands fa-linkedin" />}
                      >
                        Sign in with LinkedIn
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
    </Box>
  );
}

{
  /* <i className="fa-brands fa-twitter" /> */
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

export default connect(mapStateToProps, {loginUser})(Login);
