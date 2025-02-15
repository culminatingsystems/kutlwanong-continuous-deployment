import { useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import logo from '../Assets/logo.png';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu,  Button, theme, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendarDays, faUsers, faGraduationCap, faBriefcase, faGauge, faUserGraduate, faClipboardUser, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import Meta from 'antd/es/card/Meta';

/*function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

const items = [
    getItem('<NavLink to="/admin/" className={({isActive}) => (isActive ? "selected-link slate-300 flex": "unselected flex")}>/> <span className="indent-2.5 inline-block">Dashboard</span></NavLink>', '1', <FontAwesomeIcon icon={faCalendarDays} /> ),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];*/

const items = [
    {
        label: (
            <Link href="/dashboard"><span className='font-light'> Dashboard </span></Link>
        ),
        key: '1',
        icon: <FontAwesomeIcon icon={faGauge} />
    },
    {
        label: (
            <Link href="/construction"><span> Account Info </span></Link>
        ),
        key: '2',
        icon: <FontAwesomeIcon icon={faUserGraduate} />
    },
    {
        label: (
            <Link href="/construction"><span> Attendance </span></Link>
        ),
        key: '3',
        icon: <FontAwesomeIcon icon={faClipboardUser} />
    },
    {
        label: (
            <Link href="/construction"><span className='font-light'> Assessments </span></Link>
        ),
        key: '4',
        icon: <FontAwesomeIcon icon={faBookOpenReader} />
    }
]

export default function AuthenticatedLearner({ user, header, children, currentKey }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const [collapsed, setCollapsed] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const baseUrl = window.location.origin;

    useEffect(() => {
        console.log(screenWidth);
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        });
        return() => {
            window.removeEventListener('resize', () => {
                setScreenWidth(window.innerWidth)
            })
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Layout
                style={{
                    minHeight: '100vh',
                }}
                >
                <div className='h-full'>
                    <Sider trigger={null} collapsible collapsed={collapsed} /*onCollapse={(value) => setCollapsed(value)}*/
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => {
                          console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            setCollapsed(collapsed)
                          console.log(collapsed, type, screenWidth);
                        }}
                        style={{
                            background: '#FFFFFF',
                            overflow: 'auto',
                            height: '100vh',
                            position: collapsed ? 'relative' : (screenWidth < 630 ? 'fixed' : 'fixed' ),//'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                            zIndex: 10000
                        }}
                    >
                        <div className="demo-logo-vertical" />

                        <div className="dash-bg text-center mb-5">
                            <img src={logo} className="logo" alt="Logo" />
                        </div>
                        <Menu theme="light" defaultSelectedKeys={[currentKey]} mode="inline" items={items} />
                    </Sider>
                </div>
                <Layout
                    style={{
                        minHeight: '100vh',
                        marginLeft: collapsed ? '0px' : (screenWidth < 630 ? '0px' : '200px' )
                    }}
                >
                    <Header 
                        style={{ 
                                padding: 0,
                                background: colorBgContainer,
                                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                                height: collapsed ? '80px' : '90px',
                            }}
                        >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            left: collapsed ? '0px' : (screenWidth < 630 ? '200px' : '0px' ),
                            position: collapsed ? 'relative' : (screenWidth < 630 ? 'fixed' : 'relative' ),
                            }}
                        />
                        <div className='float-right p-1 mr-4 flex'>
                            <div className='px-2 f'>
                                <div>Learner Name</div>
                            </div>
                            <div>
                                <Avatar src={`${baseUrl}/math.png`} />
                            </div>
                        </div>
                    </Header>
                    <Content>
                        <div>{children}</div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
