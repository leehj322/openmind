/**
 * 생성된 시간을 인자로 받아, 현재 시간과 비교하여 지난 기간을 알려주는 함수
 * @param {string} createdAt 생성 시간
 * @returns {string} 지나간 시간을 문자열로 반환합니다(예: 방금 전, 1시간 전)
 */
const getElapsedPeriod = createdAt => {
  const createdDate = new Date(createdAt);
  const milliSeconds = new Date().getTime() - createdDate.getTime(); // 지나간 시간 계산(밀리세컨드 단위)
  const seconds = milliSeconds / 1000;

  if (seconds < 60) {
    return `방금 전`;
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`;
  }

  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  }

  const days = hours / 24;
  if (days < 7) {
    return `${Math.floor(days)}일 전`;
  }

  const weeks = days / 7;
  if (weeks < 5) {
    return `${Math.floor(weeks)}주 전`;
  }

  const months = days / 30;
  if (months < 12) {
    return `${Math.floor(months)}개월 전`;
  }

  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};

export default getElapsedPeriod;
