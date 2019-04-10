import React, { Component } from 'react';
import axios from 'axios'
import { Input, Form, Button, Select, Table } from 'antd'
import targetList from './province'
const FormItem = Form.Item;
const Option = Select.Option;
let columns = [{
  title: '学校名称',
  dataIndex: 'name',
  key: 'name',
  width: 150
},{
  title: '专业名称',
  dataIndex: 'spname',
  key: 'spname'
},{
  title: '重点专业',
  dataIndex: 'is_important',
  key: 'is_important',
  width: 100,
  render: (is_important) => {
    return is_important === 1 ? '是' : '否'
  }
},{
  title: '教育部直属',
  dataIndex: 'department',
  key: 'department',
  width: 120,
  render: (department) => {
    return department === 1 ? '是' : '否'
  }
},{
  title: '985大学',
  dataIndex: 'f985',
  key: 'f985',
  width: 100,
  render: (f985) => {
    return f985 === 1 ? '是' : '否'
  }
},{
  title: '211大学',
  dataIndex: 'f211',
  key: 'f211',
  width: 100,
  render: (f211) => {
    return f211 === 1 ? '是' : '否'
  }
},{
  title: '所在省份',
  dataIndex: 'province_name',
  key: 'province_name',
  width: 100
}, {
  title: '学校类型',
  dataIndex: 'type_name',
  key: 'type_name',
  width: 100
}]
class MajorSchool extends Component {
  constructor() {
    super()
    this.state = {
      dataList: [],
      total: 0,
      page: 1,
      value: {}
    }
  }

  // 获取学校列表
  getSchoolList = (value, page) => {
    axios.get('https://bird.ioliu.cn/v1?url=https://gkcx.eol.cn/api', {
      params: {
        keyword: value.major,
        province_id: value.province,
        uri: 'hxsjkqt/api/gk/schoolSpecial/lists',
        page: page ? page : ''
      }
    }).then((res) => {
      this.setState({
        dataList: res.data.data.item,
        total: res.data.data.numFound
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  // 查询
  search = () => {
    this.props.form.validateFields((err, value) => {
      if(!err) {
        this.setState({
          value: value
        })
        this.getSchoolList(value,1)
      }
    })
  }

  // 重置
  reset = () => {
    this.props.form.resetFields()
  }

  // 上一页
  preview = () => {
    const { page,value } = this.state
    if (page === 1) {
      return false
    } else {
      this.setState({
        page: page - 1
      },() => {
        this.getSchoolList(value, this.state.page)
      })
    }
  }

  // 下一页
  next = () => {
    const { page,value,total } = this.state
    // 计算总页数
    const totalPage = total % 10 === 0 ? total/10 : parseInt(total/10) + 1;
    if(page === totalPage) {
      return false
    } else {
      this.setState({
        page: page + 1
      },() => {
        this.getSchoolList(value,this.state.page)
      })
    }
  }

  render (){
    const { getFieldDecorator } = this.props.form;
    const { dataList } = this.state
    return (
      <div style={{ margin: '20px auto', width: '1000px' }}>
        <Form layout='inline' style={{ margin: '0 auto', width: '1000px' }}>
          <FormItem label='专业'>
            {
              getFieldDecorator('major',{
                rules: [{
                  required: true,
                  message: '请输入专业'
                }]
              })(
                <Input />
              )
            }
          </FormItem>
          <FormItem label='目标地区'>
            {
              getFieldDecorator('province')(
                <Select style={{ width: '80px' }}>
                  {
                    targetList.map((elem, index) => {
                      return <Option key={index} value={elem.id}>{elem.name}</Option>
                    })
                  }
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
        <Table
          bordered
          columns={columns}
          dataSource={dataList}
          rowKey={record => record.id}
          style={{ margin: '20px' }}
          pagination={false}
        />
        <div style={{ float: 'right', marginTop: '10px'}}>
          <Button
            type='primary'
            onClick={this.preview}
          >上一页</Button>
          <Button
            type='primary'
            style={{ margin: '20px' }}
            onClick={this.next}
          >下一页</Button>
        </div>
      </div>
    )
  }
}

export default Form.create()(MajorSchool);