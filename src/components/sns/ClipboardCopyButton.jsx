import styled from 'styled-components';
import copyClipboardIcon from '../../images/copy_clipboard_icon.png';
import Tooltip from './Tooltip';

const StyledShareIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

//props로 뒷부분 쿼리 받아와서 쓸 수 있도록 제작 예장
function ClipboardCopyButton() {
  const handleCopy = () => {
    const urlToCopy = 'http://localhost:3000/test'; // 복사할 URL

    // 임시로 textarea 엘리먼트를 생성하여 클립보드에 복사할 URL을 설정
    const dummy = document.createElement('textarea');
    dummy.value = urlToCopy;
    document.body.appendChild(dummy);

    // textarea 내용을 선택하고 클립보드에 복사
    dummy.select();
    document.execCommand('copy');

    // 생성한 임시 textarea 엘리먼트를 제거
    document.body.removeChild(dummy);

    // 복사 완료 메시지(임시)
    alert('URL이 클립보드에 복사되었습니다.');
  };
  return (
    <Tooltip content="클립보드에 복사하기">
      <StyledShareIcon src={copyClipboardIcon} alt="클립보드 복사 아이콘" onClick={handleCopy} />
    </Tooltip>
  );
}

export default ClipboardCopyButton;
