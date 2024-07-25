import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SubjectSelection from './pages/SubjectSelection';
import AnswerFeed from './pages/AnswerFeed';
import Home from './pages/Home';
import QuestionFeed from './pages/QuestionFeed';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/list'} element={<SubjectSelection />} />
        <Route path={'/post/:id'}>
          <Route
            index
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <QuestionFeed />
              </Suspense>
            }
          />
          <Route
            path={'answer'}
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <AnswerFeed />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
