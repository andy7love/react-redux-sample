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
import { Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface QuestionListItemProps {
    id: Guid;
    tags: Array<string>;
    question: string;
    author: string;
    totalAnswers: number;
    saving: boolean;
}

const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => `
  margin-bottom: 10px;
  &:hover {
    box-shadow: 1px 1px 3px 3px ${theme.palette.text.secondary};
  }
`);

export class QuestionsListItem extends React.PureComponent<QuestionListItemProps> {
    render() {
        const saving = (this.props.saving) ? <CircularProgress /> : null;
        const url = `/${this.props.id}`;
        return (
            <StyledCard>
                <CardHeader
                    avatar={saving}
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
