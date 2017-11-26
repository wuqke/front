import * as constants from '../common/constants.jsx'

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.RECEIVE_USERINFO:
            const {userInfo} = action;
            return {
                ...state,
                userInfo
            };
            break;
        default:
            return state
    }
}
