import toast from 'react-hot-toast';

const defaultToastStyle = {
  background: '#333',
  color: '#fff',
  borderRadius: '8px',
  padding: '16px',
};

/**
 * 사용자 정의 스타일과 위치를 사용하여 토스트 메시지를 표시합니다.
 *
 * @param {string} message - 표시할 메시지입니다.
 * @param {Object} [options] - 토스트 메시지의 옵션입니다.
 * @param {number} [options.duration=4000] - 메시지가 표시되는 시간 (밀리초 단위). 기본값은 4000입니다.
 * @param {Object} [options.style={}] - 토스트 메시지의 스타일을 사용자 정의합니다. 기본값은 빈 객체입니다.
 * @param {string} [options.position='top-center'] - 토스트 메시지의 위치를 설정합니다. 기본값은 'top-center'입니다. 가능한 값은 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'입니다.
 *
 * @example
 * showToast('토스트 메시지가 표시되었습니다!', {
 *   duration: 5000,
 *   style: {
 *     background: 'blue',
 *     color: 'white',
 *     borderRadius: '12px',
 *     padding: '20px',
 *   },
 *   position: 'bottom-right'
 * });
 */

const showToast = (message, { duration = 4000, style = {}, position = 'top-center' } = {}) => {
  const options = {
    duration,
    style: { ...defaultToastStyle, ...style }, // 기본 스타일과 사용자 정의 스타일 병합
    position, // 토스트 위치 설정
  };

  toast(message, options); // 기본 메시지
};

export default showToast;
