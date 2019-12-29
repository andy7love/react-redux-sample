import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../reducers';
import { selectTagFilteredQuestions } from './duck/selectors';
import React from 'react';
import { QuestionsListItem } from './QuestionsListItem';
import { Guid } from 'guid-typescript';

const mapState = (state: RootState) => ({
    questions: selectTagFilteredQuestions(state)
});

/*
TODO: adjust mapDispatch and remove unnecessary mapDispatchToProps.
const mapDispatch = {
    onQuestionClick: () => ({ type: 'TOGGLE_IS_ON' })
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}
*/

const connector = connect(
    mapState
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

class QuestionsList extends React.PureComponent<Props> {
    onQuestionClick = (id: Guid) => {
        console.log('click on question: ' + id);
    }

    render() {
        if (!this.props.questions) {
            return <p>There are no questions yet.</p>
        }

        return (
            <div>
                {this.props.questions.map(question => (
                    <QuestionsListItem
                        key={question.id.toString()}
                        id={question.id}
                        author={question.author}
                        question={question.question}
                        tags={question.tags}
                        totalAnswers={question.answers.length}
                        onClick={this.onQuestionClick}
                    />
                ))}
            </div>
        );
    }
}
export default connector(QuestionsList);
