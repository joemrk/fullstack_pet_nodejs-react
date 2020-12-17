import { Button, Divider, List, Radio, Space, Table } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react'
import { useSitesQuery } from '../../generated/graphql';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const columns = [
  {
    title: 'Hoster',
    dataIndex: 'hoster',
    key: 'hoster',
  },
  {
    title: 'Domain',
    dataIndex: 'domain',
    key: 'domain',
    render: (text: string) => <a href={`http://${text}`} target="_bank">{text}</a>
  },
  {
    title: 'Ip',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: 'Campaign',
    dataIndex: 'campaign',
    key: 'campaign',
    filters: [
      {
        text: 'PL - Maxemizer',
        value: 'PL - Maxemizer'
      },
      {
        text: 'EU - AdCode',
        value: 'EU - AdCode'
      },
    ],
    onFilter: (value: any, record: any) => record.campaign.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.domain.length - b.domain.length,
    // sortDirections: ['descend'],
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Yandex',
    dataIndex: 'yandex',
    key: 'yandex',
    render: (text: string) => <a href={`http://yandex.metrica.ru/${text}`}>{text}</a>
  },
  {
    title: 'Cloaking',
    dataIndex: 'cloaking',
    key: 'cloaking',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'Holder',
    dataIndex: 'holder',
    key: 'holder',
    render: (text: string) => <a href={`/users/${text}`}>{text}</a>
  },
  {
    title: 'Creator',
    dataIndex: 'creator',
    key: 'creator',
    render: (text: string) => <a href={`/users/${text}`}>{text}</a>
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Transfer</a>
        <a>Delete</a>
      </Space>
    )
  }
];

const Sites: React.FC = (props) => {

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const history = useHistory()
  const { data, loading, error } = useSitesQuery()

  if (loading) return <div>Loading...</div>

  return (
    <Layout>
      <div>
        <Button
          type="primary"
          size={'large'}
          onClick={() => { history.push('/sites/create') }}
        > Create
      </Button>
      </div>
      <br />

      <Divider />
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        dataSource={data?.sites}
        columns={columns} />;



    </Layout>
  )
}
export default Sites