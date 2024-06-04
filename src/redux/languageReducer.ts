import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  language: 'en' | 'zh';
  languageList: { name: string; code: string }[];
}

const initialState: LanguageState = {
  language: 'en',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    // Action 用于设置当前语言
    setLanguage(state, action: PayloadAction<'en' | 'zh'>) {
      state.language = action.payload;
    },
     // Action 用于添加新语言
     addLanguage(state, action: PayloadAction<{ name: string; code: string }>) {
      state.languageList.push(action.payload);
    },
    // Action 用于删除语言
    removeLanguage(state, action: PayloadAction<string>) {
      state.languageList = state.languageList.filter(lang => lang.code !== action.payload);
    },
  },
});

// 导出生成的 action creators
export const { setLanguage, addLanguage, removeLanguage} = languageSlice.actions;
// 导出 reducer 以在 store 中使用
export default languageSlice.reducer;