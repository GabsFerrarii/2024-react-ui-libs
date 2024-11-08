import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Flex, Layout } from 'antd';



type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
<Layout style={{height: "100%"}}>
        <Flex vertical justify="center" align="center" style={{height: "97.8vh"}}>
            <Form
                action={"../Feed"}
                name="basic"
                layout="vertical"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                label="Nome"
                name="username"
                rules={[{ required: true, message: 'Por favor insira seu nome!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Por favor insira sua senha!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                // wrapperCol={{ offset: 8, span: 16 }}
                >
                <Checkbox>Lembrar de mim</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Entrar
                </Button>
                </Form.Item>

                <Link to="../Cadastro">
                    Não possui uma conta? Cadastre-se
                </Link>
                <br/>
                <Link to="../Feed" >
                    Vá para o feed
                </Link>
            </Form>
        </Flex>
    </Layout>
    </div>
  );
};

export default Login;