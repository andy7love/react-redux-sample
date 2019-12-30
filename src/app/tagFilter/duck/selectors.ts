import { createSelector } from 'reselect'
import { RootState } from '../../root.reducer'
import _ from 'lodash';

export interface TagFilter {
    tag: string;
    totalQuestions: number;
}

export const selectAllAvailableTags = createSelector(
    (state: RootState) => state.questions,
    (questions): Array<TagFilter> => _
        .chain(questions)
        .castArray()
        .flatMap(question => question.tags)
        .groupBy()
        .mapValues((value, key): TagFilter => (
            {
                tag: key,
                totalQuestions: value.length
            }
        ))
        .toArray()
        .value()
);
