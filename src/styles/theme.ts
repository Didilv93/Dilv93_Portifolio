interface IThemeColors {
  primary: string;
  success: string;
  text: string;
  heading: string;
  greyLight: string;
  greyBluish: string;
  greyMed: string;
}

interface IThemeHeroGalaxy {
  brightWhite: string;
  brightBlue: string;
  brightStars: string;
}

interface IThemeBoxShadow {
  default: string;
  low: string;
  raised: string;
}

interface IThemeTransitions {
  default: string;
  fast: string;
  slow: string;
}

interface IThemeMaxContainer {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface ITheme {
  colors: IThemeColors;
  heroGalaxy: IThemeHeroGalaxy;
  boxShadow: IThemeBoxShadow;
  transitions: IThemeTransitions;
  maxContainer: IThemeMaxContainer;
}

export const theme: ITheme = {
  colors: {
    primary: 'rgb(0, 0, 4)',
    success: '#3DC670',
    text: '#474747',
    heading: '#362e5c',
    greyLight: '#f1f1f1',
    greyBluish: '#dfe6e9',
    greyMed: '#636e72',
  },

  heroGalaxy: {
    brightWhite: 'rgba(255,255,255,0.2)',
    brightBlue: 'rgba(51,102,204,.1)',
    brightStars:'rgba(255,255,255,0.8',
  },

  boxShadow: {
    default: '0 4px 4px rgba(0,0,0,.24)',
    low: '0 2px 2px rgba(0,0,0,.16)',
    raised: '0 6px 6px rgba(0,0,0,.32)',
  },
  transitions: {
    default: '.25s ease',
    fast: '.15s ease',
    slow: '.45s ease',
  },
  maxContainer: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1500px',
  },
};

export default theme;