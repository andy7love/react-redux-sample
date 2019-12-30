import { Guid } from "guid-typescript";

export const ADD_QUESTION = 'ADD_QUESTION';
export interface AddQuestionAction {
    type: typeof ADD_QUESTION;
    tags: Array<string>;
    question: string;
    questionId: Guid;
    author: string;
}
function addQuestion(tags: Array<string>, question: string, author: string): AddQuestionAction {
    return {
        type: ADD_QUESTION,
        tags,
        question,
        questionId: Guid.create(),
        author
    };
}
export const ADD_QUESTION_SAVED = 'ADD_QUESTION_SAVED';
export interface AddQuestionSavedAction {
    type: typeof ADD_QUESTION_SAVED;
    questionId: Guid;
}
function addQuestionSaved(questionId: Guid): AddQuestionSavedAction {
    return {
        type: ADD_QUESTION_SAVED,
        questionId
    };
}

export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export interface AddQuestionAnswerAction {
    type: typeof ADD_QUESTION_ANSWER;
    questionId: Guid;
    author: string;
    answer: string;
    answerId: Guid;
}
function addQuestionAnswer(questionId: Guid, author: string, answer: string): AddQuestionAnswerAction {
    return {
        type: ADD_QUESTION_ANSWER,
        questionId: questionId,
        author,
        answer,
        answerId: Guid.create()
    };
}
export const ADD_QUESTION_ANSWER_SAVED = 'ADD_QUESTION_ANSWER_SAVED';
export interface AddQuestionAnswerSavedAction {
    type: typeof ADD_QUESTION_ANSWER_SAVED;
    questionId: Guid;
    answerId: Guid;
}
function addQuestionAnswerSaved(questionId: Guid, answerId: Guid): AddQuestionAnswerSavedAction {
    return {
        type: ADD_QUESTION_ANSWER_SAVED,
        questionId,
        answerId
    };
}

export type QuestionActions = AddQuestionAction | AddQuestionAnswerAction | AddQuestionSavedAction | AddQuestionAnswerSavedAction;

export default {
    addQuestion,
    addQuestionSaved,
    addQuestionAnswer,
    addQuestionAnswerSaved
};
