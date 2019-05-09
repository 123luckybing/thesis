import React, { Component } from 'react';
import computer from './data/computer'
import money from './data/money'
import doctor from './data/doctor'
import lawer from './data/lawer'
import { Form, Button, Select, Table, Alert } from 'antd'
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
  width: 100,
  render: () => {
    return '北京'
  }
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
  getSchoolList = (value) => {
    if (value.major === '计算机') {
      this.setState({
        dataList: computer.data.item
      }) 
    }
    if (value.major === '经济学') {
      this.setState({
        dataList: money.data.item
      }) 
    }
    if (value.major === '医学') {
      this.setState({
        dataList: doctor.data.item
      }) 
    }
    if(value.major === '法学') {
      this.setState({
        dataList: lawer.data.item
      }) 
    }
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
    const { major } = this.props.match.params
    let tip = (
      <div>推荐您的专业如下: {major}, <br/>看看哪些学校设立了这些专业呢，快来进行搜索吧～</div>
    )
    return (
      <div style={{ margin: '20px auto', width: '1000px' }}>
        <Alert message={tip} type="info" style={{ margin: "0 auto" }}/>
        <Form layout='inline' style={{ margin: '20px auto', width: '1000px' }}>
          <FormItem label='专业'>
            {
              getFieldDecorator('major',{
                rules: [{
                  required: true,
                  message: '请输入专业'
                }]
              })(
                <Select style={{ width: '180px' }}>
                  <Option key="1" value='计算机'>计算机</Option>
                  <Option key="2" value='经济学'>经济学</Option>
                  <Option key="3" value='医学'>医学</Option>
                  <Option key="4" value='法学'>法学</Option>
                </Select>
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
          pagination={true}
        />
      </div>
    )
  }
}

export default Form.create()(MajorSchool);