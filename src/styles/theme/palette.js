import { alpha } from '@mui/material/styles';


function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

//Color for notAcive elements Neutral
const UNACTIVE = {
  light:"#EFF0F6",
  main:"#A0A3BD",
  dark:"#6E7191",
  darker:"#4E4B66",
}

//color for the Typography By Default intead of using black We use this one
const FONTCOLOR = {
  lighter:"#525EC5",
  light:"#262F8B",
  main:"#1A202C",
  dark:"#010535",
  darker:"#01032C"
}

// Primary color
const PRIMARY = {
  light: '#3E99FB',
  main: '#006DF9',
  dark: '#0054D6',
  darker:"#003EB3",
  darkest:"#002C90",
  contrastText: '#fff'
};

// Secondary Color

const SECONDARY = {
   lighter:"#FDCECD",
  light: '#FC9DA4',
  main: '#E60D5F',
  dark: '#C50963',
  darker:"#6E0256",
  contrastText: '#fff'
};

// Information 
const INFO = {
  lighter: '#A9B9FD',
  light: '#93A5FB',
  main: '#7085F9',
  dark: '#5164D6',
  darker: '#3847B3',
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#5AC42D',
  dark: '#2A8D16',
  darker: '#2A8D16',
  contrastText: GREY[800]
};
const WARNING = {
  lighter: '#FFD066',
  light: '#FFBC3F',
  main: '#FF9D00',
  dark: '#DB7E00',
  darker: '#B76200',
  contrastText: GREY[800]
};
// Error
const ERROR = {
  lighter: '#FFA18D',
  light: '#FF7D71',
  main: '#FF4242',
  dark: '#DB303F',
  darker: '#B7213B',
  contrastText: '#fff'
};

const GRADIENTS = {
  fontColor:createGradient(FONTCOLOR.light, FONTCOLOR.main),
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

// const CHART_COLORS = {
//   violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
//   blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
//   green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
//   yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
//   red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
// };
// Create For chart Colors Later

const palette = {
  common: { black: '#000', white: '#fff' },
  unactive:{...UNACTIVE}, //Not active color
  primary: { ...PRIMARY },
  font:{...FONTCOLOR},
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  // chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

export default palette;