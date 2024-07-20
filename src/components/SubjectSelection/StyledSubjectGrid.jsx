import styled from 'styled-components';
import { GRID_BREAKPOINT } from '../../constants/subjectGrid';

const StyledSubjectGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 187px);
  gap: 20px;

  @media screen and (max-width: ${GRID_BREAKPOINT.tablet}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 375px) and (max-width: ${GRID_BREAKPOINT.mobile}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 187px);
  }
`;

export default StyledSubjectGrid;
