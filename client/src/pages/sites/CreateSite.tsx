import React from 'react'
import Layout from 'antd/lib/layout/layout';
import { Formik } from 'formik';
import { Button, Form, Input, Select, Space, Typography } from 'antd';
import { useHostersQuery, useCreateHosterMutation, useCreateSiteMutation } from '../../generated/graphql';
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
  const { data, loading } = useHostersQuery()
  const [createSite] = useCreateSiteMutation()



  if (loading) return <div>Loading...</div>

  const hosterSelect = data?.hosters ? data?.hosters.map(h => (
    <Select.Option value={h.id}>{h.name}</Select.Option>
  )) : []


  return (
    <Formik
      initialValues={{
        domainProviderId: '',
        domainProviderName: '',
        hostProviderId: '',
        hostProviderName: '',
        domain: '',
        dedicatedIp: '',
        yandexId: '',
        holderId: '',
        holderName: ''
      }}
      onSubmit={async (values) => {
        console.log(values);
        const data  = await createSite({
          variables:{
            inputs:values
        }})

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
            label="Domain"
            name="domain"
          >
            <Input
              value={values.domain}
              placeholder="Domain"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Dedicated IP"
            name="dedicatedIp"
          >
            <Input
              value={values.dedicatedIp}
              placeholder="IP"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Yandex metrika ID"
            name="yandexId"
          >
            <Input
              value={values.yandexId}
              placeholder="ID"
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