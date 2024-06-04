import React from 'react';
import styles from "./App.module.css";
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { HomePage, SignInPage, RegisterPage, DetailPage} from "./pages"

function App() {
  return (
    <Layout>
      <div className={styles.App}>
         <BrowserRouter>
         <Routes> 
          <Route path = "/" element={<HomePage />}/>
          <Route path="/signIn" element={<SignInPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/detail/:touristRouteId" element={<DetailPage/>}/>
          </Routes>
         </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
