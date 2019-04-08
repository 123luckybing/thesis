import React, { Component } from 'react';
import { Form, Card, Select, Input, Button, Alert } from 'antd'
import TableList from './Table'
import data from './data'
const FormItem = Form.Item
const Option = Select.Option
class SchoolRecommend extends Component {
  constructor() {
    super();
    this.state = {
      targetData: []
    }
  }
  // 搜索
  search = () => {
    this.props.form.validateFields((err, value) => {
      if(!err){
        const targetData = data.filter((elem) => {
          const target = (value.target ? (elem.province_name === value.target): 1)
          const chance = (value.chance ? (elem.recom === value.chance): 1 )
          return target && chance
        })
        this.setState({
          targetData: targetData
        })
      }
    })
  }
  // 重置
  reset = () => {
    this.props.form.resetFields()
  }
  render() {
    let tip = (
      <div>
        <p>1、本系统数据均由高校提供，具备参考价值；</p>
        <p>2、考生输入分数，系统将根据在当省招生的高校录取情况，推荐合适的高校；</p>
        <p>3、本系统推荐的院校名单，仅供志愿参考。</p>
      </div>
    )
    const { targetData } = this.state
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title='高校推荐'>
          <Alert message={tip} type='info'/>
          <Form layout='inline' style={{ marginTop: '20px' }}>
            <FormItem label='科类'>
              {
                getFieldDecorator('subject', {
                  rules: [{
                    required: true,
                    message: '请选择科类'
                  }]
                })(
                  <Select style={{ width: 80 }}>
                    <Option value='理科'>理科</Option>
                    <Option value='文科'>文科</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='生源地'>
            {
                getFieldDecorator('province', {
                  rules: [{
                    required: true,
                    message: '请选择生源地'
                  }]
                })(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='分数'>
            {
                getFieldDecorator('score', {
                  rules: [{
                    required: true,
                    message: '请填写分数'
                  }]
                })(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='目标去向'>
            {
                getFieldDecorator('target')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='录取概率'>
            {
                getFieldDecorator('chance')(
                  <Select style={{ width: '80px' }}>
                    <Option value='冲刺'>冲刺</Option>
                    <Option value='稳妥'>稳妥</Option>
                    <Option value='保底'>保底</Option>
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
        <TableList
          targetData={targetData}
        />
      </div>
    )
  }
}
export default Form.create()(SchoolRecommend);