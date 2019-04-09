import React, { Component } from 'react';
import { Table, Card } from 'antd'
let columns = [{
  title: '排名',
  dataIndex: 'id',
  key: 'id'
}, {
  title: '专业名称',
  dataIndex: 'majorName',
  key: 'majorName'
},{
  title: '操作',
  dataIndex: 'detail',
  key: 'detail',
  render: (text,record) => {
    return <a href={`/majorDetail/${record.id}`}>查看详情</a>
  }
}]
let data = [{
  id: '1',
  majorName: '医药类专业'
}, {
  id: '2',
  majorName: '机械类专业'
},{
  id: '3',
  majorName: '建筑类专业'
},{
  id: '4',
  majorName: '外语类专业'
},{
  id: '5',
  majorName: '经济类专业'
},{
  id: '6',
  majorName: '计算机专业'
},{
  id: '7',
  majorName: '艺术类专业'
},{
  id: '8',
  majorName: '农业类专业'
},{
  id: '9',
  majorName: '法学类专业'
},{
  id: '10',
  majorName: '师范类专业'
}]
class AllRecommend extends Component {
  render() {
    return (
      <div>
        <Card title='2018十大专业排名及解析'>
          <Table
            columns={columns}
            bordered
            dataSource={data}
            rowKey={record => record.id}
          />
        </Card>
      </div>
    )
  }
}
export default AllRecommend;