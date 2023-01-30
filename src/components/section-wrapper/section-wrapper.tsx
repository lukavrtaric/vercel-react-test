import React from 'react';

export default function SectionWrapper({ children }: React.PropsWithChildren) {
    return <div className='w-full py-4'>{children}</div>;
}
