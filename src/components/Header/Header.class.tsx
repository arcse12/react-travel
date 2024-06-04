import React, { useState } from "react";
import logo from '../../assets/logo.svg';
import styles from "./Header.module.css";
import type { MenuProps } from 'antd';
import { Layout, Typography, Input, Menu, Button, Dropdown, Modal } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setLanguage, addLanguage, removeLanguage} from "../../redux/languageReducer";
import { useTranslation } from "react-i18next"; // 导入 useTranslation

const { Header } = Layout;

export const AppHeader: React.FC = () => {
  // 使用 useNavigate hook 获取导航函数
  const navigate = useNavigate();
  // 使用 useDispatch 获取 dispatch 函数
  const dispatch = useDispatch();
  // 使用 useSelector 从 Redux store 中获取语言列表
  const languageList = useSelector((state: RootState) => state.language.languageList);

    // 使用 useTranslation 钩子
    const { t, i18n } = useTranslation();

  // 管理添加语言的输入框状态
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLanguageName, setNewLanguageName] = useState('');
  const [newLanguageCode, setNewLanguageCode] = useState('');

  // 管理删除语言的输入框状态
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteLanguageName, setDeleteLanguageName] = useState('');

  // 显示添加语言模态框
  const showAddModal = () => {
    setIsAddModalOpen(true);
  };

  // 显示删除语言模态框
  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  // 处理添加语言模态框确定按钮点击事件
  const handleAddOk = () => {
    if (newLanguageName && newLanguageCode) {
      dispatch(addLanguage({ name: newLanguageName, code: newLanguageCode }));
      setIsAddModalOpen(false);
      setNewLanguageName('');
      setNewLanguageCode('');
    }
  };

  // 处理删除语言模态框确定按钮点击事件
  const handleDeleteOk = () => {
    if (deleteLanguageName) {
      dispatch(removeLanguage(deleteLanguageName));
      setIsDeleteModalOpen(false);
      setDeleteLanguageName('');
    }
  };

  // 处理模态框取消按钮点击事件
  const handleCancel = () => {
    setIsAddModalOpen(false);
    setIsDeleteModalOpen(false);
  };

    // 切换语言
    const changeLanguage = (lng: 'en' | 'zh') => {
      i18n.changeLanguage(lng);
      dispatch(setLanguage(lng));
    };

  // 创建语言菜单
  const menuItems: MenuProps['items'] = [
    ...languageList.map((lang) => ({
      key: lang.code,
      label: lang.name,
      onClick: () => changeLanguage(lang.code as 'en' | 'zh'),
    })),
    { type: 'divider' },
    {
      key: 'add',
      label: t('header.add_new_language'),
      onClick: showAddModal,
    },
    {
      key: 'delete',
      label: t('header.delete_language'),
      onClick: showDeleteModal,
    },
  ];

  
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <Header className={styles["top-header"]}>
        <div className={styles.inner}>
          <div className={styles["left-section"]}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown
              menu={{ items: menuItems }} // 动态生成的语言菜单
              placement="bottom"
            >
              <Button icon={<GlobalOutlined />}>语言</Button>
            </Dropdown>
          </div>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate("register")}>注册</Button>
            <Button onClick={() => navigate("signIn")}>登陆</Button>
          </Button.Group>
        </div>
      </Header>

      <Header className={styles["main-header"]}>
        <img src={logo} alt="logo" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles.title}>
          React旅游网
        </Typography.Title>
        <Input.Search
          placeholder={"请输入旅游目的地、主题、或关键字"}
          className={styles["search-input"]}
        />
      </Header>
      <Menu mode={"horizontal"} items={[
        { key: '1', label: t('header.home_page') },
        { key: '2', label: t('header.weekend') },
        { key: '3', label: t('header.group') },
        { key: '4', label: t('header.backpack') },
        { key: '5', label: t('header.private') },
        { key: '6', label: t('header.cruise') },
        { key: '7', label: t('header.hotel') },
        { key: '8', label: t('header.local') },
        { key: '9', label: t('header.theme') },
        { key: '10', label: t('header.custom') },
        { key: '11', label: t('header.study') },
        { key: '12', label: t('header.visa') },
        { key: '13', label: t('header.enterprise') },
        { key: '14', label: t('header.high_end') },
        { key: '15', label: t('header.outdoor') },
        { key: '16', label: t('header.insurance') },
      ]} className={styles["main-menu"]} />

      {/* 添加语言的模态框 */}
      <Modal title={t('header.add_new_language')} open={isAddModalOpen} onOk={handleAddOk} onCancel={handleCancel}>
        <Input
          placeholder={t('header.language_name')}
          value={newLanguageName}
          onChange={(e) => setNewLanguageName(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder={t('header.language_code')}
          value={newLanguageCode}
          onChange={(e) => setNewLanguageCode(e.target.value)}
        />
      </Modal>
      <Modal title={t('header.delete_language')} open={isDeleteModalOpen} onOk={handleDeleteOk} onCancel={handleCancel}>
        <Input
          placeholder={t('header.language_name')}
          value={deleteLanguageName}
          onChange={(e) => setDeleteLanguageName(e.target.value)}
          style={{ marginBottom: 10 }}
        />
      </Modal>
    </div>
  );
};


