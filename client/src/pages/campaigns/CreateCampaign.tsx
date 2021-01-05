import React from 'react'
import { Formik } from 'formik'
import Layout from 'antd/lib/layout/layout';
import { Button, Form, Input, Space } from 'antd';
import { useCreateCampaignMutation } from '../../generated/graphql';
import { useHistory } from 'react-router-dom';


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
}

const buttonItemLayout = {
  wrapperCol: { span: 8, offset: 4 },
}


const CreateCampaign: React.FC = ({ }) => {

  const [createCampaign] = useCreateCampaignMutation()
  const history = useHistory()


  return (
    <Formik
      initialValues={{ langue: '', campaignName: '' }}
      onSubmit={async (values) => {
        const data = await createCampaign({variables: {input: values}})
        if(data.data?.createCampaign) history.push('/campaigns')
        
      }} >
      {({ values, handleChange, isSubmitting, handleSubmit, setFieldValue }) => (
        <Layout>
          <Form
            {...formItemLayout}
            layout={'horizontal'}
            onSubmitCapture={handleSubmit} >

            <Form.Item
            rules={[{ required: true, message: 'Please input this field!' }]}
              label="Campaign langue"
              name="langue" >
              <Input
                value={values.langue}
                onChange={handleChange} />
            </Form.Item>
            <Form.Item
            rules={[{ required: true, message: 'Please input this field!' }]}
              label="Campaign name"
              name="campaignName" >
              <Input
                value={values.campaignName}
                onChange={handleChange} />
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
  )
}
export default CreateCampaign