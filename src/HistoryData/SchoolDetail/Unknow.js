import React, { Component } from 'react';
import { Form,Button, Input,Switch } from 'antd';
const FormItem = Form.Item;
class Unknow extends Component {
  constructor() {
    super();
    // this.switchChange = this.switchChange.bind(this);
  }

  // // 是否211
  // switchChange(checked) {
  //   console.log(checked);
  // }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
       <Form layout='inline'>
            <FormItem label='高校名称'>
              {
                getFieldDecorator('band')(
                  <Input />
                )
              } 
            </FormItem>
            <FormItem label='是否985/211'>
              {
                getFieldDecorator('band')(
                  <Switch 
                    defaultChecked 
                    onChange={this.switchChange}
                  />
                )
              }
            </FormItem> 
            <FormItem label='高校所在省份'>
              {
                getFieldDecorator('band')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='高校类型'>
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
      </div>
    )
  }
}
export default Form.create()(Unknow);