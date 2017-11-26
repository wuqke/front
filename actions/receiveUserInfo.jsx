const constants = require('../common/constants.jsx');

export function receiveUserInfo(userInfo) {
    return {
        type: constants.RECEIVE_USERINFO,
        userInfo
    }
}
