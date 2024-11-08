import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { FormProps } from 'antd';
import type { DatePickerProps } from 'antd';
import { Button, Form, Input, Flex, Layout, DatePicker, Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

type FieldType = {
    username?: string;
    password?: string;
    conPassword?: string;
    email?: string;
    gender?: string;
    date?: string;
  };
  
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

const Cadastro: React.FC = () => {
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
                style={{ maxWidth: 600 }}
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
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Por favor insira seu email!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<FieldType>
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Por favor insira sua senha!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                label="Confirme sua Senha"
                name="conPassword"
                rules={[{ required: true, message: 'Por favor confirme sua senha!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Data de nascimento"
                    name="dataNasc"
                    rules={[{ required: true, message: 'Por favor insira seu nascimento!' }]}
                >
                    <DatePicker style={{width: "100%"}} />
                </Form.Item>

                <Form.Item
                label="Gênero"
                name="genero"
                rules={[{ required: true, message: 'Por favor insira seu gênero!' }]}
                >
                <Select
                
                defaultValue="Seu Gênero"
                style={{width: "100%"}}
                onChange={handleChange}
                options={[
                    { value: 'feminino', label: 'Feminino' },
                    { value: 'masculino', label: 'Masculino' },
                    { value: 'naobinario', label: 'Não Binário' },
                    { value: 'outro', label: 'Outro'},
                    { value: 'naoinformado', label: 'Prefiro Não Informar' },
                ]}
                />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Cadastrar
                </Button>
                </Form.Item>
                <Link to="../Login">
                    Já possui uma conta? Entre
                </Link>
            </Form>
        </Flex>
    </Layout>
    </div>
  );
};

export default Cadastro;