import { FC } from 'react';
import { Icon } from '../../../../pages/home-page/interfaces';
import { Image } from 'antd';


export const FrameworkIcon: FC<Icon> = ({ name, version, icon }) => {
    return (
        <div className='flex flex-col'>
            <div
                className='w-[5vh] h-[10vh] md:w-[10vh] md:h-[20vh] items-center text-center self-center flex flex-col justify-center'>
                <Image
                    src={icon}
                    alt='Missing img'
                    preview={false}
                />
                <h3 className='text-[#17355D] font-semibold'>{name}</h3>
                <span className='text-[#17355D]'>{version}</span>
            </div>
        </div>
    );
};
