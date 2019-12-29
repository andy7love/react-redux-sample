import { createSelector } from 'reselect'
import { RootState } from '../../reducers'
import darkTheme from '../../styles/darkTheme';
import lightTheme from '../../styles/lightTheme';
import { ThemeName } from './reducers';

export const selectCurrentTheme = createSelector(
    (state: RootState) => state.theme,
    themeName => (themeName === ThemeName.DARK) ? darkTheme : lightTheme
);
