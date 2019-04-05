import React, { Component } from 'react';
import axios from 'axios'
import './index.css'
import { Form,Button,Input, Card } from 'antd';
const FormItem = Form.Item;

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
        axios.get('/api/history/school', {
          params: value
        }).then((res) => {
          console.log(res.data.data)
          this.setState({
            dataList: res.data.data[0]
          })
        }).catch((err) => {
          console.log(err)
        })
        console.log(value);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataList } = this.state
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
          {
            dataList && dataList.school_name ? (
              <Card>
                <Form layout='horizontal'>
                  <FormItem label='学校名称'>{dataList.school_name}</FormItem>
                  <FormItem label='学校简介'>
                    <div style={{ textAlign: 'justify' }}>{dataList.school_description}</div>
                  </FormItem>
                  <FormItem label='学校地址'>{dataList.address}</FormItem>
                  <FormItem label='学校邮箱'>{dataList.email}</FormItem>
                  <FormItem label='学校类别'>{dataList.school_type}</FormItem>
                  <FormItem label='学校批次'>{dataList.school_level}</FormItem>
                  <FormItem label='就业率'>{dataList.work_rate}%</FormItem>
                </Form>
              </Card>
              ) : null
          }
      </div>
    )
  }
}
export default Form.create()(Know);