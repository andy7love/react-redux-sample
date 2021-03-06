import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Guid } from 'guid-typescript';
import { Typography, Theme, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export interface QuestionAnwsersListItemProps {
    id: Guid;
    author: string;
    answer: string;
    saving: boolean;
}

const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => `
  margin: 20px;
  &:hover {
    box-shadow: 1px 1px 3px 3px ${theme.palette.text.secondary};
  }
`);

export class QuestionAnswersListItem extends React.PureComponent<QuestionAnwsersListItemProps> {
    render() {
        const saving = (this.props.saving) ? <CircularProgress /> : null;
        return (
            <StyledCard>
                <CardContent>
                    {saving}
                    <Typography variant="body2">{this.props.answer}</Typography>
                    <Typography variant="caption" color="textSecondary">{`Answered by: ${this.props.author}`}</Typography>
                </CardContent>
            </StyledCard>
        );
    }
}
