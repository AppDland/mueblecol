import React from 'react';
import classNames from 'classnames';

interface HeaderProps {
    headerTitle: string[];
    headerTitleColors?: string[];
    headerButtons?: React.ReactNode[];
    headerBgColor?: string;
}

const Header: React.FC<HeaderProps> = ({
    headerTitle,
    headerTitleColors = [],
    headerButtons = [],
    headerBgColor = 'bg-transparent',
}) => {
    return (
        <header className={classNames('w-full flex justify-between items-center p-4', headerBgColor)}>
            <div className="text-2xl font-bold flex">
                {headerTitle.map((part, index) => (
                    <span key={index} className={headerTitleColors[index]}>
                        {part}
                    </span>
                ))}
            </div>
            <nav>
                <ul className="flex space-x-4">
                    {headerButtons.map((button, index) => (
                        <li key={index}>
                            {button}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;