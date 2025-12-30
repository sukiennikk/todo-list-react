import styled from "styled-components";

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 0px;
  margin-left: 20px;
  background: teal;
  color: white;
  cursor: pointer;

  &:active {
    transform: scale(1.01);
  }
`;
