import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${(props) => props.theme["blue-100"]};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme["blue-300"]};
      font-size: 0.875rem;
    }
  }

  input[type="text"] {
    border: 1px solid ${(props) => props.theme["blue-500"]};
    border-radius: 8px;
    padding: 1rem;

    background-color: ${(props) => props.theme["blue-900"]};
    color: ${(props) => props.theme["blue-100"]};

    &::placeholder {
      color: ${(props) => props.theme["blue-400"]};
    }
  }
`;
