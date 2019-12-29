import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

export interface IQuestionListItemProps {
    id: number;
    tags: Array<string>;
    question: string;
    author: string;
    totalAnswers: number;
}

const StyledCard = styled(Card)`
  margin-bottom: 10px;
  &:hover {
    box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.25);
  }
`;

export class QuestionsListItem extends React.PureComponent<IQuestionListItemProps> {
    render() {
        return (
            <StyledCard>
                <CardHeader
                    action={
                        <Button aria-label="answers">
                            Answers: {this.props.totalAnswers}
                        </Button>
                    }
                    title={this.props.question}
                    subheader={`Asked by: ${this.props.author}`}
                />
                <CardContent>
                    {this.props.tags.map(tag => <Chip key={tag} label={tag} />)}
                </CardContent>
            </StyledCard>
        );
    }
}