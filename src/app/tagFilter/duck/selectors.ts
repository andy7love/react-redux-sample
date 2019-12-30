import { createSelector } from 'reselect'
import { RootState } from '../../root.reducer'
import _ from 'lodash';

export interface TagFilter {
    tag: string;
    totalQuestions: number;
}

// TODO: test this method and remove reduce.
export const selectAllAvailableTags = createSelector(
    (state: RootState) => state.questions,
    (questions): Array<TagFilter> => _
        .chain(questions)
        .castArray()
        //.reduce((tags: Array<string>, question) => tags.concat(question.tags), [])
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
