import React from 'react'
import { UserEntity, useUsersQuery } from '../../generated/graphql';
import { Button, Space, Table } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { useHistory } from 'react-router-dom';


const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Yandex',
    dataIndex: 'yandexLogin',
    key: 'yandexLogin',
  },
  {
    title: 'Telegram',
    dataIndex: 'telegram',
    key: 'telegram',
  },
  {
    title: 'Action',
    key: 'x',
    render: (_: string, record: UserEntity) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>

    )
  }
]


const Users: React.FC = ({ }) => {
  const { data: usersData, loading: usersLoading } = useUsersQuery({ fetchPolicy: "cache-and-network" })

  const history = useHistory()


  if (usersLoading) return <div>Loading...</div>
  return (
    <Layout>
      <div>
        <Button
          type="primary"
          size={'large'}
          onClick={() => { history.push('/users/create') }}
        > Create
        </Button>
      </div>
      <br />

      <Table
        dataSource={usersData?.users}
        columns={columns} />
    </Layout>
  )
}
export default Users
