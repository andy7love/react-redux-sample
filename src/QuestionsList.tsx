import React from 'react';
import { IQuestionListItemProps, QuestionsListItem } from './QuestionsListItem';

export interface IQuestionListProps {
    questions: Array<IQuestionListItemProps>;
}

export class QuestionsList extends React.PureComponent<IQuestionListProps> {
    render() {
        if(!this.props.questions) {
            return <p>There are no questions yet.</p>
        }

        return (
            <div>
                {this.props.questions.map(question => <QuestionsListItem key={question.id} {...question} />)}
            </div>
        );
    }
}