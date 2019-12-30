import React from 'react';
import { Guid } from 'guid-typescript';
import { QuestionAnswersListItem } from './QuestionAnswersListItem';

export interface AnswerItem {
    id: Guid;
    author: string;
    answer: string;
    saved: boolean;
}

export interface QuestionAnswersListProps {
    answers: Array<AnswerItem>;
}

export class QuestionAnswersList extends React.PureComponent<QuestionAnswersListProps> {
    render() {
        return (
            <div>
                {this.props.answers.map(answer => (
                    <QuestionAnswersListItem
                        key={answer.id.toString()}
                        id={answer.id}
                        answer={answer.answer}
                        author={answer.author}
                        saving={!answer.saved}
                    />
                ))}
            </div>
        );
    }
}
