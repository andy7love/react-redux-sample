import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#000',
            paper: '#333'
        },
        primary: {
            main: '#4fc3f7',
        },
        secondary: {
            main: '#ffa000',
        },
        text: {
            primary: '#fff',
            disabled: '#ccc',
            hint: '#ddd',
            secondary: '#ddd'
        }
    }
});
theme = responsiveFontSizes(theme);

export default theme;
