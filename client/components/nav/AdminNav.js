import Link from "next/link";
import {useEffect, useState} from "react";
import React from 'react';

const AdminNav = () => {

    const [current, setCurrent] = useState("");

    useEffect (() => {
        setCurrent(process.browser && window.location.pathname);
       // if (process.browser){ setCurrent(window.location.pathname)};
        //console.log(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    return (
    <div className="nav flex-column nav-pills ">
        <Link href="/Admin">
            <a className={`nav-link ${current === "/Admin" && "active"}`}>Dashboard</a>
        </Link>
    </div>
    );
};
export default AdminNav;