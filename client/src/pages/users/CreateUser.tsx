import { Button, Form, Input } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRegisterMutation } from '../../generated/graphql';


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
}

const buttonItemLayout = {
  wrapperCol: { span: 8, offset: 4 },
}



const CreateUser: React.FC = ({ }) => {
  const [registration] = useRegisterMutation()
  const history = useHistory()


  return (
    <Formik
      initialValues={{ username: '', password: '', yandexLogin: '', telegram: '', errors: [''] }}
      onSubmit={async (values) => {
        const data = await registration({
          variables: {
            input: {
              username: values.username,
              password: values.password,
              yandexLogin: values.yandexLogin,
              telegram: values.telegram
            }
          }
        })
        console.log(data);

        if (data.data?.registration.error) values.errors = data.data?.registration.error
        if (data.data?.registration.token) history.push('/users')

      }} >
      {({ values, handleChange, isSubmitting, handleSubmit }) => (
        <Layout>
          <Form
            {...formItemLayout}
            layout={'horizontal'}
            onSubmitCapture={handleSubmit} >

            <Form.Item
              rules={[{ required: true, message: 'Please input this field!' }]}
              label="Username"
              name="username" >
              <Input
                value={values.username}
                onChange={handleChange} />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Please input this field!' }]}
              label="Password"
              name="password" >
              <Input
                value={values.password}
                onChange={handleChange} />
            </Form.Item>
            <Form.Item
              label="Yandex"
              name="yandexLogin" >
              <Input
                placeholder="username"
                value={values.yandexLogin}
                onChange={handleChange} />
            </Form.Item>
            <Form.Item
              label="Telegram"
              name="telegram" >
              <Input
                placeholder="@username"
                value={values.telegram}
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

          {values.errors.map(e => <p style={{ color: 'red' }}>{e}</p>)}
        </Layout>
      )}
    </Formik>
  )
}
export default CreateUser