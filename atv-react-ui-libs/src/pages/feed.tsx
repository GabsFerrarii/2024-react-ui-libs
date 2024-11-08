import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Modal, List, DatePicker, Typography, Layout } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';

interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    prazo: Moment;
}

const Feed: React.FC = () => {
    const navigate = useNavigate();
    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [editandoTarefa, setEditandoTarefa] = useState<Tarefa | null>(null);
    
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            if (editandoTarefa) {
                // Atualizar tarefa
                setTarefas((prev) =>
                    prev.map((tarefa) =>
                        tarefa.id === editandoTarefa.id
                            ? { ...tarefa, ...values, prazo: values.prazo }
                            : tarefa
                    )
                );
                setEditandoTarefa(null);
            } else {
                // Adicionar nova tarefa
                const novaTarefa = {
                    id: tarefas.length + 1,
                    titulo: values.titulo,
                    descricao: values.descricao,
                    prazo: values.prazo,
                };
                setTarefas([...tarefas, novaTarefa]);
            }
            form.resetFields();
            setIsModalOpen(false);
        });
    };

    const handleCancel = () => {
        setEditandoTarefa(null);
        form.resetFields();
        setIsModalOpen(false);
    };

    const editarTarefa = (tarefa: Tarefa) => {
        setEditandoTarefa(tarefa);
        form.setFieldsValue({
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            prazo: moment(tarefa.prazo),
        });
        setIsModalOpen(true);
    };

    const excluirTarefa = (id: number) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };

    return (
        <div>
            <Layout style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '97.8vh' }}>
                    <Title>Lista de Tarefas</Title>
                    <Button type="primary" onClick={showModal}>
                        Adicionar Tarefa
                    </Button>
                    <Modal
                        title={editandoTarefa ? 'Editar Tarefa' : 'Adicione sua tarefa'}
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Cancelar
                            </Button>,
                            <Button key="submit" type="primary" onClick={handleOk}>
                                {editandoTarefa ? 'Atualizar' : 'Adicionar'}
                            </Button>,
                        ]}
                    >
                        <Form form={form} layout="vertical">
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
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Form>
                    </Modal>
                    <List
                        style={{ width: '50%' }}
                        itemLayout="horizontal"
                        locale={{ emptyText: "Sem tarefas listadas" }}
                        dataSource={tarefas}
                        renderItem={(tarefa) => (
                            <List.Item
                                actions={[
                                    <a key="edit" onClick={() => editarTarefa(tarefa)}>
                                        Editar
                                    </a>,
                                    <a key="delete" onClick={() => excluirTarefa(tarefa.id)}>
                                        Excluir
                                    </a>,
                                ]}
                            >
                                <List.Item.Meta
                                    title={tarefa.titulo}
                                    description={`${tarefa.descricao} - Prazo: ${tarefa.prazo.format('DD/MM/YYYY')}`}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </Layout>
        </div>
    );
};

export default Feed;
