import React, { Component } from 'react';
import { Card,Form,Button,Input, Select } from 'antd';
import data from './data'
import target from '../../Recommend/SchoolRecommend/target'
import echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
const FormItem = Form.Item;
const Option = Select.Option
class HighArea extends Component {
  constructor() {
    super();
  }

  // 点击重置按钮
  reset = () => {
    this.props.form.resetFields();
  }

  // echart图标
  echart = (province, min ,max, average) => {
    var myChart = echarts.init(document.getElementById('main'));
    var colors = ['#61a0a8', '#91c7ae', '#ca8622'];
    myChart.setOption({
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
      },
      legend: {
        data:['最高分','最低分','平均分']
      },
      xAxis: [
        {
            type: 'category',
            data: province,
            axisPointer: {
                type: 'shadow'
            }
        }
      ],
      yAxis: [
        {
            type: 'value',
            name: ' 平均分',
            min: 700,
            max: 300,
            interval: 100,
            axisLabel: {
                formatter: '{value}分'
            },
            axisLine: {
              lineStyle: {
                  color: colors[2]
              }
          },
        },{
            type: 'value',
            name: '最低分',
            min: 700,
            max: 300,
            interval: 100,
            axisLabel: {
                formatter: '{value}分'
            },
            axisLine: {
              lineStyle: {
                  color: colors[1]
              }
          },
        },{
            type: 'value',
            name: '最高分',
            min: 700,
            max: 300,
            offset: 50,
            interval: 100,
            axisLabel: {
                formatter: '{value}分'
            },
            axisLine: {
              lineStyle: {
                  color: colors[0]
              }
          },
        }
      ],
      series: [
        {
            name:'最低分',
            type:'bar',
            data: min
        },
        {
            name:'最高分',
            type:'bar',
            data: max
        },
        {
            name:'平均分',
            type:'line',
            yAxisIndex: 1,
            data:average
        }
      ]
    })
  }
  // 查询
  search = () => {
    this.props.form.validateFields((err, value) => {
      if(!err) {
        const targetData = data.filter((elem) => {
          const subject = (elem.local_type_name === value.subject)
          const area = (value.province ? (elem.local_province_name === value.province) : 1)
          return subject && area
        })
        const province = [];
        const max = [];
        const min = [];
        const average = [];
        for (var i = 0; i < targetData.length; i++){
          province.push(targetData[i].local_province_name);
          max.push(targetData[i].max)
          min.push(targetData[i].min)
          average.push(targetData[i].average)
        }
        this.echart(province, min ,max, average)
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: '1000px'}}>
        <Card title='高校分地区录取分数线'>
          <Form layout='inline'>
            <FormItem label='高校名称'>
              {
                getFieldDecorator('schoolName', {
                  rules: [{
                    required: true,
                    message: '请输入高校名称'
                  }]
                })(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='年份'>
            {
                getFieldDecorator('year')(
                  <Input />
                )
              }
            </FormItem>
            <FormItem label='科类'>
            {
                getFieldDecorator('subject', {
                  rules:[{
                    required: true,
                    message: '请选择科类'
                  }]
                })(
                  <Select style={{ width: '80px' }}>
                    <Option value='文科'>文科</Option>
                    <Option value='理科'>理科</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='目标地区'>
            {
                getFieldDecorator('province')(
                  <Select style={{ width: '80px' }}>
                    {
                      target.map((elem,index) => {
                        return <Option value={elem} key={index}>{elem}</Option>
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
        </Card>
        <div id='main' style={{ width: '100%', overflow:'scroll', height: '400px' }}></div>
      </div>
    )
  }
}
export default Form.create()(HighArea);