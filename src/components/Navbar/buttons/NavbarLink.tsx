import React from 'react';
import { Link } from 'react-scroll';

type NavbarLinkProps = {
    href: string;
    children: React.ReactNode;
};

const NavbarLink = ({href, children}: NavbarLinkProps) => {
    return (
        <Link className='inline-block text-white mr-4' to={href} href={href} smooth={true} duration={500}>{children}</Link>
    );
}

export default NavbarLink;
