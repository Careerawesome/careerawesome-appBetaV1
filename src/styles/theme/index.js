import {React, Fragment, useEffect, useMemo} from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import palette from './palette';
import shape from "./shape";
import typography from './typography';
import shadows, { customShadows } from './shadows';
import { CacheProvider, createCache } from '@emotion/react';
export default function ThemeWrapper(props) {
    const themeOptions = useMemo(
        () => ({
        breakpoints:{
            values:{
                xs:0,
                sm: 768,
                md: 960,
                lg: 1240,
                xl: 1920,
            },
        },
          palette,
          typography,
          shape,
        //   shadows,
        //   customShadows
        }),
        []
    );
    const DarkTheme = createTheme({
        breakpoints:{
            values:{
                xs:0,
                sm: 768,
                md: 960,
                lg: 1200,
                xl: 1920,
            },
        },
        palette: {
            mode:"dark",
        },
       
    });
    const DarkThemes = responsiveFontSizes(DarkTheme);
    const LightThemes = createTheme(themeOptions)
    return (
        <Fragment>
            <StyledEngineProvider>
                <ThemeProvider theme={props.mode == "dark" ? DarkThemes: LightThemes}>
                    <CssBaseline/>
                    {props.children}
                </ThemeProvider>
            </StyledEngineProvider>
        </Fragment>
    )
}

