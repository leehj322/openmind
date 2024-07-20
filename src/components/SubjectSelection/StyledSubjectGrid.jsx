import styled from 'styled-components';

// 다른 반응형과 다른 px값에서 GRID가 바뀌어서 GRID_BREAKPOINT 상수 추가
export const GRID_BREAKPOINT = { tablet: 868, mobile: 767 };
export const NUM_OF_SUBJECTS = { pc: 8, other: 6 }; // limit 값 담은 상수

const StyledSubjectGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: ${GRID_BREAKPOINT.tablet}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 375px) and (max-width: ${GRID_BREAKPOINT.mobile}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default StyledSubjectGrid;
