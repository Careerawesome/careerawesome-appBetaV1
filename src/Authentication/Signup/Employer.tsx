import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CareerAwesomeInput, CareerAwesomeSelect} from "../../components/Cafields";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Checkbox,
  Typography,
} from "@mui/material";
function Employer() {
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
              <Box sx={{ maxWidth: "525px", margin: "50px auto 0 auto" }}>
                <Box>
                  <Box>
                    <Typography
                      sx={{ fontWeight: 700 }}
                      gutterBottom
                      variant="h3"
                    >
                      Create your company account
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      Already a member,
                      <Link href="/signup"> Login</Link>
                    </Typography>
                  </Box>
                  <form>
                    <Box sx={{ padding: "1rem 0" }}>
                      <Grid container spacing={2}>
                        <Grid md={12} item>
                          <CareerAwesomeInput
                            label="Full Name"
                            color="primary"
                          />
                        </Grid>
                        <Grid md={6} item>
                          <CareerAwesomeInput
                            label="Company name"
                            color="primary"
                          />
                        </Grid>
                        <Grid md={6} item>
                          <CareerAwesomeInput label="Company Email" color="primary" />
                        </Grid>
                        <Grid md={6} item>
                          <CareerAwesomeInput
                            label="Password"
                            type="password"
                            fullWidth
                            color="primary"
                          />
                        </Grid>
                        <Grid md={6} item>
                          <CareerAwesomeInput
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            color="primary"
                          />
                        </Grid>
                        <Grid md={6} item>
                          <CareerAwesomeSelect label="Responsibilities the hiring process">
                              <MenuItem  value="italic">Owner</MenuItem>
                              <MenuItem  value="normal">Human Resources (HR) Representative</MenuItem>
                              <MenuItem>Hiring Manager</MenuItem>
                              <MenuItem>Other</MenuItem>
                          </CareerAwesomeSelect>
                        </Grid>
                        <Grid md={6} item>
                          <CareerAwesomeSelect label="Number of Employee (optional)" >
                              <MenuItem  value="italic">1 - 10</MenuItem>
                              <MenuItem  value="normal">11 - 99</MenuItem>
                              <MenuItem  value="oblique">100 - 249</MenuItem>
                              <MenuItem  value="oblique">250 - 849</MenuItem>
                              <MenuItem  value="oblique">850 - 7449</MenuItem>
                              <MenuItem  value="oblique">7550+ </MenuItem>
                          </CareerAwesomeSelect>
                        </Grid>
                        <Grid>
                          <Box sx={{mt:2}}>
                            <FormControl>
                              <FormControlLabel sx={{margin:0}}
                                control={<Checkbox color="primary" required />}
                                label={<Typography variant="body2">I have read and agree to the terms and conditions</Typography>}
                              />
                            </FormControl>
                          </Box>
                        </Grid>
                      </Grid>
                      <Box>
                        <Box></Box>
                      </Box>
                    </Box>
                    <Box sx={{ paddingTop: "0.5rem" }}>
                      <Button fullWidth variant="contained">
                        Create Account
                      </Button>
                    </Box>
                  </form>
                </Box>
                {/* <Box sx={{ marginTop: "1rem" }}>
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
                </Box> */}
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
export default Employer;
