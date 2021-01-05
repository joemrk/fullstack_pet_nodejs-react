import { Button, Form, Input } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCreateHosterMutation } from '../../generated/graphql';


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
}

const buttonItemLayout = {
  wrapperCol: { span: 8, offset: 4 },
}

const CreateHoster: React.FC = (props) => {
  const [createHoster] = useCreateHosterMutation()
  const history = useHistory()
  return (
    <Formik
      initialValues={{ hosterName: '', siteLink: '', link: '', login: '', passsword: '' }}
      onSubmit={async (values) => {
        const data = await createHoster({
          variables: {
            createHosterInput: {
              name: values.hosterName,
              siteLink: values.siteLink,
              authData: {
                link: values.link,
                login: values.login,
                password: values.passsword
              }
            }
          }
        })
        if(data.data?.createHoster) history.push('/hosters')

      }}
    >{({ values, handleChange, isSubmitting, handleSubmit, setFieldValue }) => (
      <Layout>
        <Form
          {...formItemLayout}
          layout={'horizontal'}
          onSubmitCapture={handleSubmit} >
          <Form.Item
          rules={[{ required: true, message: 'Please input this field!' }]}
            label="Hoster name"
            name="hosterName" >
            <Input
              value={values.hosterName}
              placeholder="Hoster namer"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
          rules={[{ required: true, message: 'Please input this field!' }]}
            label="Site link"
            name="siteLink" >
            <Input
              value={values.siteLink}
              placeholder="Site link"
              onChange={handleChange}
            />
          </Form.Item>
          <br />
          <Form.Item
          rules={[{ required: true, message: 'Please input this field!' }]}
            label="Login link"
            name="link" >
            <Input
              value={values.link}
              placeholder="Login link"
              onChange={handleChange} />
          </Form.Item>
          <Form.Item
          rules={[{ required: true, message: 'Please input this field!' }]}
            label="Login"
            name="login" >
            <Input
              value={values.login}
              placeholder="Login"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
          rules={[{ required: true, message: 'Please input this field!' }]}
            label="Password"
            name="password" >
            <Input
              value={values.passsword}
              placeholder="Password"
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
export default CreateHoster