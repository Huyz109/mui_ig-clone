import { Box, Link } from "@mui/material";
import { SidebarSlide } from "./SidebarStyled";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Sidebar = () => {
    const navigate = useNavigate();
    const [side, setSide] = useState("");
    const pathname = window.location.pathname;

    useEffect(() => {
        setSide(pathname);
    }, [pathname])

    const sidebarItem = [
        {
            icon: <HomeOutlinedIcon />,
            title: "Trang chủ",
            url: '/',
            isActive: true,
            iconActive: <HomeIcon />
        },
        {
            icon: <SearchOutlinedIcon />,
            title: "Tìm kiếm",
            isHideMobile: true,
            isActive: false
        },
        {
            icon: <ExploreOutlinedIcon />,
            title: "Khám phá",
            isActive: false
        },
        {
            icon: <MovieOutlinedIcon />,
            title: "Reels",
            url: '/reels',
            isActive: false,
            iconActive: <MovieIcon />
        },
        {
            icon: <MapsUgcOutlinedIcon />,
            title: "Tin nhắn",
            isActive: false
        },
        {
            icon: <FavoriteBorderOutlinedIcon />,
            title: "Thông báo",
            isHideMobile: true,
            isActive: false
        },
        {
            icon: <AddBoxOutlinedIcon />,
            title: "Tạo",
            isActive: false
        },
        {
            icon: <AccountCircleOutlinedIcon />,
            title: "Trang cá nhân",
            isActive: false
        },
        {
            icon: <LogoutIcon />,
            title: "Đăng xuất",
            url: '/login',
            isActive: false
        }
    ];

    const menuItemClick = (item) => {
        navigate(item.url);
    }

    return(
        <SidebarSlide>
            <Box>
                <Link href="/"><img src="logo-insta.png" alt=""/></Link>
                <div className="menu-list">
                    <div className="menu-item-icon ig-icon"><InstagramIcon /></div>
                    {sidebarItem.map((item, index) => {
                        let className = 'menu-item';
                        let icon = item.icon;

                        if (item.isHideMobile) {
                            className += ' hide-mobile';
                        }

                        if (side === item.url) {
                            className += ' menu-item-active';
                            icon = item.iconActive;
                        }
                        
                        return (
                            <div className={className} onClick={() => menuItemClick(item, index)}>
                                <span className="menu-item-icon">{icon}</span>
                                <span className="menu-item-text">{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </Box>
        </SidebarSlide>
    )
}