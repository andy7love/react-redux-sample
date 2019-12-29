import { ADD_QUESTION, ADD_QUESTION_ANSWER, QuestionActions } from "./actions";
import { Guid } from "guid-typescript";

export interface Answer {
    id: Guid;
    author: string;
    answer: string;
}

export interface Question {
    id: Guid;
    question: string;
    author: string;
    answers: Array<Answer>;
    tags: Array<string>;
}

export type QuestionsState = Array<Question>;

const initialState: QuestionsState = [
    {
        author: 'John Lennon',
        id: Guid.create(),
        question: 'This is a sample question?',
        tags: ['react', 'redux', 'css'],
        answers: [
            {
                id: Guid.create(),
                answer: 'Sample answer',
                author: 'Luke Skywalker'
            },
            {
                id: Guid.create(),
                answer: 'Thanks for the anser Luke!',
                author: 'John Lennon'
            }
        ]
    },
    {
        author: 'Jorge Lucas',
        id: Guid.create(),
        question: 'This is another sample question?',
        tags: ['react', 'relay', 'graphql', 'websockets'],
        answers: [
            {
                id: Guid.create(),
                answer: 'This should be a good answer for a good question',
                author: 'Anakin Skywalker'
            }
        ]
    },
    {
        author: 'Jorge Lucas',
        id: Guid.create(),
        question: 'This is specific sample question?',
        tags: ['css'],
        answers: [
            {
                id: Guid.create(),
                answer: 'This should be a specific answer for that question',
                author: 'Frodo'
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
                    answers: []
                }
            ];
        case ADD_QUESTION_ANSWER:
            return state.map(question => question.id !== action.questionId ? question : {
                ...question,
                answers: [
                    ...question.answers,
                    {
                        id: action.answerId,
                        answer: action.answer,
                        author: action.author
                    }
                ]
            });
        default:
            return state;
    }
}
