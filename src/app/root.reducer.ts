import { combineReducers } from 'redux';
import { questionsReducer } from './questions/duck/reducers';
import { tagFilterReducer } from './tagFilter/duck/reducers';
import { themeToggleReducer } from './themeToggle/duck/reducers';

const rootReducer = combineReducers({
    questions: questionsReducer,
    tagFilter: tagFilterReducer,
    theme: themeToggleReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
