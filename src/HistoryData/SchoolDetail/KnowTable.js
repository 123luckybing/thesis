import React, { Component } from 'react'
import { Table } from 'antd'
let columns = [{
  title: '学校名称',
  key: 'name',
  dataIndex: 'name'
}, {
  title: '所属部门',
  dataIndex: 'belong',
  key: 'belong'
}, {
  title: '是否985',
  dataIndex: 'f985',
  key: 'f985',
  render: (f985) => {
    return f985 === '1' ? '是' : '否'
  }
}, {
  title: '是否211',
  dataIndex: 'f211',
  key: 'f211',
  render: (f211) => {
    return f211 === '1' ? '是' : '否'
  }
},{
  title: '高校类型',
  dataIndex: 'type_name',
  key: 'type_name'
},{
  title: '地址',
  dataIndex: 'address',
  key: 'address'
},{
  title: '所在省份',
  dataIndex: 'province_name',
  key: 'province_name'
}]
class KnowTable extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Table
          style={{ marginTop: '20px' }}
          columns={columns}
          bordered
          dataSource={data}
          rowKey={record => record.school_id}
        />
        {
          data[0] ? 
          (
            <div>
              <h3>简介</h3>
              <div
                style={{ textAlign: 'justify' }}
                dangerouslySetInnerHTML={{ __html: data[0].content }}></div>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default KnowTable