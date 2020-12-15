import { Button, Space, Table } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { HosterEntity, useHostersQuery } from '../../generated/graphql';



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_:any, record:HosterEntity) => (<a href={record.siteLink} target="_blank">{record.name}</a>)
  },

  {
    title: 'Sites count',
    dataIndex: 'sitesCount',
    key: 'sitesCount',
  },

  {
    title: 'Auth data',
    dataIndex: 'sitesCount',
    key: 'sitesCount',
    render: (_:any,record: HosterEntity) => <a>Show</a>
  },

  {
    title: 'Action',
    key: 'x',
    render: (_:any, record: HosterEntity) => (
      <Space size="middle">
        <a>Edit</a>
        <a href={`/sites?byHoster=${record.id}`}>Sites</a>
      </Space>

    )
  }
]




const Hosters: React.FC = ({ }) => {

  const { data, loading } = useHostersQuery()
  const history = useHistory()




  if(loading) return <div>Loading...</div>
  return (
    <Layout>
      <div>

      <Button 
      type="primary"
       size={'large'}
      onClick={()=>{history.push('/hosters/create')}}
       >
          Create
        </Button>
      </div>
        <br />

    <Table
      dataSource={data?.hosters}
      columns={columns} />



  </Layout>
  );
}
export default Hosters