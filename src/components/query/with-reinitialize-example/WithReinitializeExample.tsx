import React from 'react';
import { Button, Title } from '../../index';
import { WithReinitializeExampleHoc } from './hoc/WithReinitializeExampleHoc';


export const WithReinitializeExample = () => {
    const [initialValues, setInitialValues] = React.useState(Math.random());
    return (
        <>
            <Title type='primary'> With Reinitialize Example</Title>
            <div className='flex flex-col gap-10 2xl:py-8 py-4'>
                <div>
                    <WithReinitializeExampleHoc initialValues={initialValues} />
                    <Button className='text-[#17355D] border-[#17355D]'
                            onClick={() => setInitialValues(Math.random())}>
                        Reinitialize
                    </Button>
                </div>
            </div>
        </>
    );
};
