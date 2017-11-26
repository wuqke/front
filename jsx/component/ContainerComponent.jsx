/**
 * Created by wuqiongke703 on 17/7/25.
 */
import React from 'react';
import {Row,Col} from 'antd';
import NavigatorComponent from './NavigatorComponent.jsx';

export default class ContainerComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" className="topaside">
                    <Col span={21}>
                        <NavigatorComponent />
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={21}>
                        <div className="container">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}