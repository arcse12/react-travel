import React from "react";
import logo from '../../assets/logo.svg';
import styles from "./Header.module.css";
import type { MenuProps } from 'antd';
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {useNavigate,useLocation,useParams,useMatch} from "react-router-dom"

const { Header } = Layout;

const items: MenuProps['items'] = [
  {
    label: '中文',
    key: '1',
  },
  {
    label: '英文',
    key: '2',
  }
];

const menuProps = {
  items
};

export const AppHeader: React.FC = () => {
  const navigate = useNavigate ();
  const location = useLocation ();
  const params = useParams ();
  const match = useMatch ('/');
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <Header className={styles["top-header"]}>
        <div className={styles.inner}>
          <div className={styles["left-section"]}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              menu={menuProps}
              placement="bottom"
              icon={<GlobalOutlined />}
            >
              语言
            </Dropdown.Button>
          </div>
          <Button.Group className={styles["button-group"]}>
            <Button>注册</Button>
            <Button>登陆</Button>
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
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  );
};
