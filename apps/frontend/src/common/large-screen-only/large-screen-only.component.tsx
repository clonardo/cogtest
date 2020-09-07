import React from 'react';
import { ILargeScreenOnlyProps } from './large-screen-only.types';
import { SelectIsLargeScreen } from '../../store/responsive';
import { useSelector } from 'react-redux';
import { IAppState } from '../../contracts/store/root-reducer.type';

/**
 * Show the target component only if the client viewport is at least 992px wide.
 * Fall back to a user-defined component, or (if not specified) to a simple text message
 *
 * @example <LargeScreenOnly
 *       targetComponent={
 *         <div style={{ height: '300px', color: 'green' }}>Logged In</div>
 *       }
 *       fallbackComponent={
 *         <div style={{ height: '300px', color: 'red' }}>Logged Out</div>
 *       }
 *     />
 */
export const LargeScreenOnly: React.FC<ILargeScreenOnlyProps> = (
  props: ILargeScreenOnlyProps
) => {
  const isLargeScreen = useSelector<IAppState, boolean>(SelectIsLargeScreen);
  const fallback: React.ReactElement = props.fallbackComponent ? (
    props.fallbackComponent
  ) : (
    <div>
      Please try to access this site on a desktop, or computer with a larger
      screen
    </div>
  );
  return isLargeScreen ? props.targetComponent : fallback;
};
