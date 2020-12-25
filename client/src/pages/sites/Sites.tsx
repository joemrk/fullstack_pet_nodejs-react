import { Button, Divider, Space, Table } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SiteEntity, useCampaignsQuery, useSitesQuery } from '../../generated/graphql';



const Sites: React.FC = (props) => {
  const history = useHistory()
  const { data: sitesData, loading: sitesLoading, error: sitesError } = useSitesQuery({ fetchPolicy: "cache-and-network" })
  const { data: campaignData, loading: campaignLoading } = useCampaignsQuery({ fetchPolicy: "cache-and-network" })
 
  const campaignColumnFilter = campaignData?.campaigns.map(c => {
    return {
      text: c.fullCampaignName,
      value: c.id
    }
  })

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


  const columns = [
    {
      title: 'Providers',
      key: 'providers',
      render: (text: string, record: SiteEntity) => <div>{`${record.domainProviderName} / ${record.hostProviderName}`}</div>
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
      render: (text: string) => <a href={`http://${text}`} target="_bank">{text}</a>
    },
    {
      title: 'Ip',
      dataIndex: 'dedicatedIp',
      key: 'dedicatedIp',
    },
    {
      title: 'Campaign',
      dataIndex: 'campaignName',
      key: 'campaignName',
      filters: campaignColumnFilter,
      onFilter: (value: any, record: SiteEntity) => record.campaignId.indexOf(value) === 0,
      sorter: (a: any, b: any) => a.domain.length - b.domain.length,
      // sortDirections: ['descend'],
    },
    {
      title: 'Yandex',
      dataIndex: 'yandexId',
      key: 'yandexId',
      render: (text: string) => <a href={`http://yandex.metrica.ru/${text}`}>{text}</a>
    },
    {
      title: 'Holder',
      dataIndex: 'holderName',
      key: 'holderName',
      render: (text: string) => (!text) ? <div>free</div> : <a href="#">{text}</a>
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Transfer</a>
          <a>Delete</a>
          <a>Edit</a>
        </Space>
      )
    }
  ];





  if (sitesLoading || campaignLoading) return <div>Loading...</div>

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
        dataSource={sitesData?.sites}
        // dataSource={[]}
        columns={columns} />



    </Layout>
  )
}
export default Sites