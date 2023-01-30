import { SectionWrapper, Title } from '../index';
import { Modal, Table } from 'antd';
import { FormExample } from './form';
import { useTableExample } from './useTableExample';

export const TableExample = () => {
    const { modalOpen, closeModal, columns, data, initialValues } =
        useTableExample();
    return (
        <SectionWrapper>
            <Title type='secondary'>Table Example</Title>
            <Table className='my-4' dataSource={data} columns={columns} />

            <Modal
                visible={modalOpen}
                title='Edit'
                onCancel={closeModal}
                footer={null}
            >
                <FormExample
                    initialValues={initialValues?.data}
                    id={initialValues?.key}
                    onSubmitAction={closeModal}
                />
            </Modal>
        </SectionWrapper>
    );
};
