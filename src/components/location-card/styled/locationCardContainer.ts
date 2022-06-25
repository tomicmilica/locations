import styled from "styled-components";

export const LocationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  border: 1.5px solid rgba(0, 17, 34, 0.1);
  border-radius: 3px;
  :hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    opacity: 80%;
  }
`;
