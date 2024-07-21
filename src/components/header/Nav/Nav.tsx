import React, {FC} from 'react';
import StyleNav from './StyleNav.module.scss'


type PropsType = {
    toggle: (value: boolean) => void;
    toggled: boolean;
}

type NavItemProps = {
    to: string;
    children: React.ReactNode;
    onClick: () => void;
};

const NavItem: FC<NavItemProps> = ({to, children, onClick}) => (
    <a
        href={`#${to}`}
        onClick={onClick}
        className={StyleNav.listItem}
    >
        {children}
    </a>
);


export const Nav: FC<PropsType> = ({toggle, toggled}) => {
    const handleToggle = () => toggle(!toggled);

    return (
        <nav className={StyleNav.menu}>
            <ul className={StyleNav.list}>
                <NavItem to="home" onClick={handleToggle}>Home</NavItem>
                <NavItem to="skill" onClick={handleToggle}>Skill</NavItem>
                <NavItem to="works" onClick={handleToggle}>Works</NavItem>
                <NavItem to="contact" onClick={handleToggle}>Contact</NavItem>
            </ul>
        </nav>
    );
};
