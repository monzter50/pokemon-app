/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.nav`
    display:flex;
    justify-content:flex-end;
    margin:1rem 0
`;

export const Navigation = styled.ul`
    display:flex;
    justify-content:flex-end;
    margin:1rem 0;
    list-style:none;
`;

export const NavigationItem = styled.li`
    margin:1rem;
    padding:1rem;
    border-top-left-radius:.25rem;
    border-bottom-right-radius:.25rem;
    border-bottom-left-radius:.25rem;
    border-top-right-radius:.25rem;
    background:#222;
    &.active {
        background:#266242;
    }
    color:#fff;
    cursor:pointer;
`;

export const NavigationLink = styled.a`
    padding:1rem;
`;
