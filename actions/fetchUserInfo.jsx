import * as actions from './actions.jsx';
import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();
import env from '../common/env.js';

export function fetchUserInfo() {
    return (dispatch, getState) => {
        var url = env.getCurrentLoginUser;
        fetch(url, {
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (result) {
            var code = result.code;
            if (code == "0") {
                dispatch(actions.receiveUserInfo(result.data));
            } else {
                alert(result.msg);
            }
        }.bind(this)).catch(function (error) {
            alert("请求失败，请检查网络");
            console.log(error);
        });
    }
}
