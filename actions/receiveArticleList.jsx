const constants = require('../common/constants.jsx');

export function receiveArticleList(articleList) {
    return {
        type: constants.RECEIVE_ARTICLELIST,
        articleList
    }
}
