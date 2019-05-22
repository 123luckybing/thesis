import React, { Component } from 'react';
import data from './data'
import echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { Form,Card,Button, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class High extends Component {
  // 查询
  search = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        const targetData = data.filter((elem) => {
          const schoolName = (elem.name === value.highSchool)
          const major = (value.major ? (elem.spname === value.major) : 1)
          const subject = (value.subject ? (elem.local_type_name === value.subject) : 1)
          return schoolName && subject && major
        })
        const province = [];
        const min = [];
        const max = [];
        const average = []
        for (var i = 0; i < targetData.length; i++) {
          province.push(targetData[i].local_province_name)
          min.push(targetData[i].min)
          max.push(targetData[i].max)
          average.push(targetData[i].average)
        }
        this.echarts(province, min, max, average)
      }
    })
  }

  echarts = (province, min, max, average) => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 绘制图表
      var colors = ['#5793f3', '#d14a61', '#675bba'];
      myChart.setOption({
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            right: '20%'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['平均分', '最低分', '最高分']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: province // 横轴省份
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '平均分',
                min: 300,
                max: 600,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value}分'
                }
            },
            {
                type: 'value',
                name: '最低分',
                min: 300,
                max: 600,
                position: 'right',
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value}分'
                }
            },
            {
                type: 'value',
                name: '最高分',
                min: 300,
                max: 600,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value}分'
                }
            }
        ],
        series: [
            {
                name:'最低分',
                type:'bar',
                data: min // 最低分
            },
            {
                name:'最高分',
                type:'bar',
                data: max // 最高分
            },
            {
                name:'平均分',
                type:'line',
                yAxisIndex: 1,
                data: average // 平均分
            }
        ]
        });
  }

  // 重置
  reset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width: '1000px'}}>
        <Card title='高校各专业地区录取分数线'>
          <Form layout='inline'>
            <FormItem label='高校名称'>
              {
                getFieldDecorator('highSchool', {
                  rules: [{
                    required: true,
                    message: '高校名称不能为空'
                  }]
                })(
                  <Select style={{ width: 140}}>
                    <Option value='东北农业大学'>东北农业大学</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='专业名称'>
              {
                getFieldDecorator('major')(
                  <Select style={{ width: 150}}>
                    <Option value='动物医学'>动物医学</Option>
                    <Option value='风景园林'>风景园林</Option>
                    <Option value='农林经济管理'>农林经济管理</Option>
                    <Option value='生物科学类'>生物科学类</Option>
                    <Option value='植物生产类（Ⅰ）'>植物生产类（Ⅰ）</Option>
                    <Option value='金融学'>金融学</Option>
                    <Option value='应用气象学'>应用气象学</Option>
                    <Option value='行政管理'>行政管理</Option>
                    <Option value='计算机类'>计算机类</Option>
                    <Option value='法学类（法学）'>法学类（法学）</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='科类'>
              {
                getFieldDecorator('subject')(
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
        <div id='main' style={{ width: '100%', height: 400, overflow:'scroll' }}></div>
      </div>
    )
  }
}

export default Form.create()(High);