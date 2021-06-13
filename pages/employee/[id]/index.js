import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Employee.module.css";

import { Tabs, Col, Row, Button } from "antd";

import {
   HomeOutlined,
   DatabaseOutlined,
   UserOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

import General from "@/components/Employee/General";
import Rank from "@/components/Employee/Rank";
import Family from "@/components/Employee/Family";
import Education from "@/components/Employee/Education";
import WorkHistory from "@/components/Employee/WorkHistory";
import Status from "@/components/Employee/Status";
import Praise from "@/components/Employee/Praise";
import Penalty from "@/components/Employee/Penalty";

import api from "@/utils/api";
import { readFileFolderData } from "@/lib/ReadFileFolderData";

export async function getServerSideProps({ params }) {
   const ministryStructure = await readFileFolderData("Structure.json");
   const statusOfficer = await readFileFolderData("StatusOfficer.json");
   const ministryList = await readFileFolderData("Ministry.json");
   const rankList = await readFileFolderData("Rank.json");
   const letterTypes = await readFileFolderData("LetterTypes.json");
   return {
      props: {
         ministryStructure,
         statusOfficer,
         letterTypes,
         rankList,
         ministryList,
      },
   };
}

export default function Home({
   ministryStructure,
   statusOfficer,
   ministryList,
   letterTypes,
   rankList,
}) {
   return (
      <div className={styles.container}>
         <Head>
            <title>ព័ត៌មានមន្រ្តីរាជការ</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
            ></meta>
         </Head>

         <div className={styles.userInfo}>
            {/* Specific Info */}
            <Tabs
               defaultActiveKey="1"
               size="small"
               className={styles.specificInfo}
            >
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ព័ត៌មានទូទៅ
                     </span>
                  }
                  key="1"
               >
                  <General></General>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ឋានន្តរសកិ្ត និងថ្នាក់
                     </span>
                  }
                  key="2"
               >
                  <Rank></Rank>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        គ្រួសារ
                     </span>
                  }
                  key="3"
               >
                  <Family></Family>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        កម្រិតវប្បធម៌
                     </span>
                  }
                  key="4"
               >
                  <Education></Education>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ប្រវត្តិការងារ
                     </span>
                  }
                  key="5"
               >
                  <WorkHistory
                     ministryStructure={ministryStructure}
                  ></WorkHistory>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ស្ថានភាពមន្រ្ដី
                     </span>
                  }
                  key="6"
               >
                  <Status
                     rankList={rankList}
                     letterTypes={letterTypes}
                     ministryList={ministryList}
                     statusOfficer={statusOfficer}
                  ></Status>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ការដាក់ពិន័យ
                     </span>
                  }
                  key="7"
               >
                  <Penalty></Penalty>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ការលើកសសើរ
                     </span>
                  }
                  key="8"
               >
                  <Praise></Praise>
               </TabPane>
            </Tabs>
         </div>
      </div>
   );
}
