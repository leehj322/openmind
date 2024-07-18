import { QUESTIONS_QUERY_KEY, REACTION_QUERY_KEY } from '../constants/queryKeys';
import { axiosInstance } from './axiosSetup';

/**
 * 답변 id와 내용을 받아 서버로 답변 수정 요청을 하는 함수
 * @param {string} questionId 질문 id
 * @param {string} type 리액션 타입
 * @returns {object | null} 응답 객체
 */
const postReaction = async ({ questionId, type }) => {
  try {
    const { data } = await axiosInstance.post(`/${QUESTIONS_QUERY_KEY}/${questionId}/${REACTION_QUERY_KEY}/`, {
      type: type,
    });

    return data;
  } catch (error) {
    return null;
  }
};

export default postReaction;
