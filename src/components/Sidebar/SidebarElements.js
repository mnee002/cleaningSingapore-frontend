import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {NavLink as Link} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #2471ed;
    display: gird;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;
    opacity: ${({ isOpen })=> (isOpen ? '100%' : '0')};
    top: ${({ isOpen })=> ( isOpen ? '0': '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    padding-top: 100px;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(6,60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #FFD700;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarExtLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #FFD700;
        transition: 0.2s ease-in-out;
    }
`;