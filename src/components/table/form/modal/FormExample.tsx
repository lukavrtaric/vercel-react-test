import { Form, Input, Select } from 'antd';
import { Button } from 'components/index';
import { formExampleIntent$, FormValuesType } from 'rxjs/rxjs-example';
import { genders, types } from '../../../../pages/table-page/constants';


export default function FormExample(
    {
        initialValues,
        id,
        onSubmitAction,
    }: {
        initialValues?: FormValuesType;
        id?: string;
        onSubmitAction?: () => void;
    }) {
    const [form] = Form.useForm<FormValuesType>();
    return (
        <Form
            form={form}
            name='form-example'
            autoComplete='false'
            initialValues={initialValues}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 12 }}
            onFinish={(data) => {
                formExampleIntent$.next({ data, id });
                form.resetFields();
                onSubmitAction && onSubmitAction();
            }}
        >
            <Form.Item
                name='name'
                label='Name'
                rules={[{ required: true }]}
            >
                <Input placeholder='Name' />
            </Form.Item>
            <Form.Item
                name='gender'
                label='Gender'
                rules={[{ required: true }]}
            >
                <Select options={genders} placeholder='Gender' />
            </Form.Item>
            <Form.Item
                name='level'
                label='Level'
                rules={[{ required: true, min: 0, max: 100 }]}
            >
                <Input placeholder='Level' />
            </Form.Item>
            <Form.Item
                name='types'
                label='Types'
                rules={[{ required: true }]}
            >
                <Select options={types} placeholder='Types' />
            </Form.Item>
            <div className='w-full flex flex-row-reverse'>
                <Button type='submit' className='text-[#17355D] border-[#17355D] lg:w-[200px]'>
                    {initialValues ? 'Update' : 'Save'}
                </Button>
            </div>
        </Form>
    );
}
