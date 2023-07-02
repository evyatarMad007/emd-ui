import styled from "styled-components";

export const ModalTemplateStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;

  .outside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1b1b1b72;
    animation: outside-fade-in 0.15s;
    @keyframes outside-fade-in {
      0% {
        background-color: transparent;
      }
      100% {
        background-color: #1b1b1b72;
      }
    }
  }

  .inside {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    z-index: 101;
    max-width: 700px;
    width: 98%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    animation: inside-fade-in 0.3s;
    @keyframes inside-fade-in {
      0% {
        opacity: 0;
        transform: translate(-50%, -48%);
      }
      100% {
        opacity: 1;
      }
    }

    .modal-header {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;
      background-color: white;
      border-bottom: 1px solid #0000001c;
      position: relative;

      .icon {
        position: absolute;
        left: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .title {
        font-size: 20px;
        font-weight: 600;
        margin-left: 3rem;
      }

      .close-button {
        position: absolute;
        right: 0.9rem;
        top: 0;
        bottom: 0;
        margin: auto;
        border: none;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        /* transition: all 0.1s; */

        &:hover {
          background-color: #00000018;
          svg {
            color: #4b4b4b !important;
          }
        }

        &:active {
          background-color: #00000037;
          transform: translateY(2px);
        }
      }
    }

    .modal-body {
      width: 99.5%;
      padding: 1rem 1rem;
      height: max-content;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      overflow: auto;
      direction: rtl;
      background-color: #0000000d;
    }

    .modal-footer {
      width: 99.5%;
      height: 30px;
      border-bottom-left-radius: 0.45rem;
      border-bottom-right-radius: 0.45rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #00000024;
      padding: 0.5rem 1rem;
      margin-bottom: 0.15rem;
      background-color: #0000000d;
      overflow: hidden;
      .modal-error {
        color: #ff0000;
        font-size: 1rem;
        margin-right: 0.5rem;
        animation: error-fade-in 0.25s;

        @keyframes error-fade-in {
          0% {
            opacity: 0;
            transform: translateY(5px); 
          }

          20% {
            opacity: 1;
            transform: translateY(-5px);
          }

          40% {
            opacity: 1;
            transform: translateY(3px);
          }
          60% {
            opacity: 1;
            transform: translateY(-3px);
          }
          80% {
            opacity: 1;
            transform: translateY(2px);
          }

          100% {
            opacity: 1;
            transform: translateY(0%);
          }
          
        }
      }
    }
  }
`;
