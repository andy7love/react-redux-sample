import { Guid } from 'guid-typescript';
import { selectAllAvailableTags, TagFilter } from './selectors';
import { RootState } from '../../root.reducer';
import mockRootState from '../../utils/tests/mockRootState';

const mockState: RootState = mockRootState({
    questions: [
        {
            author: 'john',
            question: 'sample question',
            tags: ['react', 'redux'],
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

describe('tagFilter selectors', () => {
    describe('when using selectAllAvailableTags', () => {
        it('should return correct tags with correct amount of related questions', () => {
            const expected: Array<TagFilter> = [
                {
                    tag: 'react',
                    totalQuestions: 2
                },
                {
                    tag: 'redux',
                    totalQuestions: 1
                }
            ];
            expect(
                selectAllAvailableTags(mockState)
            ).toEqual(expected);
        });
    });
});
