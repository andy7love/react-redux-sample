import { Guid } from 'guid-typescript';
import { selectTagFilteredQuestions } from './selectors';
import { RootState } from '../../root.reducer';
import mockRootState from '../../utils/tests/mockRootState';

const mockState: RootState = mockRootState({
    questions: [
        {
            author: 'john',
            question: 'sample question',
            tags: ['redux'],
            id: Guid.create(),
            answers: [],
            saved: true
        },
        {
            author: 'doe',
            question: 'other sample question',
            tags: ['react'],
            id: Guid.create(),
            answers: [],
            saved: true
        }
    ]
});

describe('questions selectors', () => {
    describe('when using selectTagFilteredQuestions', () => {
        it('should not filter questions when tagFilter is null', () => {
            expect(
                selectTagFilteredQuestions({
                    ...mockState,
                    tagFilter: null
                })
            ).toEqual(mockState.questions);
        });
        it('should filter correct questions when tagFilter is setted', () => {
            expect(
                selectTagFilteredQuestions({
                    ...mockState,
                    tagFilter: 'react'
                })
            ).toEqual([mockState.questions[1]]);
        });
    });
});
