import React, { Component } from 'react';
import axios from 'axios';
import { Card,Form,Button,Select, InputNumber, Table } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
let columns = [{
  title: '省份',
  dataIndex: 'province',
  key: 'province'
}, {
  title: '年份',
  dataIndex: 'year_num',
  key: 'year_num'
}, {
  title: '文/理科',
  dataIndex: 'type_subject',
  key: 'type_subject'
}, {
  title: '第一批次',
  dataIndex: 'firstScore',
  key: 'firstScore'
}, {
  title: '第二批次',
  dataIndex: 'secondScore',
  key: 'secondScore'
}, {
  title: '第三批次',
  dataIndex: 'thirdScore',
  key: 'thirdScore',
  render: (thirdScore) => {
    return thirdScore === 0 ? '暂无数据' : thirdScore
  }
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
        axios.get('/api/history/area', {
          params: value
        }).then((res) => {
          console.log(res.data.data)
          this.setState({
            dataList: res.data.data
          })
        }).catch((err) => {
          console.log(err)
        })
        console.log(value);
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
               getFieldDecorator('province')(
                <Select style={{ width: 100}}>
                  <Option value='黑龙江'>黑龙江</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label='年份'>
            {
              getFieldDecorator('year_num')(
                <InputNumber />
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