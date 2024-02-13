import {FC, useEffect, useState} from "react";
import {
    ArrowBackIosIcon,
    ArrowForwardIosIcons,
    HomeOutlinedIcon,
    GroupsIcon,
    ReceiptOutlinedIcon,
    VideoCallIcon,
    OndemandVideoIcon,
    WebIcon,
    QuizIcon,
    WysiwygIcon,
    PeopleOutlinedIcon,
    BarchartOutlinedIcon,
    MapOutlinedIcon, ManageHistoryIcon, SettingIcon
} from './Icon'
import avatarDefault from '../../../../public/assets/avatar.jpg';
import Link from 'next/link';
import Image from 'next/image';
import {useTheme} from "next-themes";
import {Box, IconButton, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";

interface ItemsProps {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: any;
}

const Item:FC<ItemsProps> = ({title, to, icon, selected, setSelected}) => {
    return (
        <Link href={to}>
            <MenuItem
                active={selected === title}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <Typography className='!text-[16px] pl-2 !font-Poppins'>{title}</Typography>
            </MenuItem>
        </Link>

    )
}

const AdminSidebar = () => {
    const {user} = useSelector((state:any) => state.auth);
    const [logout, setLogout] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme()

    useEffect(() => setMounted(true), [])

    if(!mounted){
        return null;
    }

    const logoutHandler = () => setLogout(true);

    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    background: theme === "dark" ? '#111C43 !important' : '#fff !important',
                    minHeight: '100vh'
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important'
                },
                '& .pro-inner-item:hover': {
                    color: '#9396ff !important'
                },
                '& .pro-menu-item.active': {
                    color: '#9396ff !important'
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center'
                },
                '& .pro-menu-item': {
                    color: theme !== 'dark' ? '#000' : '#a8a2a2',
                },
            }}
            className='!bg-white dark:bg-[#111C43]'
        >
            <ProSidebar
                collapsed={isCollapsed}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height:'100vh',
                    overflowX: 'hidden',
                    overflowY: "auto",
                    transition: "ease-in-out",
                    transitionDuration: '0.5s',
                    width: isCollapsed ? '5%' : '16%'
                }}
            >
                <Menu iconShape='square'>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <ArrowForwardIosIcons /> : undefined}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Link href='/'>
                                    <h3 className='text-[25px] font-Poppins uppercase dark:text-white text-black'>
                                        Learning System
                                    </h3>
                                </Link>
                                <IconButton
                                    className='inline-block dark:text-white'
                                >
                                    <ArrowBackIosIcon  onClick={() => setIsCollapsed(!isCollapsed)} className='text-black dark:text-white'/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Image src={user.avatar ? user.avatar.url : avatarDefault }
                                       alt='profile-user'
                                       width={100}
                                       height={100}
                                       style={{
                                           cursor: 'pointer',
                                           borderRadius: '50%',
                                           border: '3px solid #5b6fe6',
                                       }}/>


                            </Box>
                            <Box textAlign='center' >
                                <Typography
                                    variant='h4'
                                    sx={{m: '10px 0 0 0'}}
                                    className='!text-[20px] text-black dark:text-white'
                                >
                                    {user?.name}
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{m: '10px 0 0 0'}}
                                    className='!text-[20px] text-black dark:text-white capitalize'
                                >
                                    Role: {user?.role}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title={isCollapsed ? '' : 'Dashboard'}
                            to='/admin'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h5'
                            sx={{m: '15px 0 5px 25px'}}
                            className='!text-[18px] text-black dark:text-white capitalize !font-[400]'
                        >
                            {!isCollapsed && 'Data'}
                        </Typography>
                        <Item
                            title={isCollapsed ? '' : 'Users'}
                            to='/admin/users'
                            icon={<GroupsIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? '' : 'Invoices'}
                            to='/admin/invoices'
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h5'
                            sx={{m: '15px 0 5px 20px'}}
                            className='!text-[18px] text-black dark:text-white capitalize !font-[400]'
                        >
                            {!isCollapsed && 'Content'}
                        </Typography>
                            <Item
                                title={isCollapsed ? '' : 'Create Course'}
                                to='/admin/create-course'
                                icon={<VideoCallIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                        <Item
                            title={isCollapsed ? '' : 'Live Course'}
                            to='/admin/courses'
                            icon={<OndemandVideoIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h5'
                            sx={{m: '15px 0 5px 20px'}}
                            className='!text-[18px] text-black dark:text-white capitalize !font-[400]'
                        >
                            {!isCollapsed && 'Customization'}
                        </Typography>
                        <Item
                            title={isCollapsed ? '' : 'Hero'}
                            to='/admin/hero'
                            icon={<WebIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? '' : 'FAQ'}
                            to='faq'
                            icon={<QuizIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? '' : 'Categories'}
                            to='/admin/categories'
                            icon={<WysiwygIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h5'
                            sx={{m: '15px 0 5px 20px'}}
                            className='!text-[18px] text-black dark:text-white capitalize !font-[400]'
                        >
                            {!isCollapsed && 'Controllers'}
                        </Typography>
                        <Item
                            title={isCollapsed ? '' : 'ManageTeam'}
                            to='/admin/team'
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h5'
                            sx={{m: '15px 0 5px 20px'}}
                            className='!text-[18px] text-black dark:text-white capitalize !font-[400]'
                        >
                            {!isCollapsed && 'Analytics'}
                        </Typography>
                        <Item
                            title={isCollapsed ? '' : 'Courses Analytics'}
                            to='/admin/course-analytics'
                            icon={<BarchartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? '' : 'Order Analytics'}
                            to='/admin/orders-analytics'
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? '' : 'Users Analytics'}
                            to='/admin/users-analytics'
                            icon={<ManageHistoryIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h5'
                            sx={{m: '15px 0 5px 20px'}}
                            className='!text-[18px] text-black dark:text-white capitalize !font-[400]'
                        >
                            {!isCollapsed && 'Extras'}
                        </Typography>
                        <Item
                            title={isCollapsed ? '' : 'Settings'}
                            to='/admin/settings'
                            icon={<SettingIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>

                </Menu>
            </ProSidebar>

        </Box>
    )
}


export default  AdminSidebar