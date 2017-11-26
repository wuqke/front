import * as constants from '../common/constants.jsx'

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.RECEIVE_ARTICLELIST:
            const {articleList} = action;
            return {
                ...state,
                articleList
            };
            break;
        default:
            return state
    }
}
