import { createSelector } from 'reselect'
import { RootState } from '../../reducers'

export const selectTagFilteredQuestions = createSelector(
    (state: RootState) => state.questions,
    (state: RootState) => state.tagFilter,
    (questions, tagFilter) => tagFilter === null ? questions :
        questions.filter(question => question.tags.includes(tagFilter))
);
