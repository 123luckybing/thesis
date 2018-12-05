import React, { Component } from 'react';
import { Form,Card,Button } from 'antd';
const FormItem = Form.Item;
class High extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
  }

  // 重置
  reset() {
    this.props.form.resetFields();
  }

  render() {
    return (
      <div style={{width: '1000px'}}>
        <Card title='高校专业分地区分数线'>
          <Form layout='inline'>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
            <FormItem></FormItem>
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
export default High;