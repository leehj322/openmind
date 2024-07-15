import styled from 'styled-components';
// api에서 유저별 사진 받아와야함

const ProfileImg = styled.img`
  width: 60px;
  border-radius: 9999px;
`;

function ProfileImgArea() {
  return <ProfileImg />;
}

export default ProfileImgArea;
