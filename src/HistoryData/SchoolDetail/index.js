import React, { Component } from 'react';
import { Card,Form,Button } from 'antd';
const FormItem = Form.Item;
class SchoolDetail extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
  }

  // 点击重置按钮
  reset() {
    this.props.form.resetFields();
  }
  
  render() {
    return (
      <div style={{ width: '1000px'}}>
        <Card title='高校基本信息'>
          <Form layout='inline'>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
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
export default SchoolDetail;