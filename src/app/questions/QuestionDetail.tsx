import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Guid } from 'guid-typescript';

export interface QuestionDetailProps {
    id: Guid;
    tags: Array<string>;
    question: string;
    author: string;
}

export class QuestionDetail extends React.PureComponent<QuestionDetailProps> {
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.question}
                    subheader={`Asked by: ${this.props.author}`}
                />
                <CardContent>
                    {this.props.tags.map(tag => <Chip key={tag} label={tag} />)}
                </CardContent>
            </Card>
        );
    }
}
