import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Guid } from 'guid-typescript';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export interface QuestionAnwsersListItemProps {
    id: Guid;
    author: string;
    answer: string;
}

const StyledCard = styled(Card)`
  margin: 20px;
  &:hover {
    box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.25);
  }
`;

export class QuestionAnswersListItem extends React.PureComponent<QuestionAnwsersListItemProps> {
    render() {
        return (
            <StyledCard>
                <CardContent>
                    <Typography variant="body2">{this.props.answer}</Typography>
                    <Typography variant="caption" color="textSecondary">{`Answered by: ${this.props.author}`}</Typography>
                </CardContent>
            </StyledCard>
        );
    }
}
