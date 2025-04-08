const variablesStyles = '@import "./scss/common/_vars.scss"';
const breakpointsStyles = '@import "./scss/common/_breakpoints.scss"';
const mixinsStyles = '@import "./scss/common/_mixins.scss"';
const resetStyles = '@import "./scss/common/_reset.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
