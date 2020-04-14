/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link as DefualtLink } from 'react-router-dom';

type LinkProps = {
    to: string;
    children: React.ReactNode;
};
function Link({
    to,
    children
}: LinkProps){
    return (<DefualtLink to={to}>{children}</DefualtLink>);
}