import React from 'react';
import ThemeToggleContainer from './themeToggle/ThemeToggleContainer';
import Grid from '@material-ui/core/Grid';

export const Header = () => (
    <header>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Grid item xs>
                <h1>Open Questions</h1>
            </Grid>
            <Grid item xs={'auto'}>
                <ThemeToggleContainer />
            </Grid>
        </Grid>
    </header>
);
