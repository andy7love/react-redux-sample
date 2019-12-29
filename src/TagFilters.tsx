import React from 'react';
import List from '@material-ui/core/List';
import { TagFiltersItem } from './TagFiltersItem';

export interface ITagItem {
    tag: string;
    totalQuestions: number;
}

export interface ITagFiltersProps {
    tags: Array<ITagItem>;
    selected: string;
}

export class TagFilters extends React.PureComponent<ITagFiltersProps> {
    handleListItemClick = (tag: string) => {
        console.log('click on tag ' + tag);
    }

    render() {
        return (
            <List component="nav" aria-label="tags filter">
                {this.props.tags.map(tag => (
                    <TagFiltersItem
                        key={tag.tag}
                        tag={tag.tag}
                        totalQuestions={tag.totalQuestions}
                        selected={tag.tag === this.props.selected}
                        onClick={this.handleListItemClick}
                    />
                ))}
            </List>
        );
    }
}