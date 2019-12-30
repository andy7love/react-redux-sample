import { SET_TAG_FILTER, SetTagFilterAction } from "./actions";

export function tagFilterReducer(state: string | null = null, action: SetTagFilterAction): string | null {
    switch (action.type) {
        case SET_TAG_FILTER:
            return action.tag;
        default:
            return state;
    }
}
