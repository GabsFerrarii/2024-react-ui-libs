import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Flex, Layout, Modal, List } from 'antd';
import { DatePicker} from 'antd';
import { Typography } from "antd";


const Feed: React.FC = () => {
    const navigate = useNavigate();
    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
<Layout style={{height: "100%"}}>
        <Flex vertical justify="center" align="center" style={{height: "97.8vh"}}>
            <Title>
                Lista de Tarefas
            </Title>
            <Button type="primary" onClick={showModal}>
                Adicionar Tarefa
            </Button>
            <Modal title="Adicione sua tarefa" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    Adicionar
                </Button>,
                ]}>
                <Form layout={"vertical"}>
                <Form.Item label="Título" name="titulo" rules={[{ required: true, message: 'Por favor dê um título!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Descrição"
                    name="descricao"
                    rules={[{ required: true, message: 'Por favor dê uma descrição!' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="Prazo final"
                    name="prazo"
                    rules={[{ required: true, message: 'Por favor dê um prazo!' }]}
                >
                    <DatePicker style={{width: "100%"}} />
                </Form.Item>
                </Form>
            </Modal>
            <List
            style={{width: "50%"}}
            itemLayout="horizontal">     
                <List.Item>
                    <List.Item.Meta
                    title={<a href="Detalhedatarefa">Título</a>}
                    description="Descrição da tarefa"
                    />
                    <a style={{margin: "1rem"}}>
                        Editar
                    </a>
                    <a>
                        Excluir
                    </a>
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                    title={<a href="Detalhedatarefa">Título 2</a>}
                    description="Descrição da tarefa 2"
                    />
                    <a style={{margin: "1rem"}}>
                        Editar
                    </a>
                    <a>
                        Excluir
                    </a>
                </List.Item>
            </List>
        </Flex>
    </Layout>
    </div>
      
    );
  }
  export default Feed;