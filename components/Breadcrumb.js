import { useRouter } from "next/router";
import { Breadcrumb } from "antd";
import { useState, useEffect } from "react";
import Link from "next/link";

const BreadcrumbComponent = () => {
   const router = useRouter();
   const [breadcrumbList, setBreadcrumbList] = useState([]);
   useEffect(() => {
      const vid = router.asPath;
      const cheat = vid.split("/");
      const srun = [];
      if (vid != "/") {
         cheat.forEach((v, i) => {
            if (i > 0)
               srun.push({
                  link: cheat.slice(0, i + 1).join("/"),
                  name: v[0].toUpperCase() + v.slice(1),
               });
         });
      }
      srun.unshift({ link: "/", name: "Home" });
      setBreadcrumbList(srun);
   }, [router]);
   return (
      <div className="pageInfo">
         {/* <h1>ព័ត៌មានមន្រ្តីរាជការ</h1> */}
         <Breadcrumb>
            {breadcrumbList.map((v, i) => {
               return (
                  <Breadcrumb.Item key={i}>
                     <Link href={v.link}>{v.name}</Link>
                  </Breadcrumb.Item>
               );
            })}
         </Breadcrumb>
      </div>
   );
};

export default BreadcrumbComponent;
