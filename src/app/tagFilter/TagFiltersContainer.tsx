import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../reducers';
import { selectAllAvailableTags } from './duck/selectors';
import tagFilterOperations from './duck/operations';
import React from 'react';
import { TagFiltersItem } from './TagFiltersItem';
import List from '@material-ui/core/List';

const mapState = (state: RootState) => ({
    tags: selectAllAvailableTags(state),
    tagFilter: state.tagFilter,
    totalQuestions: state.questions.length
});

const mapDispatch = {
    onTagFilerClick: (tag: string) => (tag === 'All' ?
        tagFilterOperations.setTagFilter(null) :
        tagFilterOperations.setTagFilter(tag))
}

/*
TODO: remove unnecesary dispatch to props.
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}
*/

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

class TagFilters extends React.PureComponent<Props> {
    render() {
        return (
            <List component="nav" aria-label="tags filter">
                <TagFiltersItem
                    key="all"
                    tag="All"
                    totalQuestions={this.props.totalQuestions}
                    selected={this.props.tagFilter === null}
                    onClick={this.props.onTagFilerClick}
                />
                {this.props.tags.map(tag => (
                    <TagFiltersItem
                        key={tag.tag}
                        tag={tag.tag}
                        totalQuestions={tag.totalQuestions}
                        selected={tag.tag === this.props.tagFilter}
                        onClick={this.props.onTagFilerClick}
                    />
                ))}
            </List>
        );
    }
}
export default connector(TagFilters);
