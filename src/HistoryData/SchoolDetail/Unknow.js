import React, { Component } from 'react';
import { Form,Button, Input,Radio, Table } from 'antd';
import data from './data/schoolDetail'
const FormItem = Form.Item;
const RadioGroup = Radio.Group
let columns = [{
  title: '学校名称',
  dataIndex: 'name',
  key: 'name',
  width: 150
}, {
  title: '是否985/211',
  width: 130,
  render: () => {
    return '是'
  }
}, {
  title: '所在省份',
  dataIndex: 'province_name',
  key: 'province_name',
  width: 100
}, {
  title: '学校类别',
  dataIndex: 'type_name',
  key: 'type_name',
  width: 120
}, {
  title: '包含专业',
  dataIndex: 'major',
  key: 'major'
}]
class Unknow extends Component {
  constructor() {
    super();
    this.state = {
      dataList: []
    }
  }

  // 是否211
  is = (value) => {
    this.props.form.setFieldsValue({
      'band': value
    })
  }

  // 查询
  search = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        const matchData = data.filter((elem, index) => {
           const is = elem.f211 === '1' || elem.f985 === '1'
           const isNot = elem.f211 !== '1' && elem.f985 !== '1'
           const province = ( value.province ? (value.province === elem.province_name) : 1 )
           const isMajor = elem.major.indexOf(value.major) !== -1
          return ( value.is === '1' ? is : isNot) && province && isMajor
        })
        this.setState({
          dataList: matchData
        })
      }
    })
  }

  // 重置
  reset = () => {
    this.props.form.resetFields()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataList } = this.state
    return (
      <div>
       <Form layout='inline'>
          <FormItem label='是否985/211'>
            {
              getFieldDecorator('is', {
                initialValue: '1'
                })(
                <RadioGroup
                  onChange={this.is}
                >
                  <Radio value='1'>是</Radio>
                  <Radio value='0'>否</Radio>
                </RadioGroup>
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
          <FormItem label='包含专业'>
            {
              getFieldDecorator('major', {
                initialValue: ''
              })(
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
        <Table
          bordered
          columns={columns}
          dataSource={dataList}
          style={{ margin: '10px 10px'}}
          rowKey={record => record.school_id}
        />
      </div>
    )
  }
}
export default Form.create()(Unknow);