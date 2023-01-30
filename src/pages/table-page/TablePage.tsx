import { PageWrapper, Title } from '../../components';
import { FormExample } from '../../components/table/form';
import { TableExample } from '../../components/table/TableExample';

export default function Table() {
    return (
        <PageWrapper>
            <div className='p-8'>
                <div className='w-full'>
                    <Title type='secondary'>Form Example</Title>
                    <FormExample />
                    <TableExample />
                </div>
            </div>
        </PageWrapper>
    );
}
