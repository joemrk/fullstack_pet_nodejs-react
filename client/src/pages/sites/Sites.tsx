import { DownOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, Space, Table } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { MouseEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SiteEntity, useCampaignsQuery, useChangeSiteHolderMutation, useSitesQuery, useUsersQuery } from '../../generated/graphql';



const Sites: React.FC = (props) => {
  const history = useHistory()
  const [tableLoading, setTableLoading] = useState(true)
  const [transferredSite, setTransferredSite] = useState('')

  const { data: sitesData, loading: sitesLoading } = useSitesQuery({ fetchPolicy: "cache-and-network" })
  const { data: campaignData, loading: campaignLoading } = useCampaignsQuery({ fetchPolicy: "cache-and-network" })
  const { data: usersData, loading: usersLoading } = useUsersQuery({ fetchPolicy: "cache-and-network" })

  const [changeSiteHolder] = useChangeSiteHolderMutation()





  const changeHolderClick = async (e: MouseEvent) => {
    e.preventDefault()
    const newHolderId = e.currentTarget.getAttribute('data-id')
    const newHolderName = e.currentTarget.getAttribute('data-name')
    if(newHolderId && newHolderName && transferredSite !== ''){
      const data = await changeSiteHolder({variables:{
        siteId:transferredSite,
        newHolderId,
        newHolderName
      }})
      if(!data.data?.changeSiteHolder) alert('Cant transfer holder (')
    } else alert('Cant transfer holder (')
    
  }

  const transferUsersMenuItem = usersData?.users.map((u, k) => {
    return (
      <Menu.Item key={k}>
        <a onClick={e => { changeHolderClick(e) }} data-name={u.username} data-id={u.id}>{u.username}</a>
      </Menu.Item>
    )
  }) || []
  const transferUsersDropdown = (
    <Menu>{transferUsersMenuItem}</Menu>
  );




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
      render: (text: string, record: SiteEntity) => (
        <Space size="middle">
          {/* <a href="#" className="ant-dropdown-link">Transfer <DownOutlined /></a> */}
          <TransferHolderLinks siteId={record.id} users={transferUsersDropdown} setTransferredSite={setTransferredSite} />
          <a>Delete</a>
          <a href={`/sites/edit?id=${record.id}`}>Edit</a>
        </Space>
      )
    }
  ];


  React.useEffect(() => {
    if (!sitesLoading || !campaignLoading || !usersLoading) setTableLoading(false)
  }, [campaignLoading, sitesLoading, usersLoading, sitesData])


  return (
    <Layout>
      <div>
        <Button
          type="primary"
          size={'large'}
          onClick={() => { history.push('/sites/create') }} >
          Create
      </Button>
      </div>
      <br />

      <Divider />
      <Table
        loading={tableLoading}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        dataSource={sitesData?.sites}
        columns={columns} />

    </Layout>
  )
}

interface TransferHolderLinksProps {
  readonly siteId: string
  readonly users: any
  readonly setTransferredSite: (siteId: string) => void
}

const TransferHolderLinks: React.FC<TransferHolderLinksProps> = ({ siteId, users, setTransferredSite }) => {

  const transferredClick = (e: MouseEvent) => {
    e.preventDefault()
    setTransferredSite(siteId)
  }

  return (
    <Dropdown
      overlay={users}
      trigger={['click']}
      overlayStyle={{ maxHeight: '150px', overflowY: "auto" }}>
      <a className="ant-dropdown-link" onClick={e => transferredClick(e)}>
        Transfer <DownOutlined />
      </a>
    </Dropdown>
  )
}



export default Sites