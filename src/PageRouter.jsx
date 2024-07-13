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
        <Route path={'/'} element={<QnAPortal />} />
        <Route path={'/list'} element={<AnswererSelector />} />
        <Route path={'/post/:id'}>
          <Route index element={<QuestionArchive />} />
          <Route path={'answer'} element={<AnswerManger />} />
        </Route>
        {/* 팀원분들 Suspense + tanstack-query 예시용 샘플 */}
        <Route path={'/querysample'} element={<QuerySample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
