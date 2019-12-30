import { combineEpics } from 'redux-observable';
import questionEpics from './questions/duck/epics';

export const rootEpic = combineEpics<any>(
    questionEpics.saveAddedQuestion,
    questionEpics.saveAddedQuestionAnswer
);

export default rootEpic;
