import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import { isArray, isEqual } from 'lodash';
import ChartTab from './tab';

export default class View extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data === undefined) {
            return { ...nextProps };
        } else {
            return prevState;
        }
    }
    render() {
        const { title, data, config, rows } = this.state;
        const handleBlur = (data) => {
            this.setState({
                data
            });
        };
        const children = isArray(this.props.children) ?
            this.props.children.map((o, i) => {
                return React.cloneElement(o, { data })
            }) :
            React.cloneElement(this.props.children, { data });
        const handleChange = (prop) => {
            this.setState({
                prop
            });
        }
        return (
            <Card title={title} bordered={false} bodyStyle={{ padding: '0 10px' }}>
                <Row gutter={16}>
                    <Col span={10}>
                        <ChartTab
                            data={data}
                            onBlur={handleBlur}
                            rows={rows}
                            config={config}
                            handleChange={handleChange}
                        />
                    </Col>
                    <Col span={14}>
                        {children}
                    </Col>
                </Row>
            </Card>
        );
    }
}