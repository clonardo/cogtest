import React, { useCallback, useEffect, useState } from 'react';

import { IAppState } from '../../contracts/store';
import { SelectAuthJwt } from '../../store/auth';
import { useSelector } from 'react-redux';
import { useAxios } from '../../common/hooks';
import { IRunDto } from '../../contracts/api';
import { Navigate, useNavigate, useParams } from 'react-router';

/**
 * Redirect the base path to /runner
 */
export const RedirectToRunner: React.FC = () => {
  return <Navigate to="/runner" replace />;
};

/**
 * Start run here!
 */
export const RunnerStartPage: React.FC = () => {
  return (
    <div className="runnerWrapper">
      <h1>Runner Placeholder</h1>
      <div>Run things here</div>
    </div>
  );
};
