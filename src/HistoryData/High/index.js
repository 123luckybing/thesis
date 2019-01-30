import React, { Component } from 'react';
import { Form,Card,Button, Input,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class High extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
    this.search = this.search.bind(this);
  } 

  // 查询
  search() {

  }

  // 重置
  reset() {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width: '1000px'}}>
        <Card title='高校专业分地区分数线'>
          <Form layout='inline'>
            <FormItem label='高校名称'>
              {
                getFieldDecorator('highSchool')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='专业名称'>
              {
                getFieldDecorator('major')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='专业类别'>
              {
                getFieldDecorator('majorType')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='科类'>
              {
                getFieldDecorator('subject')(
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
            </FormItem>
            <FormItem label='批次'>
              {
                getFieldDecorator('band')(
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
export default Form.create()(High);