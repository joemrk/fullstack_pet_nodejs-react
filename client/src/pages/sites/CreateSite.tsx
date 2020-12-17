import React from 'react'
import Layout from 'antd/lib/layout/layout';
import { Formik } from 'formik';
import { Button, Form, Input, Select, Space, Typography } from 'antd';
import { useHostersQuery, useCreateHosterMutation, useCreateSiteMutation, useCampaignsQuery } from '../../generated/graphql';
import { AnyAaaaRecord } from 'dns';




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


const CreateSite: React.FC = (props) => {
  const { data:hostersData , loading:hostersLoading } = useHostersQuery()
  const {data:campaignData, loading:campaignLoading} = useCampaignsQuery()
  const [createSite] = useCreateSiteMutation()



  if (hostersLoading && campaignLoading) return <div>Loading...</div>

  const hosterSelect = hostersData?.hosters ? hostersData?.hosters.map(h => (
    <Select.Option value={h.id}>{h.name}</Select.Option>
  )) : []

  const campaignSelect = campaignData?.campaigns ? campaignData?.campaigns.map(h => (
    <Select.Option value={h.id}>{h.fullCampaignName}</Select.Option>
  )) : []


  return (
    <Formik
      initialValues={{
        domainProviderId: '',
        domainProviderName: '',
        hostProviderId: '',
        hostProviderName: '',
        campaignId: '',
        campaignName: '',
        domain: '',
        dedicatedIp: '',
        yandexId: '',
        holderId: '',
        holderName: ''
      }}
      onSubmit={async (values) => {
        console.log(values);
        // const data  = await createSite({
        //   variables:{
        //     inputs:values
        // }})

      }}
    >{({ values, handleChange, isSubmitting, handleSubmit, setFieldValue }) => (
      <Layout>
        <Form
          {...formItemLayout}
          layout={'horizontal'}
          // onSubmitCapture={handleSubmit}
        >
          <Form.Item
            name="domainProvider"
            label="Domain provider">
            <Select
             {...selectSearchProps}
            onChange={(_, o:any) => {
              values.domainProviderId = o.value
              values.domainProviderName = o.children
            }}
            >
              {hosterSelect}
            </Select>
          </Form.Item>
          <Form.Item
            name="hostProvider"
            label="Host provider">
            <Select
              {...selectSearchProps}
              onChange={(_, o:any) => {
                values.hostProviderId = o.value
                values.hostProviderName = o.children
              }}
            >
              {hosterSelect}
            </Select>
          </Form.Item>
          <Form.Item
            name="campaign"
            label="Campaign">
            <Select
              {...selectSearchProps}
              onChange={(_, o:any) => {
                values.campaignId = o.value
                values.campaignName = o.children
              }}
            >
              {campaignSelect}
            </Select>
          </Form.Item>


          <Form.Item
            label="Domain"
            name="domain"
          >
            <Input
              value={values.domain}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Dedicated IP"
            name="dedicatedIp"
          >
            <Input
              value={values.dedicatedIp}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Yandex metrika ID"
            name="yandexId"
          >
            <Input
              value={values.yandexId}
              onChange={handleChange}
            />
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
            >Create</Button>
          </Form.Item>
        </Form>


      </Layout>
    )}
    </Formik>
  );
}
export default CreateSite