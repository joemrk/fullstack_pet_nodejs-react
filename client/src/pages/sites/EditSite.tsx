import { Button, Form, Input, Select } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { Formik } from 'formik';
import * as queryString from 'querystring';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCampaignsQuery, useHostersQuery, useSiteQuery, useUsersQuery } from '../../generated/graphql';




const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
}

const buttonItemLayout = {
  wrapperCol: { span: 8, offset: 4 },
}

const selectSearchProps = {
  showSearch: true,
  optionFilterProp: "children",
  filterOption: (input: any, option: any) =>
    option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}




const EditSite: React.FC = (props) => {


  const history = useHistory()
  const { data: hostersData, loading: hostersLoading } = useHostersQuery()
  const { data: campaignData, loading: campaignLoading } = useCampaignsQuery()
  const { data: usersData, loading: usersLoading } = useUsersQuery()

  const parsedSearch = queryString.parse(history.location.search.substring(1))
  const siteId = parsedSearch.id as string

  const { data: siteData, loading: siteLoading } = useSiteQuery({ variables: { id: siteId } })


  if (hostersLoading || campaignLoading || usersLoading || siteLoading) return <div>Loading...</div>

  const hosterSelect = hostersData?.hosters ? hostersData?.hosters.map(h => (
    <Select.Option value={h.id}>{h.name}</Select.Option>
  )) : []

  const campaignSelect = campaignData?.campaigns ? campaignData?.campaigns.map(h => (
    <Select.Option value={h.id}>{h.fullCampaignName}</Select.Option>
  )) : []

  const usersSelect = usersData?.users ? usersData?.users.map(h => (
    <Select.Option value={h.id}>{h.username}</Select.Option>
  )) : []


  if (siteData?.getSiteById) {
    console.log(siteData?.getSiteById);

    return (
      <Formik
        initialValues={siteData?.getSiteById}
        onSubmit={async (values) => {
          const data = ""
          console.log(values);

        }}
      >{({ values, handleChange, isSubmitting, handleSubmit, setFieldValue }) => (

        <Layout>
          <Form
            {...formItemLayout}
            layout={'horizontal'}
            onSubmitCapture={handleSubmit} >
            <Form.Item
              name="domainProvider"
              label="Domain provider">
              <Select
                {...selectSearchProps}
                onChange={(_, o: any) => {
                  values.domainProviderId = o.value
                  values.domainProviderName = o.children
                }} >
                {hosterSelect}
              </Select>
            </Form.Item>
            <Form.Item
              name="hostProvider"
              label="Host provider">
              <Select
                {...selectSearchProps}
                onChange={(_, o: any) => {
                  values.hostProviderId = o.value
                  values.hostProviderName = o.children
                }} >
                {hosterSelect}
              </Select>
            </Form.Item>
            <Form.Item
              name="campaign"
              label="Campaign">
              <Select
                {...selectSearchProps}
                onChange={(_, o: any) => {
                  values.campaignId = o.value
                  values.campaignName = o.children
                }} >
                {campaignSelect}
              </Select>
            </Form.Item>


            <Form.Item
              label="Domain"
              name="domain" >
              <Input
                onFocus={() => {
                  console.log(values.domain)
                }}
                value={values.domain}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Dedicated IP"
              name="dedicatedIp" >
              <Input
                value={values.dedicatedIp}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Yandex metrika ID"
              name="yandexId" >
              <Input
                value={values.yandexId}
                onChange={handleChange}
              />
            </Form.Item>
            <br />
            <Form.Item
              name="holderName"
              label="Holder">
              <Select
                {...selectSearchProps}
                onChange={(_, o: any) => {
                  values.holderId = o.value
                  values.holderName = o.children
                }} >
                {usersSelect}
              </Select>
            </Form.Item>

            <br />
            <Form.Item {...buttonItemLayout}>
              <Button
                type="primary"
                htmlType="button"
                loading={isSubmitting}
                onClick={() => {
                  handleSubmit();
                }}
              >Save</Button>
            </Form.Item>
          </Form>


        </Layout>
      )}
      </Formik>
    )
  }
  else return <div>Site not found.</div>
}
export default EditSite