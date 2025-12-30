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
  margin: 0 10px;
  cursor: pointer;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}

  &:hover {
    opacity: 0.7;
  }
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;

    ${({toggleDone}) => toggleDone && css`
        background: #1a7b1e;
    `}
    ${({toggleRemove}) => toggleRemove && css`
        background: #e11;
    `}
`;