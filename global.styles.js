const variablesStyles = '@import "./src/css/common/_vars.scss"';


const styles = [
  variablesStyles
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
