import React, { Component } from 'react'
import img from '../img/timg.gif'
import './index.css'
class Index extends Component {
  render() {
    return (
      <div>
        <img src={img} className='wel'/>
        <h2>欢迎来到高考志愿智能填报系统</h2>
      </div>
    )
  }
}

export default Index