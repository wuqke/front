/**
 * Created by wuqiongke703 on 17/07/25.
 */
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {DatePicker} from 'antd';
import {Router, Route, IndexRoute} from 'react-router';
import 'antd/dist/antd.css';
import env from '../common/env.js';

import ContainerComponent from './component/ContainerComponent.jsx';
import MainComponent from './component/MainComponent.jsx';
import LoginComponent from './component/LoginComponent.jsx';
import RegisterComponent from './component/RegisterComponent.jsx';

import store, {history} from '../store/store.jsx';
class RouterComponent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path={env.homePage} component={ContainerComponent}>
                        <IndexRoute component={MainComponent}/>
                        <Route path={env.login } component={LoginComponent}/>
                        <Route path={env.register } component={RegisterComponent}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}
ReactDOM.render(
    <RouterComponent/>,
    document.getElementById('main')
);

