import React, { Component } from 'react';
import { Table, Avatar } from 'antd';
const columns = [{
  title: 'logo',
  dataIndex: 'school_id',
  key: 'school_id',
  render: (school_id) => {
    return  <Avatar size='large' src={`https://static-data.eol.cn/upload/logo/${school_id}.jpg`} />
  }
  
},{
  title: '学校名称',
  dataIndex: 'name',
  key: 'name',
  width: 150
},{
  title: '所在省份',
  dataIndex: 'province_name',
  key: 'province_name',
  width: 100
},{
  title: '类别',
  dataIndex: 'type_name',
  key: 'type_name',
  width: 100
}, {
  title: '最低分',
  dataIndex: 'min',
  key: 'min',
  width: 100
}, {
  title: '最高分',
  dataIndex: 'max',
  key: 'max',
  width: 100
}, {
  title: '录取概率',
  dataIndex: 'recom',
  key: 'recom',
  width: 100
},{
  title: '部分开设专业',
  dataIndex: 'special',
  key: 'special',
  render: (special) => {
    return special.map((elem) => {
      return <p key={elem.id}>{elem.name}</p>
    })
  }
}
]
class CommendTable extends Component {
  render() {
    const { targetData } = this.props
    console.log(targetData)
    return (
      <div>
        <Table
          style={{ margin: '20px' }}
          columns={columns}
          dataSource={targetData}
          bordered
          rowKey={record => record.school_id}
        />
      </div>
    )
  }
}

export default CommendTable