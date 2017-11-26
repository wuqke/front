/**
 * Created by wuqiongke703 on 17/7/25.
 */
import React from 'react';
import {Menu, Row, Col, Dropdown} from 'antd';
import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';
require('es6-promise').polyfill();
import {createSelector} from 'reselect'

import common from '../../common/common.js';
import env from '../../common/env.js';
import {fetchUserInfo} from '../../actions/actions.jsx';

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            fetchUserInfo: () => dispatch(fetchUserInfo())
        }
    }
};

// Map Redux state to component props
const mapStateToProps = createSelector(
    state => state.userInfo.userInfo,
    (userInfo) => {
        return {
            userInfo
        }
    }
);

@connect(mapStateToProps, mapDispatchToProps)
export default class NavigatorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMenuClick(e) {
        if (e.key == '0') {
            window.location.href = env.login
        }
        //else if (e.key == '2') {
        //    const {userInfo} = this.props;
        //    if (common.isNotEmpty(userInfo)) {
        //        window.open(userInfo.changePassWordUrl);
        //    }
        //}
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchUserInfo();
    }

    render() {
        var userHtml = "";
        const {userInfo} = this.props;
        if (common.isNotEmpty(userInfo) && common.isNotEmpty(userInfo.name)) {
            userHtml = ( <Col span={8} offset={8} className="topside-name">
                <Dropdown trigger={['click']}
                          overlay={<Menu onClick={this.handleMenuClick.bind(this)}>
                              <Menu.Item key="0">退出</Menu.Item></Menu>}>
                    <div className="username cursor-pointer">{userInfo.name}</div>
                </Dropdown>
            </Col>);
        }

        return (
            <Row>
                <Col span={8} className="topside-title">
                    <a href="/">
                        咸鱼小站
                    </a>
                </Col>
                {/*
                 <Menu theme="dark" mode="horizontal"
                 defaultSelectedKeys={['2']} style={{lineHeight: '52px'}}>
                 <Menu.Item key="1">功能1</Menu.Item>
                 <Menu.Item key="2">功能2</Menu.Item>
                 </Menu>
                 */}
                {userHtml}
            </Row>

        );
    }
}