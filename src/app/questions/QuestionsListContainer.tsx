import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../root.reducer';
import { selectTagFilteredQuestions } from './duck/selectors';
import React from 'react';
import { QuestionsListItem } from './QuestionsListItem';
import Grid from '@material-ui/core/Grid';
import TagFiltersContainer from '../tagFilter/TagFiltersContainer';
import QuestionFormContainer from './QuestionFormContainer';

const mapState = (state: RootState) => ({
    questions: selectTagFilteredQuestions(state)
});

const connector = connect(
    mapState
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

class QuestionsList extends React.PureComponent<Props> {
    render() {
        if (!this.props.questions) {
            return <p>There are no questions yet.</p>
        }

        return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <TagFiltersContainer />
                </Grid>
                <Grid item xs={12} md={9}>
                    {this.props.questions.map(question => (
                        <QuestionsListItem
                            key={question.id.toString()}
                            id={question.id}
                            author={question.author}
                            question={question.question}
                            tags={question.tags}
                            saving={!question.saved}
                            totalAnswers={question.answers.length}
                        />
                    ))}

                    <QuestionFormContainer />
                </Grid>
            </Grid>
        );
    }
}
export default connector(QuestionsList);
