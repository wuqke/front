/**
 * Created by wuqiongke703 on 17/7/25.
 */
import React from 'react';
import {Row, Col, message, Button, Affix, Tooltip, Modal, Input} from 'antd';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
import {createSelector} from 'reselect'
import {browserHistory} from 'react-router';

import env from '../../common/env.js';
import common from '../../common/common.js';
import {fetchArticleList} from '../../actions/actions.jsx';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            fetchArticleList: () => dispatch(fetchArticleList())
        }
    }
};


// Map Redux state to component props
const mapStateToProps = createSelector(
    state => state.articleList.articleList,
    (articleList) => {
        return {
            articleList
        }
    }
);


@connect(mapStateToProps, mapDispatchToProps)
export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    loadData() {
        const {actions} = this.props;
        actions.fetchArticleList();
    }


    componentDidMount() {
        this.loadData();
    }

    render() {
        var articleListHtml = [];
        const {articleList} = this.props;
        if (common.isNotEmpty(articleList) && articleList.length > 0) {
            for (var i = 0; i < articleList.length; i++) {
                articleListHtml.push(
                    <tr key={i}>
                        <td className="td-align-center" style={{width:"50%"}}>
                            <a href="" target="_blank">{articleList[i].title}</a>
                        </td>
                        <td className="td-align-center" style={{width:"25%"}}>{articleList[i].creator}</td>
                        <td className="td-align-center"
                            style={{width:"25%"}}>{articleList[i].commentNum}/{articleList[i].readedNum}</td>
                    </tr>
                )
            }
        }
        return (
            <div>
                <Row type="flex" justify="center">
                    <h1>博文列表</h1>
                </Row>
                <Row type="flex" className="add-code-lib-row standard-margin-top">
                    <Col span={24}>
                        <div className="code-manage-main">
                            <table>
                                <thead>
                                <tr>
                                    <th className="td-align-center">标题</th>
                                    <th className="td-align-center">作者</th>
                                    <th className="td-align-center">回复/查看</th>
                                </tr>
                                </thead>
                                <tbody>
                                {articleListHtml}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}