import { List } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react'
import { useSitesQuery } from '../../generated/graphql';

const Sites: React.FC = (props) => {
  
  const { data, loading, error } = useSitesQuery()

  if(loading) return <div>Loading...</div>

  if (data && data.sites.length > 0){
    return (
      <Layout>
          <h2>Sites</h2>
          <List
      size="small"
      bordered
      dataSource={data.sites}
      renderItem={item => <List.Item>{item.domain} | {item.holder}</List.Item>}
    />
        </Layout>
    )
  }
  else return <div>{error?.message}</div>
}
export default Sites