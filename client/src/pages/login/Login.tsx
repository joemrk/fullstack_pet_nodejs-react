import { Button, Form, Input } from 'antd';
import { Formik } from 'formik';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLoginMutation, MeQuery, MeDocument, useMeQuery } from '../../generated/graphql';
import { Typography } from 'antd';

const { Title } = Typography;


const Login: React.FC = (props) => {
    
    const [login] = useLoginMutation()
    // const { loading, error, data } = useQuery(GET_DOGS, {
    //     fetchPolicy: "cache-and-network" //cмотрит кеш + синхронизируетсся с серверром 
    //   });

    //для логаута
    // const { client, loading, data: { currentUser } } = useQuery(
    //     PROFILE_QUERY,
    //     { fetchPolicy: "network-only" }
    //   );
    // вызвать client.resetStore()



    // const onFinish = values => {
    //     console.log('Success:', values);
    //   };

    //   const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    //   };
    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, {setErrors}) => {
                const result = await login({ variables: { input: values }})
                const token = result.data?.login.token
                // if(result.data?.login.errors) setErrors(result.data?.login.errors)
                if (token && typeof token === 'string'){
                    localStorage.setItem('token', token)
                    return <Redirect to={`/sites`}></Redirect>
                }
            }}
        >
            {({ values, handleChange, errors, isSubmitting, handleSubmit }) => (
               <div className="">
                    <Title level={2}>Login</Title>
               
               <Form
                labelAlign={'left'}
                layout={'vertical'}
                size={'middle'}
                wrapperCol={{ span: 6}}
                    // onFinish={handleSubmit}
                    onSubmitCapture={handleSubmit}
                    // onFinishFailed={onFinishFailed}
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isSubmitting}
                        >
                            Login
                    </Button>
                    </Form.Item>
                </Form>
               </div>

            )}
        </Formik>
    );
}
export default Login