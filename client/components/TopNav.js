import {Menu} from 'antd';
import Link from "next/link";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined, CoffeeOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useEffect, useContext} from "react";
import reactDom from "react-dom";
import {Context} from "../context";
import axios from "axios";
import {toast} from 'react-toastify';
//import { Router } from 'express';
import {useRouter} from 'next/router';


const {Item, SubMenu, ItemGroup} = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("");

    const {state, dispatch} = useContext(Context);
    const { user } = state;
    const router = useRouter();

    useEffect (() => {
        setCurrent(process.browser && window.location.pathname);
       // if (process.browser){ setCurrent(window.location.pathname)};
        console.log(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    const logout = async() => {
        dispatch({type: "LOGOUT"});
        window.localStorage.removeItem("user");
        const {data} = await axios.get("/api/logout");
        toast(data.message);
        router.push('/login');
    };

    return (
    <Menu mode="horizontal" selectedKeys={[current]}>
        <Item key="/" onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined/>}>
        <Link href="/"><a>Suggestions</a></Link>

        </Item>

        {user === null && (
            <>
                <Item key="/login" onClick={(e) => setCurrent(e.key)} icon={<LoginOutlined/>}>
                <Link href="/login"><a>Login</a></Link>

                </Item>

                <Item key="/register" onClick={(e) => setCurrent(e.key)} icon={<UserAddOutlined/>}>
                <Link href="/register"><a>register</a></Link>

                </Item>
            </>
        )}

        { user !== null && (
            <SubMenu icon={<CoffeeOutlined/>} title={user && user.name} className="float-right">
                <ItemGroup>
                    <Item key="/user">
                    <Link href="/user">
                        <a>Dashboard</a>
                    </Link>
                    </Item>
                <Item onClick={logout} icon={<LogoutOutlined/>} className="float-right">
                Logout
                </Item>
                </ItemGroup>
            </SubMenu>
        )}    
    </Menu>
    )
};

export default TopNav;