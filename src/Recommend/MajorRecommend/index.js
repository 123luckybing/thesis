import React, { Component } from 'react';
import { Alert, Form, Radio, Button, Modal } from 'antd'
import data from './data'
import result from './result'
const FormItem = Form.Item
const RadioGroup = Radio.Group
var E = 0;var I = 0;var N = 0;var S = 0;var F = 0;var T = 0;var J = 0;var P = 0;

class MajorRecommend extends Component {
  resultModal = (lastResult) => {
    Modal.success({
      title: '测试结果如下：',
      content: (
        <div>
          <h3>{result[lastResult].title}</h3>
          <Form layout='inline' >
            <FormItem label='概述'>{result[lastResult].detail}</FormItem>
            <FormItem label='适合领域'>{result[lastResult].area}</FormItem>
            <FormItem label='适合职业'>{result[lastResult].job}</FormItem>
          </Form>
        </div>
      )
    })
    this.props.form.resetFields();
  }
  numCount = (result) => {
    // 题目选择次数统计
    switch(result){
      case 'E':
        ++E;
        break;
      case 'I':
        ++I;
        break;
      case 'N':
        ++N;
        break;
      case 'S':
        ++S;
        break;
      case 'F':
        ++F;
        break;
      case 'T':
        ++T;
        break;
      case 'J':
        ++J;
        break;
      case 'P':
        ++P;
        break;
    }
  }
  // 提交
  submit = () => {
    this.props.form.validateFields((err, value) => {
      if(!err) {
        for (var i=0; i < 28; i++) {
          this.numCount(value[i])
        }
        var first = E > I ? 'E' : 'I';
        var second = S > N ? 'S' : 'N';
        var third = T > F ? 'T' : 'F';
        var fourth = J > P ? 'J' : 'P';
        var lastResult = first + second + third + fourth;
        this.resultModal(lastResult)
      }
    })
  }
  render() {
    const tip = (
      <div>
        <p>温馨提示：</p>
        <p>1、问卷选项没有“对”与“错”之分。请选择你是怎样做的，而不是选择你认为哪样更好。</p>
        <p>2、测试的目的是反映最真实的自己。请最大程度放松下来，选择更接近你平时的感受或行为的那项。</p>
      </div>
    )
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>MBTI性格人格测试</h3>
        <div style={{ margin: '10px 20px' }}>
          <Alert message={tip} type="info" />
        </div>
        <Form style={{ margin: '10px 20px' }}>
          {
            data.map((elem,index) => {
              return (
                <FormItem key={index}>
                  <h4>{index + 1}.{elem.title}</h4>
                  {
                    getFieldDecorator(`${index}`,{
                      rules: [{
                        required: true,
                        message: '请选择'
                      }]
                    }
                    )(
                      <RadioGroup>
                        <Radio value={elem.valueFirst}>{elem.contentFirst}</Radio>
                        <Radio value={elem.valueSecond}>{elem.contentSecond}</Radio>
                      </RadioGroup>
                    )
                  }
                </FormItem>
              )
            })
          }
          <Button type='primary' onClick={this.submit}>提交</Button> 
        </Form>
      </div>
    )
  }
}
export default Form.create()(MajorRecommend);