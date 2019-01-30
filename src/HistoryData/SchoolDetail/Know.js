import React, { Component } from 'react';
import { Form,Button,Input } from 'antd';
const FormItem = Form.Item;

class Know extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout='inline'>
          <FormItem label='请输入高校名称'>
            {
              getFieldDecorator('schoolName')(
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
export default Form.create()(Know);