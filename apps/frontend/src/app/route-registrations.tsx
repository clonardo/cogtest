import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminPage } from './admin';
import { RedirectToRunner, RunnerStartPage, RunnerContentPage } from './runner';
import { LargeScreenOnly } from '../common/large-screen-only';

interface IFallbackProps {}

export const Fallback: React.FC<IFallbackProps> = (props: IFallbackProps) => {
  return <div>The page you are looking for was not found.</div>;
};

/**
 * Top-level routes/pages
 */
export const RouteRegistrations: React.FC = () => {
  return (
    <LargeScreenOnly
      targetComponent={
        <Routes>
          <Route path={'/'} element={<RedirectToRunner />} />
          <Route path={'/runner'} element={<RunnerStartPage />} />
          <Route path={'/runner/:id'} element={<RunnerContentPage />} />
          <Route path={'/admin'} element={<AdminPage />} />
          <Route path={'/'} element={<Fallback />} />
        </Routes>
      }
    />
  );
};
