/**
 * Created by wuqiongke703 on 17/7/25.
 */
import React from 'react';
import {Row,Col,Form, Icon, Input, Button, Checkbox,message} from 'antd';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
import env from '../../common/env.js';
import common from '../../common/common.js';
import {browserHistory} from 'react-router';
import {fetchBankList, fetchBspInfo, emptyBspInfo} from '../../actions/actions.jsx';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

const FormItem = Form.Item;

export default class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginObj: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = env.homePage;
    };

    changeValue(name, obj) {
        var loginObj = this.state.loginObj;
        loginObj[name] = obj.target.value;
        this.setState({
            loginObj: loginObj
        });
    }


    render() {


        return (
            <div>
                <Row type="flex" justify="center">
                    <h1>登陆</h1>
                </Row>
                <Row type="flex" justify="center" className="components-login standard-margin-top">
                    <Col span={8}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名"
                                       size="large" value={this.state.loginObj.account}
                                       onChange={this.changeValue.bind(this,"account")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password"
                                       size="large" placeholder="密码" value={this.state.loginObj.password}
                                       onChange={this.changeValue.bind(this,"password")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password"
                                       size="large" placeholder="确认密码" value={this.state.loginObj.passwordConfirm}
                                       onChange={this.changeValue.bind(this,"passwordConfirm")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="真实姓名"
                                       size="large" value={this.state.loginObj.name}
                                       onChange={this.changeValue.bind(this,"name")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名"
                                       size="large" value={this.state.loginObj.userName}
                                       onChange={this.changeValue.bind(this,"userName")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="性别，1男，2女"
                                       size="large" value={this.state.loginObj.sex}
                                       onChange={this.changeValue.bind(this,"sex")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="公司"
                                       size="large" value={this.state.loginObj.company}
                                       onChange={this.changeValue.bind(this,"company")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="电话"
                                       size="large" value={this.state.loginObj.telephone}
                                       onChange={this.changeValue.bind(this,"telephone")}/>
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="电子邮件"
                                       size="large" value={this.state.loginObj.email}
                                       onChange={this.changeValue.bind(this,"email")}/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    提 交
                                </Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}