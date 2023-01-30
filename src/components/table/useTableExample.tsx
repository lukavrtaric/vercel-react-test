import { useFormExampleData } from '../../rxjs/rxjs-example';
import React from 'react';
import { FormExampleDataType } from '../../pages/home-page/interfaces';
import { PokemonGender, PokemonTypes } from './columns/Columns';
import { Button } from '../index';

export const useTableExample = () => {
    const data = useFormExampleData();
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [initialValues, setInitialValues] = React.useState<| {
        key: string;
        data: Omit<FormExampleDataType[number], 'key'>;
    }
        | undefined>();
    const closeModal = () => {
        setInitialValues(undefined);
        setModalOpen(false);
    };
    const columns = React.useMemo(
        () => [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
                render: (gender: number) => <PokemonGender selectedGender={gender} />,
            },
            {
                title: 'Level',
                dataIndex: 'level',
                key: 'level',
            },
            {
                title: 'Types',
                dataIndex: 'types',
                key: 'types',
                render: (type: number) => <PokemonTypes selectedType={type} />,
            },
            {
                title: 'Edit',
                dataIndex: 'edit',
                key: 'edit',
                render: (_: void, record: FormExampleDataType[number]) => (
                    <div className='flex'>
                        <Button
                            onClick={() => {
                                setModalOpen(true);
                                const { key, ...rest } = record;
                                setInitialValues({ key, data: rest });
                            }}
                        >
                            Edit
                        </Button>
                    </div>
                ),
            },
        ],
        [],
    );
    return { modalOpen, closeModal, columns, data, initialValues };
};
