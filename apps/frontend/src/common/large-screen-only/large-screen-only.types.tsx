import React from 'react';

/**
 * Props for "Large Screen Only," which will only show the target component
 * if the client is on a screen >=992px wide
 */
export interface ILargeScreenOnlyProps {
  /**
   * Target component to show (if conditions are met)
   */
  targetComponent: React.ReactElement;
  /**
   * Fallback component to show (if conditions are not met).
   * Defaults to a simple text message
   */
  fallbackComponent?: React.ReactElement;
}
