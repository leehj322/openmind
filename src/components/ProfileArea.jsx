import styled from 'styled-components';
import ProfileImgArea from './@shared/ProfileImgArea';

const UserNameWrapper = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`;

function ProfileArea() {
  return (
    <>
      <ProfileImgArea />
      <UserNameWrapper>이름</UserNameWrapper>
    </>
  );
}

export default ProfileArea;
