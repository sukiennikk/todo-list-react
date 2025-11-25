import styled, { css }from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

   ${({hidden}) => hidden && css`
       display: none;
   `}
`;

export const Content = styled.span`
    flex-grow: 1;
    
    ${({done}) => done && css`
    text-decoration: line-through;
    `}
`;