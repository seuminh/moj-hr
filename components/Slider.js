import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Layout, Menu, Divider } from "antd";
import {
   UserOutlined,
   HomeOutlined,
   NotificationOutlined,
   SettingOutlined,
   PrinterOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Slider = () => {
   const [collapsed, setCollapsed] = useState(false);

   const onCollapse = (col) => {
      setCollapsed(col);
   };

   return (
      <Sider
         theme="light"
         collapsed={collapsed}
         onCollapse={onCollapse}
         width="280px"
         collapsible
      >
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "center",
               alignItems: "center",
               padding: "15px 0px",
            }}
         >
            <div>
               <Image src="/logo.png" width={40} height={40} />
            </div>
            <h1
               style={{
                  fontSize: "1.1em",
                  fontWeight: "normal",
                  marginLeft: 10,
                  display: collapsed ? "none" : "",
               }}
            >
               គ្រប់គ្រងព័ត៌មានមន្រ្តីរាជការ
            </h1>
         </div>
         <Menu theme="light" mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
               <Link href="/">
                  <a>ទំព័រដើម</a>
               </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
               <Link href="/me">
                  <a>ព័ត៌មានផ្ទាល់ខ្លួន</a>
               </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
               <Link href="/employee">
                  <a>បញ្ជីឈ្មោះមន្រ្តីរាជការ</a>
               </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PrinterOutlined />}>
               <Link href="/print">
                  <a>ការបោះពុម្ភ</a>
               </Link>
            </Menu.Item>
            <Divider></Divider>
            <Menu.Item key="5" icon={<NotificationOutlined />}>
               <Link href="/announcement">
                  <a>សេចក្ដីជូនដំណឹង</a>
               </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<SettingOutlined />}>
               <Link href="/setting">
                  <a>កំណត់អ្នកប្រើប្រាស់</a>
               </Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default Slider;
