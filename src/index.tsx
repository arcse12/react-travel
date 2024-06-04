// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // 确保从 'react-dom/client' 导入
import './index.css';
import './i18n/configs'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// 获取根元素
const rootElement = document.getElementById('root');

if (rootElement) {
  // 创建根
  const root = ReactDOM.createRoot(rootElement);
  // 渲染应用
  root.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
  );
}
