import React from 'react';
import { Link } from 'react-router-dom';


export const NavigationItem = ({ children, to }: React.PropsWithChildren<{
    to: string;
}>) => {
    return (
        <li className='nav-item'>
            <Link
                to={to}
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
            >
                <span className='ml-2'>{children}</span>
            </Link>
        </li>
    );
};
