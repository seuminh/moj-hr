import React, { useContext } from "react";

import Slider from "./Slider";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

import { Layout as LayoutAnt } from "antd";

const Layout = ({ children }) => {
   return (
      <LayoutAnt style={{ minHeight: "1800px" }}>
         <Slider />
         <LayoutAnt className="site-layout">
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            {children}
            <Footer></Footer>
         </LayoutAnt>
      </LayoutAnt>
   );
};

export default Layout;
