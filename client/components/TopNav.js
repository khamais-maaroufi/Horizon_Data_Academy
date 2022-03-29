import { Menu } from 'antd';
import Link from "next/link";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useEffect} from "react";
import reactDom from "react-dom";

const {Item} = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("");

    useEffect (() => {
        setCurrent(process.browser && window.location.pathname);
       // if (process.browser){ setCurrent(window.location.pathname)};
        console.log(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    return (
    <Menu mode="horizontal" selectedKeys={[current]}>
        <Item key="/" onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined/>}>
        <Link href="/"><a>App</a></Link>

        </Item>

        <Item key="/login" onClick={(e) => setCurrent(e.key)} icon={<LoginOutlined/>}>
        <Link href="/login"><a>Login</a></Link>

        </Item>

        <Item key="/register" onClick={(e) => setCurrent(e.key)} icon={<UserAddOutlined/>}>
        <Link href="/register"><a>register</a></Link>

        </Item>
    </Menu>
    )
};

export default TopNav;