import { TOGGLE_THEME, ToggleThemeAction } from "./actions";
export enum ThemeName {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export function themeToggleReducer(state: ThemeName = ThemeName.LIGHT, action: ToggleThemeAction): ThemeName {
    switch (action.type) {
        case TOGGLE_THEME:
            return (state === ThemeName.DARK) ? ThemeName.LIGHT : ThemeName.DARK;
        default:
            return state;
    }
}
