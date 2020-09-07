import React, { useCallback, useEffect, useState } from 'react';
import { IAppState } from '../../contracts/store';
import { SelectAuthJwt } from '../../store/auth';
import { useSelector } from 'react-redux';
import { useAxios } from '../../common/hooks';
import { IRunDto } from '../../contracts/api';

/**
 * Admin page placeholder
 */
export const AdminPage: React.FC = () => {
  const jwt = useSelector<IAppState, string>(SelectAuthJwt);
  const axiosInstance = useAxios(
    // `${process.env.NX_CUSTOM_VAR_CLIENT_API_BASE_URL}/api`
    `/api`
  );
  const callRunsApi = useCallback(() => {
    axiosInstance
      .get<IRunDto[]>(`/results/`)
      .then((res) => {
        if (res && res.data) {
          console.log('AllRuns request success: ', res.data);
        } else {
          console.warn('AllRuns got an invalid response: ', res.data);
        }
      })
      .catch((err) => {
        console.warn('AllRuns request failed: ', err);
      });
  }, [axiosInstance]);

  return (
    <div className="adminWrapper">
      <h1>Admin Placeholder</h1>
      <div>
        <button type="button" onClick={callRunsApi}>
          Fetch all Runs
        </button>
      </div>
    </div>
  );
};
