import { RootState } from "../../root.reducer";
import { ThemeName } from "../../themeToggle/duck/reducers";

const mockRootState = (state: Partial<RootState>): RootState => ({
    questions: [],
    tagFilter: null,
    theme: ThemeName.LIGHT,
    ...state
});

export default mockRootState;
