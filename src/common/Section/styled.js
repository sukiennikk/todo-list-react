import styled from "styled-components";

export const Wrapper = styled.section`
    background: white;
    box-shadow: 0 0 5px #ddd;
    border-radius: 0px; 
    overflow: hidden;
    margin: 20px 0;
`;

export const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
`;

export const Header = styled.h2`
    line-height: 1.2;
    font-size: 20px;
    padding: 0;
    margin: 0;
    border-bottom: none;
`;

export const Body = styled.div`
    padding: 20px;
`;