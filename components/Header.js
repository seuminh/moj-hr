import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Button, Input } from "antd";

const Header = () => {
   return (
      <div className="header">
         <Input
            className="search"
            placeholder="ស្វែងរក"
            suffix={<SearchOutlined />}
            style={{ maxWidth: "700px" }}
         />
         <div className="headerInfo">
            <div>
               <p>
                  ក្រសួង-ស្ថាប័ន
                  <span style={{ color: "#6a0e00", fontWeight: "bold" }}>
                     យុត្តិធម័
                  </span>
               </p>
            </div>
            <div>
               <p>
                  ឈ្មោះអ្នកចូលប្រើ
                  <span style={{ color: "#6a0e00", fontWeight: "bold" }}>
                     123
                  </span>
               </p>
            </div>
            <Button>Login</Button>
         </div>
      </div>
   );
};

export default Header;
