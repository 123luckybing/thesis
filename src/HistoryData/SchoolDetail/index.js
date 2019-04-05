import React, { Component } from 'react';
import Know from './Know';
import Unknow from './Unknow'
import { Card,Form,Radio } from 'antd';
const RadioGroup = Radio.Group;

class SchoolDetail extends Component {
  constructor() {
    super();
    this.state = {
      radioValue: 'know',
    }
    this.reset = this.reset.bind(this);
    this.radioChange = this.radioChange.bind(this);
  }

  // 单选按钮
  radioChange(e) {
    this.setState({
      radioValue: e.target.value,
    });
  }

  // 点击重置按钮
  reset() {
    this.props.form.resetFields();
  }
  
  render() {
    const { radioValue } = this.state;
    return (
      <div style={{ width: '1000px'}}>
        <Card title='高校基本信息'>
        <span>请选择：</span>
          <RadioGroup
            onChange={this.radioChange}
            value={radioValue}
          >
            <Radio value='know'>已知高校查询信息</Radio>
            <Radio value='unknow'>查询符合条件的高校</Radio>
          </RadioGroup>
          <br/><br/>
          {/* 根据单选按钮显示不同查询框 */}
          {
            radioValue === 'know' ? <Know />  : <Unknow />
          }
          
        </Card>
        
      </div>
    )
  }
}
export default Form.create()(SchoolDetail);