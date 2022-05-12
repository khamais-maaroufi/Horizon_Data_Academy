import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";

const UserNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(process.browser && window.location.pathname);
    // if (process.browser){ setCurrent(window.location.pathname)};
    //console.log(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills ">
      <Link href="/user">
        <a className={`nav-link ${current === "/user" && "active"}`}>
          Enrolled Courses
        </a>
      </Link>
    </div>
  );
};
export default UserNav;
