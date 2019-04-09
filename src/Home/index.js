import React, { Component } from 'react';
import { Row,Col } from 'antd';
import Menu from '../Menu';
class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col  span={5}>
            <Menu />
          </Col>
          <Col span={19}>
            <div style={{ height: '100vh', overflow: 'scroll' }}>
              {this.props.children}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Home;