import styles from "@/styles/Employee.module.css";
import Link from "next/link";
import Image from "next/image";

import { Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const General = () => {
   return (
      <div className={styles.generalInfoContainer}>
         <Row gutter={24} justify="start">
            <Col span={6}>
               <div className={styles.userImg}>
                  {/* <img src={user.photo} alt="" width="160" height="180" /> */}
                  <Image src="/noImg.jpg" width={160} height={180}></Image>
                  {/* <Link href={`/employee/${user.id}/edit`}>
                     <Button danger style={{ marginRight: 8 }}>
                        កែប្រែព័ត៌មានបុគ្គល
                     </Button>
                  </Link> */}
                  <Link href={`/employee/1/edit`}>
                     <Button danger style={{ marginRight: 8 }}>
                        កែប្រែព័ត៌មានបុគ្គល
                     </Button>
                  </Link>
               </div>
            </Col>
            <Col span={18}>
               <div className={styles.generalInfo}>
                  <h1>
                     <UserOutlined style={{ fontSize: 23, marginRight: 5 }} />
                     ព័ត៌មានទូទៅ
                  </h1>
                  <Row style={{ marginTop: 15 }}>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>គោត្តនាម និង​នាម</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.firstName + " " + user.lastName} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>លេខសំបុត្រកំណើត</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.birthCertificateNum} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>គោត្តនាម និង​នាម ឡាតាំង</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.firstNameLatin + " " + user.lastNameLatin} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>លេខអត្តសញ្ជាតិខ្មែរ</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.nationalityIDNum} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>ភេទ</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.gender} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>លេខលិខិតឆ្លងដែន</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.passportNumber} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>ថ្ងៃខែឆ្នាំកំណើត</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.birthDate} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>លេខទូរស័ព្ទ</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.contactInfo?.phoneNumber1} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>អត្តលេខមន្រ្ដីរាជការ</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user?.civilID} */}
                           123
                        </span>
                     </Col>
                     <Col span={12} className={styles.singleGeneralInfo}>
                        <span>អ៊ីម៉ែល</span>
                        <span className={styles.hightLightInfo}>
                           {/* {user.contactInfo?.email} */}
                           123
                        </span>
                     </Col>
                     <Col span={24} className={styles.singleGeneralInfo}>
                        <span style={{ flex: 1 }}>ទីកន្លែងកំណើត</span>
                        <span
                           className={styles.hightLightInfo}
                           style={{ flex: 6 }}
                        >
                           {/* {user.birthPlace &&
                                    Object.values(user.birthPlace).join(" ")} */}
                           123
                        </span>
                     </Col>
                     <Col span={24} className={styles.singleGeneralInfo}>
                        <span style={{ flex: 1 }}>អាស័យដ្ឋាន</span>
                        <span
                           className={styles.hightLightInfo}
                           style={{ flex: 6 }}
                        >
                           {/* {user.birthPlace &&
                                    Object.values(user.currentResidence).join(
                                       " "
                                    )} */}
                           123
                        </span>
                     </Col>
                  </Row>
               </div>
            </Col>
         </Row>
      </div>
   );
};

export default General;
