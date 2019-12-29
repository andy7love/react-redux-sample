import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../reducers';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { QuestionDetail } from './QuestionDetail';
import { QuestionAnswersList } from './QuestionAnswersList';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const mapState = (state: RootState, props: RouteComponentProps<{ id: string }>) => ({
    question: state.questions.find(question => question.id.toString() === props.match.params.id)
});

const connector = connect(
    mapState
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

class QuestionsList extends React.PureComponent<Props> {
    render() {
        if (!this.props.question) {
            return <p>Question not found.</p>
        }

        return (
            <div>
                <QuestionDetail
                    id={this.props.question.id}
                    author={this.props.question.author}
                    question={this.props.question.question}
                    tags={this.props.question.tags}
                />

                <QuestionAnswersList
                    answers={this.props.question.answers}
                />

                <Button aria-label="answers" component={RouterLink} to="/">
                    Return to list
                </Button>
            </div>
        );
    }
}
export default connector(QuestionsList);
