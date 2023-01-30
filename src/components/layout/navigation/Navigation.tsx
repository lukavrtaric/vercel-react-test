import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../index';
import { FaBars } from 'react-icons/fa';
import { NavigationItem } from './item/NavigationItem';

export const PrimaryNavigation = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const toggleNavigation = () => {
        setNavbarOpen((prev) => !prev);
    };
    return (
        <>
            <nav className='sticky z-10 top-0 flex flex-wrap items-center justify-between h-[10vh] bg-[#17355D]'>
                <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <Link
                            to='/'
                            className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
                        >
                            Home page
                        </Link>
                        <Button
                            onClick={toggleNavigation}
                            mode='navigation'
                            className='lg:hidden'
                        >
                            <FaBars size={16} />
                        </Button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center' +
                            (navbarOpen ? ' flex' : ' hidden')
                        }
                    >
                        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                            <NavigationItem to='/query'>Query</NavigationItem>
                            <NavigationItem to='/table'>Table</NavigationItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
