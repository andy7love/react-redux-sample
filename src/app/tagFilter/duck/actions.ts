export const SET_TAG_FILTER = 'SET_TAG_FILTER';
export interface SetTagFilterAction {
    type: typeof SET_TAG_FILTER;
    tag: string | null;
};
function setTagFilter(tag: string | null): SetTagFilterAction {
    return { type: SET_TAG_FILTER, tag }
}

export default {
    setTagFilter
};
