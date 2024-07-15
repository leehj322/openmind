import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SubjectSelection from './pages/SubjectSelection';
import QuestionPeed from './pages/QuestionPeed';
import AnswerPeed from './pages/AnswerPeed';
import QuerySample from './pages/QuerySample';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/list'} element={<SubjectSelection />} />
        <Route path={'/post/:id'}>
          <Route index element={<QuestionPeed />} />
          <Route path={'answer'} element={<AnswerPeed />} />
        </Route>
        {/* 팀원분들 Suspense + tanstack-query 예시용 샘플 */}
        <Route path={'/querysample'} element={<QuerySample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
