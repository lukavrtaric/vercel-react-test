import { DATA_IDS } from 'constants/data-ids';
import { FC, PropsWithChildren } from 'react';

import './style.css';

interface IProps {
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    mode?: 'default' | 'danger' | 'navigation';
    type?: 'button' | 'submit' | 'reset';
}

const Button: FC<PropsWithChildren<IProps>> = ({
    children,
    className,
    disabled,
    onClick,
    mode,
    type = 'button',
}) => {
    const resolvedClassName = resovleButtonClassName(mode, className);
    return (
        <button
            data-testid={DATA_IDS.BUTTON}
            className={resolvedClassName}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

const resovleButtonClassName = (
    mode?: 'default' | 'danger' | 'navigation',
    className?: string,
): string => {
    let modeClassName: string;
    switch (mode) {
        case 'default':
            modeClassName = 'button-default';
            break;
        case 'danger':
            modeClassName = 'button-danger';
            break;
        case 'navigation':
            modeClassName = 'button-navigation';
            break;
        default:
            modeClassName = 'button-default';
            break;
    }
    if (!className) {
        return `button-common ${modeClassName}`;
    }
    return `button-common ${modeClassName} ${className}`;
};

export default Button;
