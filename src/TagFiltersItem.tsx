import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Chip, ListItemSecondaryAction } from '@material-ui/core';

export interface ITagFiltersItemProps {
    tag: string;
    selected: boolean;
    totalQuestions: number;
    onClick: (tag: string) => void;
}

export class TagFiltersItem extends React.PureComponent<ITagFiltersItemProps> {
    handleListItemClick = () => {
        this.props.onClick(this.props.tag);
    }

    render() {
        return (
            <ListItem
                button
                selected={this.props.selected}
                onClick={this.handleListItemClick}
            >
                <ListItemText primary={this.props.tag} />
                <ListItemSecondaryAction>
                    <Chip label={this.props.totalQuestions} variant="outlined" />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}