import { ADD_QUESTION, ADD_QUESTION_ANSWER, QuestionActions, ADD_QUESTION_SAVED, ADD_QUESTION_ANSWER_SAVED } from "./actions";
import { Guid } from "guid-typescript";

export interface Answer {
    id: Guid;
    author: string;
    answer: string;
    saved: boolean;
}

export interface Question {
    id: Guid;
    question: string;
    author: string;
    answers: Array<Answer>;
    tags: Array<string>;
    saved: boolean;
}

export type QuestionsState = Array<Question>;

const initialState: QuestionsState = [
    {
        author: 'John Lennon',
        id: Guid.create(),
        question: 'This is a sample question?',
        tags: ['react', 'redux', 'css'],
        saved: true,
        answers: [
            {
                id: Guid.create(),
                answer: 'Sample answer',
                author: 'Luke Skywalker',
                saved: true
            },
            {
                id: Guid.create(),
                answer: 'Thanks for the anser Luke!',
                author: 'John Lennon',
                saved: true
            }
        ]
    },
    {
        author: 'Jorge Lucas',
        id: Guid.create(),
        question: 'This is another sample question?',
        tags: ['react', 'relay', 'graphql', 'websockets'],
        saved: true,
        answers: [
            {
                id: Guid.create(),
                answer: 'This should be a good answer for a good question',
                author: 'Anakin Skywalker',
                saved: true
            }
        ]
    },
    {
        author: 'Jorge Lucas',
        id: Guid.create(),
        question: 'This is specific sample question?',
        tags: ['css'],
        saved: true,
        answers: [
            {
                id: Guid.create(),
                answer: 'This should be a specific answer for that question',
                author: 'Frodo',
                saved: true
            }
        ]
    }
];

// TODO: reduce boilerplate: https://redux.js.org/recipes/reducing-boilerplate#reducers
export function questionsReducer(state: QuestionsState = initialState, action: QuestionActions): QuestionsState {
    switch (action.type) {
        case ADD_QUESTION:
            return [
                ...state,
                {
                    id: action.questionId,
                    tags: action.tags,
                    author: action.author,
                    question: action.question,
                    saved: false,
                    answers: []
                }
            ];
        case ADD_QUESTION_SAVED:
            return state.map(question => question.id !== action.questionId ? question : {
                ...question,
                saved: true
            });
        case ADD_QUESTION_ANSWER:
            return state.map(question => question.id !== action.questionId ? question : {
                ...question,
                answers: [
                    ...question.answers,
                    {
                        id: action.answerId,
                        answer: action.answer,
                        author: action.author,
                        saved: false
                    }
                ]
            });
        case ADD_QUESTION_ANSWER_SAVED:
            return state.map(question => question.id !== action.questionId ? question : {
                ...question,
                answers: question.answers.map(answer => answer.id !== action.answerId ? answer : {
                    ...answer,
                    saved: true
                })
            });
        default:
            return state;
    }
}
