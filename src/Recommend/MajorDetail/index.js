import React, { Component } from 'react';
import { Button, Tooltip } from 'antd'
import data from './data'
import './index.css'
import Employment from './Echart/Employment'
import sex from './Echart/sex'
import area from './Echart/Area'
import job from './Echart/job'
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
class MajorDetail extends Component {
  constructor() {
    super()
    this.state = {
      targetData: []
    }
  }
  componentWillMount() {
    const { id } = this.props.match.params
    const targetData = data.filter((elem) => {
      return elem.id === parseInt(id)
    })
    this.setState({
      targetData: targetData[0]
    })
  }

  componentDidMount() {
    const { targetData } = this.state
    const arr = []; const rate = []; const areaArr = []; const areaRate = []; const jobArr = []; const jobRate = []
    for(var i = 0 ; i < targetData.jobdetail[1].length; i++ ) {
      arr.push(targetData.jobdetail[1][i].name)
      rate.push(targetData.jobdetail[1][i].rate)
    }
    for (var i = 0 ; i < targetData.jobdetail[2].length; i++) {
      areaArr.push(targetData.jobdetail[2][i].area)
      areaRate.push(targetData.jobdetail[2][i].rate)
    }
    for(var i = 0 ; i < targetData.jobdetail[3].length; i++) {
      jobArr.push(targetData.jobdetail[3][i].detail_pos)
      jobRate.push(targetData.jobdetail[3][i].rate)
    }
    sex(targetData.rate) // 行别比例echart
    Employment(arr, rate) // 就业行业分布
    area(areaArr,areaRate) // 就业地区分布
    job(jobArr,jobRate) // 就业岗位分布
  }

  render() {
    const { targetData } = this.state
    return (
      <div className='wrapper'>
        <div className='item'>
          <div className='title'>基本信息</div>
          <p className='detail'>
            <span className='info'>专业代码：{targetData.code}</span>
            <span className='info'>授予学位：{targetData.degree}</span>
            <span className='info'>修业年限：{targetData.limit_year}</span>
            <span className='info'>学科门类：{targetData.type}</span>
            <span className='info'>专业类：{targetData.type_detail}</span>
          </p>
          <div className='basic-div'>
            <article>
              <div id='sexRate' style={{ width: '250px', height: '150px', display: 'inline-block', marginTop: '30px' }}></div>
            </article>
            <article>
              <h3 style={{ fontSize: '19px', marginTop: '30px'}}>就业率</h3>
              <div style={{ marginTop: '50px' }}>
                {
                  targetData.jobrate.map((elem,index) => {
                    return (
                    <Tooltip title={elem.rate} key={index}>
                      <Button>{elem.year}</Button>
                    </Tooltip>)
                  })
                }
              </div>
            </article>
            <article>
              <h3 style={{ fontSize: '19px', marginTop: '30px' }}>第一印象</h3>
              <div className='impress_item'>
                {
                  targetData.impress.map((elem,index) => {
                    return (
                      <div key={index} className='item'>
                        <img src={`https://static-data.eol.cn/${elem.img_url}`}/>
                        <div className='key_word'>{elem.key_word}</div>
                      </div>
                    )
                  })
                }
              </div>
            </article>
          </div>
        </div>
        <div>
          <div className='title'>专业详解</div>
          <div className='detail'>
            <div>
              <div className='what'>是什么</div>
              <p>{targetData.is_what}</p>
            </div>
            <div>
              <div className='what'>学什么</div>
              <p>{targetData.learn_what}</p>
            </div>
            <div>
              <div className='what'>做什么</div>
              <p>{targetData.do_what}</p>
            </div>
          </div>
        </div>
        <div>
          <div className='title'>就业行业分布</div>
          <div id='Employment' style={{ width: '100%', height: '400px' }}></div>
        </div>
        <div>
          <div className='title'>就业岗位分布</div>
          <div id='job' style={{ width: '600px', height: '300px' }}></div>
        </div>
        <div>
          <div className='title'>就业地区分布</div>
          <div id='area' style={{ width: '100%', height: '400px' }}></div>
        </div>
      </div>
    )
  }
}

export default MajorDetail
