import styled from "styled-components";

export const TaskListButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const Button = styled.button`
    background: none;
    border: none;
    color: #00796b;
    font-size: 16px;
    cursor: pointer;

    &:disabled {
      transition: 0.2s;
      color: #666;         
      cursor: not-allowed;    
      opacity: 0.7;}
`;