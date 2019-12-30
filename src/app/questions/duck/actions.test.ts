import actionsCreators, { ADD_QUESTION } from './actions';
import { Guid } from 'guid-typescript';

describe('questions action creators', () => {
    describe('when calling addQuestion', () => {
        it('should create the correct action', () => {
            const expectedAction = {
                type: ADD_QUESTION,
                author: 'john',
                question: 'sample question',
                tags: ['react', 'redux'],
                questionId: expect.any(Guid)
            };
            expect(actionsCreators.addQuestion(['react', 'redux'], 'sample question', 'john')).toEqual(expectedAction);
        });
    });
});
