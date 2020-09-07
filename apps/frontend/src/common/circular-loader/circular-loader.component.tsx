import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 48, color: '#1a4339' }} spin />
);

/**
 * Generic circular loader
 */
export const CircularLoader = () => {
  return (
    <div className="cogtest-loading-spinner loader-circular">
      <Spin indicator={antIcon} />
    </div>
  );
};
