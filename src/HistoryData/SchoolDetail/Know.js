import React, { Component } from 'react';
import data from './data/schoolDetail'
import KnowTable from './KnowTable'

import { Form,Button,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option

class Know extends Component {
  constructor() {
    super()
    this.state = {
      detail: []
    }
  }
  search = () => {
    this.props.form.validateFields( (err,value) => {
      if(!err) {
        const targetData = data.filter((elem) => {
          return elem.school_id === value.schoolId
        })
        this.setState({
          detail: targetData
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { detail } = this.state;
    return (
      <div>
        <Form layout='inline'>
          <FormItem label='请输入高校名称'>
            {
              getFieldDecorator('schoolId', {
                rules: [{
                  required: true,
                  message: '高校名称不能为空'}]
              })(
                <Select style={{ width: '180px' }}>
                  <Option value='3'>东北林业大学</Option>
                  <Option value='1'>东北农业大学</Option>
                  <Option value='2'>哈尔滨工程大学</Option>
                  <Option value='4'>哈尔滨工业大学</Option>
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
        <KnowTable
          data={detail}
        />
      </div>
    )
  }
}
export default Form.create()(Know);