import React, { Component } from 'react';
import { Card,Form,Button,Select, InputNumber } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class Area extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
    this.search = this.search.bind(this);
  }

  // 点击查询按钮
  search() {
    this.props.form.validateFields( (err,value) => {
      if(!err) {
        console.log(value);
      }
    });
  }

  // 点击重置按钮
  reset() {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: '1000px' }}>
       <Card title='地区批次线查询'>
        <Form layout='inline'>
          <FormItem label='生源地省份'>
            {
               getFieldDecorator('province')(
                <Select style={{ width: 100}}>
                  <Option value='wen'>文科</Option>
                  <Option value='li'>理科</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label='年份'>
            {
              getFieldDecorator('year')(
                <InputNumber />
              )
            }
          </FormItem>
          <FormItem label='科类'>
            {
              getFieldDecorator('type')(
                <Select style={{ width: 100}}>
                  <Option value='wen'>文科</Option>
                  <Option value='li'>理科</Option>
                </Select>
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
export default Form.create()(Area);