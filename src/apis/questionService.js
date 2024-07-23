// src/apis/questionService.js
import { axiosInstance } from './axiosSetup';

/**
 * 주제 ID와 내용을 받아 질문을 생성하는 함수
 * @param {object} params - 요청 매개변수
 * @param {string} params.subjectId - 주제 ID
 * @param {string} params.content - 질문 내용
 * @returns {object} 생성된 질문 데이터
 */

const createQuestion = async ({ subjectId, content }) => {
  try {
    const response = await axiosInstance.post(`/subjects/${subjectId}/questions/`, {
      content,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error creating question:', error);
    throw error; // 에러를 호출자에게 전달
  }
};

export { createQuestion };
