import React, { Component } from 'react';
import { Card,Form,Button,Input } from 'antd';
import data from './data'
const FormItem = Form.Item;
class HighArea extends Component {
  constructor() {
    super();
  }

  // 点击重置按钮
  reset = () => {
    this.props.form.resetFields();
  }

  // 查询
  search = () => {
    this.props.form.validateFields((err, value) => {
      if(!err) {
        console.log(data)
        console.log(value)
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: '1000px'}}>
        <Card title='高校分地区录取分数线'>
          <Form layout='inline'>
            <FormItem label='高校名称'>
              {
                getFieldDecorator('schoolName', {
                  rules: [{
                    required: true,
                    message: '请输入高校名称'
                  }]
                })(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='年份'>
            {
                getFieldDecorator('year')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='地区'>
            {
                getFieldDecorator('province')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.search}>查询</Button>
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.reset}>重置</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(HighArea);