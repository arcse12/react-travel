import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageReducer';

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;

// 定义 RootState 和 AppDispatch 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
