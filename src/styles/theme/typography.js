function pxToRem(value) {
    return `${value / 16}rem`;
  }
  
  function responsiveFontSizes({ sm, md, lg }) {
    return {
      '@media (min-width:600px)': {
        fontSize: pxToRem(sm)
      },
      '@media (min-width:900px)': {
        fontSize: pxToRem(md)
      },
      '@media (min-width:1200px)': {
        fontSize: pxToRem(lg)
      }
    };
  }
  
  const FONT_PRIMARY = `"Montserrat", sans-serif`;
  
  const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 600,
      color:"#132c38",
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }) // Before sm: 52, md: 58, lg: 64 increased by 4
    },
    h2: {
      fontWeight: 700,
      color:"#132c38",
      lineHeight: 64 / 48,
      fontSize: pxToRem(36), //was 32 before
      ...responsiveFontSizes({ sm: 46, md: 50, lg: 54 }) // was 40 44 48 before
    },
    h3: {
      fontWeight: 600,
      color:"#132c38",
     lineHeight: 1.5,
      fontSize: pxToRem(24),
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }), // Increased By 4 Md was 30 and lg was 32 Before
    },
    h4: {
      fontWeight: 600,
      color:"#132c38",
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }) // ({ sm: 20, md: 24, lg: 24 })
    },
    h5: {
      fontWeight: 600,
      color:"#132c38",
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
    },
    h6: {
      fontWeight: 600,
      color:"#132c38",
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.6, // Normal is 1.5
      color:"#132538",
      fontSize: pxToRem(16)
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: 22 / 14,
      color:"#132538",
      fontSize: pxToRem(14)
    },
    body1: {
      lineHeight: 1.6,
      fontFamily:"Poppins",
      color:"#132538cc",
      fontSize: pxToRem(16)
    },
    body2: {
      lineHeight: 22 / 14,
      fontFamily:"Poppins",
      color:"#132538cc",
      fontSize: pxToRem(14)
    },
    caption: {
      lineHeight: 1.5,
      fontFamily:"Poppins",
      color:"#132538cc",
      fontSize: pxToRem(12)
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      letterSpacing: 1.1,
      textTransform: 'uppercase'
    },
    button: {
      fontWeight: 500,
      lineHeight: 33 / 14,
      fontSize: pxToRem(14),
      fontFamily:"Poppins",
      textTransform: 'capitalize'
    }
  };
  
  export default typography;