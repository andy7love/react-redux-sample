import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import { Guid } from 'guid-typescript';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

export interface QuestionListItemProps {
    id: Guid;
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

export class QuestionsListItem extends React.PureComponent<QuestionListItemProps> {
    render() {
        const url = `/${this.props.id}`;
        return (
            <StyledCard>
                <CardHeader
                    action={
                        <Button aria-label="answers" component={RouterLink} to={url}>
                            Answers: {this.props.totalAnswers}
                        </Button>
                    }
                    title={
                        <Link href="#" component={RouterLink} to={url}>
                            {this.props.question}
                        </Link>
                    }
                    subheader={`Asked by: ${this.props.author}`}
                />
                <CardContent>
                    {this.props.tags.map(tag => <Chip key={tag} label={tag} />)}
                </CardContent>
            </StyledCard>
        );
    }
}
