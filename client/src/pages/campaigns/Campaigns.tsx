import { Button, Space, Table } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCampaignsQuery } from '../../generated/graphql';



const columns = [
  {
    title: 'Langue',
    dataIndex: 'langue',
    key: 'langue',
  },

  {
    title: 'Campaign name',
    dataIndex: 'campaignName',
    key: 'campaignName',
  },
  {
    title: 'Action',
    key: 'x',
    render: (text:string) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
        <a>Sites</a>
      </Space>

    )
  }
]

const Campaigns: React.FC = ({ }) => {

  const { data, loading } = useCampaignsQuery()
  const history = useHistory()


  if (loading) return <div>Loading...</div>
  return (
    <Layout>
      <div>
        <Button
          type="primary"
          size={'large'}
          onClick={() => { history.push('/campaigns/create') }}
        > Create
        </Button>
      </div>
      <br />

      <Table
        dataSource={data?.campaigns}
        columns={columns} />
    </Layout>
  );
}
export default Campaigns