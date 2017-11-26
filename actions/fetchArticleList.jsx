import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();
import * as actions from './actions.jsx';
import env from '../common/env.js';

export function fetchArticleList() {
    return (dispatch, getState) => {
        fetch(env.getArticleList, {
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            }
            // body: formData
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (result) {
            var code = result.code;
            if (code == "0") {
                dispatch(actions.receiveArticleList(result.data))
            }
        }.bind(this)).catch(function (error) {
            alert("请求失败，请检查网络");
            dispatch(actions.receiveArticleList([]))
        });
    }
}
