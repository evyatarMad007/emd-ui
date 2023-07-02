import styled from "styled-components";

export const ConfirmDialogStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  .dialog-title {
    direction: ltr;
    font-size: 1.3rem;
    .modal-type {
        font-weight: bolder;
        color: black;
        text-transform: capitalize;
    }
  }

  .dialog-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    .dialog-btn-wrapper {
        width: max-content;
        padding: 0 1rem;
    }
  }
`;

export const ButtonStyle = {
  padding: "1rem 1.5rem",
  borderRadius: "0.4rem",
};
