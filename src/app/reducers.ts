import { combineReducers } from 'redux';
import { questionsReducer } from './questions/duck/reducers';
import { tagFilterReducer } from './tagFilter/duck/reducers';

const rootReducer = combineReducers({
    questions: questionsReducer,
    tagFilter: tagFilterReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
