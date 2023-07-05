import styled from "styled-components";

interface FormStyledProps {
  maxWidth: string;
}

export const FormStyled = styled.form<FormStyledProps>`
  width: 100%;

  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: ${({ maxWidth }) => maxWidth};
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    gap: 25px;
    width: 100%;
    margin: 0 auto;
    max-width: ${({ maxWidth }) => maxWidth};

    .btn-wrapper {
      button {
        padding: 1rem;
        text-align: center;
      }
    }
  }
`;
