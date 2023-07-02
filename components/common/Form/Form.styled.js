import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;

  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: ${({maxWidth}) => maxWidth};
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    gap: 25px;
    width: 100%;
    margin: 0 auto;
    max-width: ${({maxWidth}) => maxWidth};
    
    .btn-wrapper {
        button {
            padding: 1rem;
            text-align: center;
        }

    }
  }
`;

export const InpWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    max-width: ${(props) => `${props.maxWidth}px`};
`;

