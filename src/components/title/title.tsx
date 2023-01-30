import React from 'react';

type Props = {
    type?: 'primary' | 'secondary' | 'tertiary';
};

const Title: React.FC<React.PropsWithChildren<Props>>
    = ({
           children,
           type = 'primary',
       }) => {
    if (type === 'primary') {
        return <h1 className='text-xl 2xl:text-3xl text-[#17355D]'>{children}</h1>;
    }
    if (type === 'secondary') {
        return <h3 className='text-lg text-[#17355D] '>{children}</h3>;
    }
    return <h4>{children}</h4>;
};

export default Title;
