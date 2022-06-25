import styled from "styled-components";

const TABLET_MIN = 480;
const LAPTOP_MIN = 769;
const DESKTOP_MIN = 1025;
const X_LARGE_MIN = 1201;

export const LocationsContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 25px 60px;
  margin: 0 auto;

  @media (min-width: ${TABLET_MIN}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${LAPTOP_MIN}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${DESKTOP_MIN}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${X_LARGE_MIN}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
