import React, { useEffect, useState } from "react";

import Link from "next/link";

import { EditOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";

import { Table, Button, Modal, Form, Col, Row, Input, Select } from "antd";
import api from "../../utils/api";

const { Option } = Select;

const Index = () => {
   const [modalSearch, setModalSearch] = useState(false);
   const [modalAdd, setModalAdd] = useState(false);

   const toggleModalSearch = () => {
      setModalSearch(!modalSearch);
   };

   const toggleModalAdd = () => {
      setModalAdd(!modalAdd);
   };

   const [form] = Form.useForm();

   const [employees, setEmployees] = useState([]);
   useEffect(() => {}, []);

   const onSearch = async () => {
      //   const dataInput = form.getFieldsValue(true);
      //   console.log(dataInput);
      //   await fetchEmployees(dataInput.search);
      setModalSearch(false);
   };

   const columns = [
      {
         title: "ល.រ",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "អត្តលេខ",
         dataIndex: "ID",
         key: "ID",
      },
      {
         title: "គោត្តនាមនិងនាម",
         dataIndex: "fullname",
         key: "fullname",
      },
      {
         title: "ភេទ",
         dataIndex: "gender",
         key: "gender",
      },
      {
         title: "ថ្ងៃខែឆ្នាំកំណើត",
         dataIndex: "birthDate",
         key: "birthDate",
      },
      {
         title: "មុខងារ",
         dataIndex: "position",
         key: "position",
      },
      {
         title: "អង្គភាព",
         dataIndex: "department",
         key: "department",
      },
      {
         title: "ស្ថានភាព",
         dataIndex: "status",
         key: "status",
      },
      {
         title: "សកម្មភាព",
         key: "action",
         render: (text, record) => (
            <Button
               icon={<EditOutlined />}
               onClick={() => {
                  router.push(`/employee/${record.id}`);
               }}
            >
               Edit
            </Button>
         ),
      },
   ];

   return (
      <div>
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
            }}
         >
            <Link href="/employee/1/">
               <a>Go Employee id 1</a>
            </Link>
            <div>
               <Button icon={<SearchOutlined />} onClick={toggleModalSearch}>
                  ស្វែងរក
               </Button>
               <Button
                  onClick={toggleModalAdd}
                  icon={<PlusOutlined />}
                  style={{ marginLeft: 10 }}
               >
                  បញ្ចូលមន្រ្ដីរាជការ
               </Button>
            </div>
         </div>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={employees}></Table>
         </div>

         {/* Modal Search */}
         <Modal
            title="ស្វែងរក"
            visible={modalSearch}
            onOk={toggleModalSearch}
            onOk={onSearch}
            onCancel={toggleModalSearch}
            width={900}
         >
            <Form
               layout="vertical"
               hideRequiredMark
               form={form}
               onFinish={onSearch}
            >
               <Row gutter={16}>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="លេខអត្តសញ្ញាណប័ណ្ណ"
                        name="លេខអត្តសញ្ញាណប័ណ្ណ"
                     >
                        <Input placeholder="លេខអត្តសញ្ញាណប័ណ្ណ" />
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="អត្ដលេខមន្ដ្រីរាជការ"
                        name="អត្ដលេខមន្ដ្រីរាជការ"
                     >
                        <Input placeholder="អត្ដលេខមន្ដ្រីរាជការ" />
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="លេខទូរស័ព្ទ"
                        name="លេខទូរស័ព្ទ"
                     >
                        <Input placeholder="លេខទូរស័ព្ទ" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="គោត្តនាម និងនាម"
                        name="គោត្តនាម និងនាម"
                     >
                        <Input placeholder="គោត្តនាម និងនាម" />
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="គោត្តនាម និងនាមឡាតាំង"
                        name="គោត្តនាម និងនាមឡាតាំង"
                     >
                        <Input placeholder="គោត្តនាម និងនាមឡាតាំង" />
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ភេទ"
                        name="ភេទ"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="ប្រុស">ប្រុស</Option>
                           <Option value="ស្រី">ស្រី</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ប្រភេទមន្ដ្រីរាជការ"
                        name="ប្រភេទមន្ដ្រីរាជការ"
                     >
                        <Input placeholder="ប្រភេទមន្ដ្រីរាជការ" />
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ស្ថានភាពមន្ត្រីរាជការ"
                        name="ស្ថានភាពមន្ត្រីរាជការ"
                     >
                        <Input placeholder="ស្ថានភាពមន្ត្រីរាជការ" />
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ឋាន្តរសក្កិ"
                        name="ឋាន្តរសក្កិ"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="A">A</Option>
                           <Option value="B">B</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="អង្គភាព"
                        name="អង្គភាព"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="A">A</Option>
                           <Option value="B">B</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ក្រសួង​-ស្ថាប័ន"
                        name="ក្រសួង​-ស្ថាប័ន"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="A">A</Option>
                           <Option value="B">B</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ស្ថានភាព"
                        name="ស្ថានភាព"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="A">A</Option>
                           <Option value="B">B</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="កន្លែងធ្វើការរាជធានី/ខេត្ត"
                        name="កន្លែងធ្វើការរាជធានី/ខេត្ត"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="A">A</Option>
                           <Option value="B">B</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="កន្លែងធ្វើការស្រុក/ខណ្ឌ"
                        name="កន្លែងធ្វើការស្រុក/ខណ្ឌ"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="A">A</Option>
                           <Option value="B">B</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="កន្លែងធ្វើការឃុំ/សង្កាត់"
                        name="កន្លែងធ្វើការឃុំ/សង្កាត់"
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="A">A</Option>
                           <Option value="B">B</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Modal>

         {/* Modal Add User */}
         <Modal
            title="Add User"
            visible={modalAdd}
            onOk={toggleModalAdd}
            onOk={onSearch}
            onCancel={toggleModalAdd}
            footer={null}
         >
            <Form layout="vertical" hideRequiredMark>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="Username"
                        name="username"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Input placeholder="username" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ID"
                        name="nationalityIDNum"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Input placeholder="អត្តលេខ" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="Department"
                        name="department"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Department A">Department A</Option>
                           <Option value="Department B">Department B</Option>
                           <Option value="Department C">Department C</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="Role"
                        name="role"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="User">User</Option>
                           <Option value="Editor">Editor</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Button style={{ marginRight: 8 }} onClick={() => {}}>
                  Add
               </Button>
            </Form>
         </Modal>
      </div>
   );
};

export default Index;
