import { questionsReducer } from './reducers';
import actionsCreators, { ADD_QUESTION } from './actions';
import { Guid } from 'guid-typescript';

describe('questions reducers', () => {
    it('should handle ADD_QUESTION action', () => {
        expect(
            questionsReducer([], actionsCreators.addQuestion(['redux'], 'sample question', 'john'))
        ).toEqual([
            {
                author: 'john',
                question: 'sample question',
                tags: ['redux'],
                id: expect.any(Guid),
                answers: [],
                saved: false
            }
        ]);
    });
});
