import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AnswererSelector from './pages/AnswererSelector';
import AnswerManger from './pages/AnswerManger';
import QnAPortal from './pages/QnAPortal';
import QuerySample from './pages/QuerySample';
import QuestionArchive from './pages/QuestionArchive';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/list'} element={<SubjectSelection />} />
        <Route path={'/post/:id'}>
          <Route index element={<QuestionFeed />} />
          <Route path={'answer'} element={<AnswerFeed />} />
        </Route>
        {/* 팀원분들 Suspense + tanstack-query 예시용 샘플 */}
        <Route path={'/querysample'} element={<QuerySample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
