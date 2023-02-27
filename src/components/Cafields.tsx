// This should be a Hof for all Text FeildUi Components
// Ca means Career Awesome
import React, { useState } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
// import {withStyles} from "@mui/styles";
// import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Autocomplete from "@mui/material/Autocomplete";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
const CaFieldStyle = styled(TextField)({});

const switchRoot = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  margin: 10px 10px 10px 0;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #007fff;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

export const CaTextField = (props) => {
  return (
    <CaFieldStyle fullWidth variant="outlined" id="ca-textfield" {...props} />
  );
};

// The field for resume Form Builder 
const BootstrapInputs = styled(InputBase)(({ theme, error }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    borderRadius: 6, //4,
    position: "relative",
    backgroundColor:
      theme.palette.mode === "light"
        ? `${error ? `${theme.palette.error.light}80` : "#f3f4f6"}`
        : "#2b2b2b",
    border: "2px solid transparent", //'1px solid #ced4da',
    fontSize: 13,
    width: "100%",
    padding: "12px 14px",
    borderColor: error ? `${theme.palette.error.main}` : "none",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.009rem`,
      borderColor: error
        ? `${theme.palette.error.main}`
        : `${theme.palette.primary.main}99`,
    },
    "&:-webkit-autofill": {
      "-webkit-box-shadow": `0 0 0 100px ${
        theme.palette.mode === "light" ? "#f3f4f6" : "#2b2b2b"
      } inset`,
    },
  },
}));
export const CaField = ({ helperText, error, label, ...props }) => {
  const theme = useTheme();
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel
        sx={{ color: error ? `${theme.palette.error.main}` : "inherit" }}
        shrink
        htmlFor="ca-resume-input"
      >
        {label}
      </InputLabel>
      <BootstrapInputs {...props} error={error} />
      <Typography sx={{ marginTop: "3px" }} variant="caption" color="error">
        {error ? (
          <>
            <ErrorOutlineOutlinedIcon sx={{ fontSize: "0.75rem" }} />
          </>
        ) : (
          <></>
        )}
        <span> </span>
        {helperText}
      </Typography>
    </FormControl>
  );
};

// Login and Dashboard Field 

const LoginInputs = styled(InputBase)(({ theme, error }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    borderRadius: 6, //4,
    position: "relative",
    backgroundColor:
      theme.palette.mode === "light"
        ? `${error ? `${theme.palette.error.light}80` : "#f3f4f6"}`
        : "#2b2b2b",
    border: "2px solid transparent", //'1px solid #ced4da',
    fontSize: 14,
    width: "100%",
    padding: "10px 12px",
    borderColor: error ? `${theme.palette.error.main}` : "none",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.009rem`,
      borderColor: error
        ? `${theme.palette.error.main}`
        : `${theme.palette.primary.main}99`,
    },
    "&:-webkit-autofill": {
      "-webkit-box-shadow": `0 0 0 100px ${
        theme.palette.mode === "light" ? "#f3f4f6" : "#2b2b2b"
      } inset`,
    },
  },
}));
export const CareerAwesomeInput = ({ helperText, error, label, ...props }:any) => {
  const theme = useTheme();
  return (
    <FormControl fullWidth variant="standard">
      <Typography gutterBottom sx={{ color: error ? `${theme.palette.error.main}` : "inherit" }} variant="subtitle2">
        {label}
      </Typography>
      {/* <InputLabel
        sx={{ color: error ? `${theme.palette.error.main}` : "inherit" }}
        shrink
        htmlFor="ca-resume-input"
      >
        {label}
      </InputLabel> */}
      <BootstrapInputs {...props} error={error} />
      <Typography sx={{ marginTop: "3px" }} variant="caption" color="error">
        {error ? (
          <>
            <ErrorOutlineOutlinedIcon sx={{ fontSize: "0.75rem" }} />
          </>
        ) : (
          <></>
        )}
        <span> </span>
        {helperText}
      </Typography>
    </FormControl>
  );
};

// for the resumePage Editing 
export const EditableText = (
  { children, onChange, value, size, saveData },
  props
) => {
  const theme = useTheme();
  const [isTextFocused, setisTextFocused] = useState(false);
  const handleFocus = () => {
    setisTextFocused(true);
  };

  const removeFocus = () => {
    setisTextFocused(false);
    saveData();
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };
  return (
    <>
      {!isTextFocused ? (
        <Box
          onClick={handleFocus}
          sx={{
            display: "flex",
            border: "1px solid transparent",
            borderRadius: "4px",
            padding: "4px 1px",
            "&:hover": {
              border: `1px dashed ${theme.palette.primary.darkest}4a`,
              padding: "4px 1px",
              borderRadius: "4px",
            },
          }}
        >
          <span>{children}</span>
        </Box>
      ) : (
        <InputBase
          onBlur={removeFocus}
          autoFocus
          value={value}
          fullWidth
          size="small"
          onChange={onChange}
          {...props}
          onKeyDown={onKeyDown}
          sx={{
            display: "flex",
            border: `1px dashed ${theme.palette.primary.darkest}4a`,
            borderRadius: "4px",
            padding: "4px 1px",
            color: theme.palette.primary.darkest,
            fontSize: "1.125rem",
            fontWeight: 700,
          }}
        />
      )}
    </>
  );
};

// Edit resume Name 
export const EditResumeName = (
  { children, onChange, value, size, saveData, addLabel },
  props
) => {
  const [isTextFocused, setisTextFocused] = useState(false);
  const handleFocus = () => {
    setisTextFocused(true);
  };

  const removeFocus = () => {
    setisTextFocused(false);
    saveData();
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };
  return (
    <>
      <Box
        sx={{
          padding: "0 24px",
          maxWidth: "650px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      >
        {!isTextFocused ? (
          <Box
            onClick={handleFocus}
            sx={{
              display: "flex",
              borderBottom: "1px solid transparent",
              borderRadius: "1px",
              justifyContent: "center",
              padding: "1px 1px",
              "&:hover": {
                borderBottom: "1px solid #e9e9e9",
                justifyContent: "center",
                padding: "1px 1px",
                borderRadius: "1px",
              },
            }}
          >
            {addLabel ? (
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 500, margin: "0 12px 0 0" }}
                noWrap
              >
                Resume Name:{" "}
              </Typography>
            ) : (
              <></>
            )}

            <span>{children}</span>
          </Box>
        ) : (
          <div className="edit-resume-name-input">
            <InputBase
              onBlur={removeFocus}
              value={value}
              fullWidth
              onChange={onChange}
              sx={{
                borderBottom: "1px solid #e9e9e9",

                fontWeight: 500,
                padding: "1px 1px",
                borderRadius: "1px",
                "& .MuiInputBase-input": {
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                },
              }}
              autoFocus
              {...props}
              onKeyDown={onKeyDown}
            />
          </div>
        )}
      </Box>
    </>
  );
};

// the Switch Component 

export const Switch = ({ ...props }) => {
  const label = { componentsProps: { input: { "aria-label": "Ca switch" } } };
  return <SwitchUnstyled component={switchRoot} {...label} {...props} />;
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export const HooksFormSelect = ({
  name,
  label,
  control,
  labelId,
  defaultValue,
  children,
  ...props
}) => {
  return (
    <FormControl fullWidth {...props} variant="standard">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select input={<BootstrapInput />} {...field} labelId={labelId}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

export const CareerAwesomeSelect = ({ children, error, label, value, ...props }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography gutterBottom sx={{ color: error ? `${theme.palette.error.main}` : "inherit" }} variant="subtitle2">
        {label}
      </Typography>
      {/* <Typography
        sx={{ fontSize: "0.677rem", fontWeight: "500" }}
        gutterBottom
        color="grey.900"
        variant="body1"
      >
        {label}
      </Typography> */}
      <FormControl fullWidth>
        <Select
           label={label}
         input={<BootstrapInputs/>}
          value={value}
          {...props}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
};

export const CaEditSelect = ({ children, label, value, ...props }) => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "0.677rem", fontWeight: "500" }}
        gutterBottom
        color="grey.900"
        variant="caption"
      >
        {label}
      </Typography>
      <FormControl size="small" fullWidth>
        <Select
          value={value}
          sx={{
            fontSize: "12px",
            boxShadow: "rgb(241,243,247) 4px 8px 6px 0px",
            "& .MuiMenuItem-root": {
              fontSize: "12px",
            },
          }}
          {...props}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
};

// const iOSBoxShadow ='0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

export const CaSlider = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Grid container spacing={1}>
      <Grid item xs={9}>
        <Slider
          aria-label="ca slider"
          {...props}
          sx={{
            paddingTop: "0!important",
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 16,
              height: 16,
              backgroundColor: "#fff",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
      </Grid>
      <Grid item xs={3} style={{ paddingTop: "4px" }}>
        <Typography variant="caption" color="grey.600">
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};
