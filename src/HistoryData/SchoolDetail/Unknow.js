import React, { Component } from 'react';
import { Form,Button, Input,Radio, Table } from 'antd';
import axios from 'axios'
const FormItem = Form.Item;
const RadioGroup = Radio.Group
let columns = [{
  title: '学校名称',
  dataIndex: 'school_name',
  key: 'school_name',
  width: 120
}, {
  title: '是否985/211',
  dataIndex: 'is_true',
  key: 'is_true',
  width: 160,
  render: (is_true) => {
    return is_true === 1 ? '是' : '否'
  }
}, {
  title: '所在省份',
  dataIndex: 'province',
  key: 'province',
  width: 100
}, {
  title: '学校类别',
  dataIndex: 'school_type',
  key: 'school_type',
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
        value.is = parseInt(value.is)
        value.major = `'%${value.major}%'` // 数据库模糊查询
        axios.get('/api/history/conform', {
          params: value
        }).then((res) => {
          this.setState({
            dataList: res.data.data
          })
        }).catch((err) => {
          console.log(err)
        })
        console.log(value)
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
          <FormItem label='高校类型'>
            {
              getFieldDecorator('type')(
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
          rowKey={record => record.id}
        />
      </div>
    )
  }
}
export default Form.create()(Unknow);