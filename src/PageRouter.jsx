import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AnswererSelector from './pages/AnswererSelector';
import AnswerManger from './pages/AnswerManger';
import QnAPortal from './pages/QnAPortal';
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
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
