import React, { Component } from 'react';
import axios from 'axios';
import province from '../../Recommend/MajorSchoolRecd/province'
import { Card,Form,Button,Select, Table } from 'antd';
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
        axios.post('https://bird.ioliu.cn/v1?url=https://gkcx.eol.cn/gkcx/api', {
          province_id: value.province,
          year: value.year_num,
          type_id: value.type_subject,
          uri: "hxsjkqt/api/gk/score/proprovince"
        }).then((res) => {
          this.setState({
            dataList: res.data.data.item
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
                  {
                    province.map((elem,index) => {
                      return <Option key={index} value={elem.id}>{elem.name}</Option>
                    })
                  }
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
                  <Option value='2'>文科</Option>
                  <Option value='1'>理科</Option>
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