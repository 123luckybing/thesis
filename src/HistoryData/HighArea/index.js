import React, { Component } from 'react';
import { Card,Form,Button,Input } from 'antd';
const FormItem = Form.Item;
class HighArea extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
  }

  // 点击重置按钮
  reset() {
    this.props.form.resetFields();
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: '1000px'}}>
        <Card title='高校分地区录取分数线'>
          <Form layout='inline'>
            <FormItem label='高校名称'>
              {
                getFieldDecorator('schoolName')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='科类'>
            {
                getFieldDecorator('subjectName')(
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
            <FormItem label='高校所在省份'>
            {
                getFieldDecorator('province')(
                  <Input />
                )
              }
              1
            </FormItem>
            <FormItem label='批次'>
            {
                getFieldDecorator('band')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem>
              <Button type='primary'>查询</Button>
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