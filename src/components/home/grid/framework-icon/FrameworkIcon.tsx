import { FC } from 'react';
import { Icon } from '../../../../pages/home-page/interfaces';
import { Image } from 'antd';


export const FrameworkIcon: FC<Icon> = ({ name, version, icon, data_test_id }) => {
    return (
        <div className='flex flex-col'>
            <div
                className='w-[5vh] h-[10vh] md:w-[10vh] md:h-[20vh] items-center text-center self-center flex flex-col justify-center'>
                <Image
                    src={icon}
                    alt='Missing img'
                    preview={false}
                    data-test-id={data_test_id}
                />
                <h3 className='text-[#17355D] font-semibold'>{name}</h3>
                <span className='text-[#17355D]'>{version}</span>
            </div>
        </div>
    );
};
