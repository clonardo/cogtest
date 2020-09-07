import { createAppStore } from './create-app-store';
import { EnhancedStore } from '@reduxjs/toolkit';
import { IAppState } from '../contracts/store';

/**
 * Global store instance
 */
export const APP_STORE: EnhancedStore<IAppState> = createAppStore();
(window as any).APP_STORE = APP_STORE;
