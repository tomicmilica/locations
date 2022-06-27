import styled from "styled-components";

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 440px;
  height: 350px;
  padding: 5px 30px;
  border: 1.5px solid rgba(0, 17, 34, 0.1);
  border-radius: 3px;
  position: relative;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 14px;
  }

  button {
    border: none;
    opacity: 30%;
    cursor: pointer;
  }

  p {
    font-size: 14px;
  }
`;
