import React from "react"
import "antd/dist/antd.css"
import { Layout, Menu } from "antd"
import {
    HomeOutlined,
    FormOutlined,
    InfoCircleOutlined,
    ContactsOutlined,
} from "@ant-design/icons"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Forms from "../forms/forms"

const { Content, Footer, Sider } = Layout

const Home = (props) => {
    return (
        <Router>
            <Layout>
                <Sider breakpoint="lg" collapsedWidth="0">
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="/"></Link>
                            خانه
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FormOutlined />}>
                            <Link to="/forms"></Link>
                            فرم ها
                        </Menu.Item>
                        <Menu.Item key="3" icon={<InfoCircleOutlined />}>
                            درباره ما
                        </Menu.Item>
                        <Menu.Item key="4" icon={<ContactsOutlined />}>
                            ارتباط با ما
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ minHeight: "100vh" }}>
                    <Content style={{ margin: "24px 16px 0" }}>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: "100vh",
                                backgroundColor: "#c0d0f0",
                            }}
                        >
                            <Switch>
                                <Route exact path="/">
                                    <h2 style={{ textAlign: "center" }}>
                                        خوش آمدید
                                    </h2>
                                </Route>
                                <Route path="/forms/">
                                    <Forms />
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Mahtab Sarlak & Maryam ghadiri ©2019
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    )
}

export default Home
