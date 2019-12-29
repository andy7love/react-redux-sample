export const TOGGLE_THEME = 'TOGGLE_THEME';
export interface ToggleThemeAction {
    type: typeof TOGGLE_THEME;
};
function toggleTheme(): ToggleThemeAction {
    return { type: TOGGLE_THEME }
}

export default {
    toggleTheme
};
