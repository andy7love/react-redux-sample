import { Epic, ofType } from 'redux-observable';
import { map, delay } from 'rxjs/operators';
import actions, { ADD_QUESTION, ADD_QUESTION_ANSWER, AddQuestionAnswerSavedAction, AddQuestionSavedAction } from './actions';

const saveAddedQuestion: Epic = (action$, state$) => action$.pipe(
    ofType(ADD_QUESTION),
    delay(2000), // This is for "simulating" server response time. We can change this for real API interactions.
    map((action: AddQuestionSavedAction) => actions.addQuestionSaved(action.questionId))
);

const saveAddedQuestionAnswer: Epic = (action$, state$) => action$.pipe(
    ofType(ADD_QUESTION_ANSWER),
    delay(2000), // This is for "simulating" server response time. We can change this for real API interactions.
    map((action: AddQuestionAnswerSavedAction) => actions.addQuestionAnswerSaved(action.questionId, action.answerId))
);

export default {
    saveAddedQuestion,
    saveAddedQuestionAnswer
};
