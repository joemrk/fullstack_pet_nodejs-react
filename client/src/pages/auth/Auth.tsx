import { Button, Form, Input, Space, Typography } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLoginMutation, useRegisterMutation } from '../../generated/graphql';

const { Title } = Typography;

const Auth: React.FC = (props) => {
    const [registration] = useRegisterMutation()
    const [login] = useLoginMutation()
    const history = useHistory()

    const setToken = (token: string) => {
        if (token && typeof token === 'string') {
            localStorage.setItem('token', token)
            history.push('/afterauth')
        }
    }
    return (
        <Formik
            initialValues={{ username: "", password: "", loginBtn: false, errors: [''] }}
            onSubmit={async (values) => {
                const authInput = {
                    variables: {
                        input: {
                            password: values.password,
                            username: values.username
                        }
                    }
                }
                if (values.loginBtn) {
                    const result = await login(authInput)
                    console.log(result);

                    if (result.data?.login.error) values.errors = result.data.login.error
                    else if (result.data?.login) {
                        const token = result.data.login.token!
                        setToken(token)
                    }
                }
                if (!values.loginBtn) {
                    const result = await registration(authInput)
                    console.log(result);

                    if (result.data?.registration.error) values.errors = result.data.registration.error
                    else if (result.data?.registration) {
                        const token = result.data.registration.token!
                        setToken(token)
                    }
                }
            }}
        >
            {({ values, handleChange, isSubmitting, handleSubmit, setFieldValue }) => (
                <Layout>
                    <Content
                        style={{
                            maxWidth: '600px',
                            margin: '0 auto',
                            paddingTop: '20vh',
                            display: 'flex',
                            height: '100vh'
                        }}
                    >
                        <Form
                            labelAlign={'left'}
                            layout={'vertical'}
                            size={'middle'}
                            onSubmitCapture={handleSubmit}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input
                                    value={values.username}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Space>
                                    <Button
                                        type="primary"
                                        htmlType="button"
                                        loading={isSubmitting}
                                        onClick={() => {
                                            setFieldValue('loginBtn', true)
                                            handleSubmit();
                                        }}
                                    > Login </Button>
                                    {/* <Button
                                        type="primary"
                                        htmlType="button"
                                        loading={isSubmitting}
                                        onClick={() => {
                                            handleSubmit();
                                        }}
                                    > Register </Button> */}

                                </Space>
                            </Form.Item>

                            {values.errors.map(e => <p style={{ color: 'red' }}>{e}</p>)}
                        </Form>
                    </Content>
                </Layout>
            )}
        </Formik>
    );
}
export default Auth