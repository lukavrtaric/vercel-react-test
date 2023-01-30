import React from 'react';
import { withReinitialize } from '../../../../hocs';


export const WithReinitializeExampleHoc = withReinitialize(function(props: {
    initialValues: number;
}) {
    const [values] = React.useState(props.initialValues);
    return (
        <span className='2xl:text-lg mr-20 text-[#17355D]'>Initial values: {values}</span>
    );
});
