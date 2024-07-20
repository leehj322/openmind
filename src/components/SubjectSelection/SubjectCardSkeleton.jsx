import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const SkeletonCardContainer = styled.li`
  min-width: 186px;
  width: 100%;
  height: 187px;
  border-radius: 16px;
  border: 1px solid var(--gray40);
  padding: 20px;
  background-color: var(--gray10);
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    height: 168px;
    padding: 16px;
  }
`;

function SkeletonCard({ isMobile }) {
  const pfpStyle = {
    width: isMobile ? '48px' : '60px',
    height: isMobile ? '48px' : '60px',
  };

  const userNameStyle = {
    marginTop: '12px',
    width: '100%',
    height: isMobile ? '24px' : '25px',
  };

  const questionAreaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: isMobile ? '30px' : '28px',
    height: isMobile ? '24px' : '25px',
  };

  return (
    <SkeletonCardContainer>
      <Skeleton circle style={pfpStyle} />
      <Skeleton style={userNameStyle} />
      <Skeleton style={questionAreaStyle} />
    </SkeletonCardContainer>
  );
}

export default SkeletonCard;
