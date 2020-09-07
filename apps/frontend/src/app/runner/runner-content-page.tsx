import React, { useCallback, useEffect, useState } from 'react';

import { IAppState } from '../../contracts/store';
import { SelectAuthJwt } from '../../store/auth';
import { useSelector } from 'react-redux';
import { useAxios } from '../../common/hooks';
import { IRunDto } from '../../contracts/api';
import { Navigate, useNavigate, useParams } from 'react-router';

/**
 * Individual Runner content page
 */
export const RunnerContentPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="runnerWrapper">
      <h1>Runner Content Page</h1>
      <div>Got ID: {id}</div>
    </div>
  );
};
