import React, { Component } from 'react';
import { Card,Form,Button,Select, Table } from 'antd';
import BeiJing from './data/Beijing'
import HeiLongJiang from './data/HeiLongJiang'
import JiLin from './data/JiLin'
import LiaoNing from './data/LiaoNing'
const FormItem = Form.Item;
const Option = Select.Option;
let columns = [{
  title: '省份',
  dataIndex: 'local_province_name',
  key: 'local_province_name'
}, {
  title: '年份',
  dataIndex: 'year',
  key: 'year'
}, {
  title: '考生类别',
  dataIndex: 'local_type_name',
  key: 'local_type_name'
},{
  title: '批次',
  dataIndex: 'local_batch_name',
  key: 'local_batch_name'
},{
  title: '分数线',
  dataIndex: 'average',
  key: 'average'
}]
class Area extends Component {
  constructor() {
    super();
    this.state = {
      dataList: []
    }
  }

  // 点击查询按钮
  search = () => {
    this.props.form.validateFields( (err,value) => {
      if(!err) {
        if (value.province == '11') {
          const data = BeiJing.data.item.filter((elem) => {
            const year = ( elem.year === parseInt(value.year_num) )
            const type = (value.type_subject ? (elem.local_type_name === value.type_subject) : 1)
            return year && type
          })
          this.setState({
            dataList: data
          })
        }
        if (value.province == '22') {
          const data = JiLin.data.item.filter((elem) => {
            const year = ( elem.year === parseInt(value.year_num) )
            const type = (value.type_subject ? (elem.local_type_name === value.type_subject) : 1)
            return year && type
          })
          this.setState({
            dataList: data
          })
        }
        if (value.province == '21') {
          const data = LiaoNing.data.item.filter((elem) => {
            const year = ( elem.year === parseInt(value.year_num) )
            const type = (value.type_subject ? (elem.local_type_name === value.type_subject) : 1)
            return year && type
          })
          this.setState({
            dataList: data
          })
        }
        if (value.province == '23') {
          const data = HeiLongJiang.data.item.filter((elem) => {
            const year = ( elem.year === parseInt(value.year_num) )
            const type = (value.type_subject ? (elem.local_type_name === value.type_subject) : 1)
            return year && type
          })
          this.setState({
            dataList: data
          })
        }
      }
    });
  }

  // 点击重置按钮
  reset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataList } = this.state
    return (
      <div style={{ width: '1000px' }}>
       <Card title='地区批次线查询'>
        <Form layout='inline'>
          <FormItem label='生源地省份'>
            {
               getFieldDecorator('province', {
                rules: [{
                  required: true,
                  message: '请输入生源地省份'
                }]
               })(
                <Select style={{ width: 100}}>
                  <Option key="1" value='23'>黑龙江</Option>
                  <Option key="2" value='22'>吉林</Option>
                  <Option key="3" value='21'>辽宁</Option>
                  <Option key="4" value='11'>北京</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label='年份'>
            {
              getFieldDecorator('year_num',{
                rules: [{
                  required: true,
                  message: '请输入年份'
                }]
              })(
                <Select style={{ width: 100}}>
                  <Option value='2018'>2018</Option>
                  <Option value='2017'>2017</Option>
                  <Option value='2016'>2016</Option>
                  <Option value='2015'>2015</Option>
                  <Option value='2014'>2014</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label='科类'>
            {
              getFieldDecorator('type_subject')(
                <Select style={{ width: 100}}>
                  <Option value='文科'>文科</Option>
                  <Option value='理科'>理科</Option>
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
       <Table
        style={{ margin: '10px 10px' }}
        columns={columns}
        dataSource={dataList}
        bordered
        rowKey={record => record.id}
       />
      </div>
    )
  }
}
export default Form.create()(Area);