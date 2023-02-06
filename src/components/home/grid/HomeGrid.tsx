import Logo from '/images/biss-logo.png';
import { FRAMEWORKS } from '../../../constants/constants';
import { FrameworkIcon } from './framework-icon/FrameworkIcon';

export const HomeGrid = () => {
    return (
        <div
            className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-white h-full items-center justify-items-center'>
            <div className='w-[50vh] md:w-auto'>
                <img
                    className='self-center'
                    src={Logo}
                    alt='Missing img'
                />
            </div>
            <div className='grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
                {FRAMEWORKS.map(({ id, name, version, icon, data_test_id }) => (
                    <FrameworkIcon key={id} name={name} icon={icon} version={version} data_test_id={data_test_id} />
                ))}
            </div>
        </div>
    );
};
