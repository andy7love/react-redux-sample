import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../root.reducer';
import themeToggleActions from './duck/actions'
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeName } from './duck/reducers';
import Grid from '@material-ui/core/Grid';

const mapState = (state: RootState) => ({
    theme: state.theme
});

const mapDispatch = {
    onClickToggle: () => themeToggleActions.toggleTheme()
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

class ThemeToggleContainer extends React.PureComponent<Props> {
    render() {
        return (
            <div>
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Light</Grid>
                    <Grid item>
                        <Switch
                            checked={this.props.theme === ThemeName.DARK}
                            onChange={this.props.onClickToggle}
                        />
                    </Grid>
                    <Grid item>Dark</Grid>
                </Grid>
            </div>
        );
    }
}
export default connector(ThemeToggleContainer);
