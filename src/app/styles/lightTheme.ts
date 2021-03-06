import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        type: 'light'
    }
});
theme = responsiveFontSizes(theme);

export default theme;
