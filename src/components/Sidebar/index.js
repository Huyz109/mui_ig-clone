import { Box, Link } from "@mui/material";
import { SidebarSlide } from "./SidebarStyled";
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoutIcon from '@mui/icons-material/Logout';

export const Sidebar = () => {
    const sidebarItem = [
        {
            icon: <HomeIcon />,
            title: "Trang chủ"
        },
        {
            icon: <SearchOutlinedIcon />,
            title: "Tìm kiếm"
        },
        {
            icon: <ExploreOutlinedIcon />,
            title: "Khám phá"
        },
        {
            icon: <MovieOutlinedIcon />,
            title: "Reels"
        },
        {
            icon: <MapsUgcOutlinedIcon />,
            title: "Tin nhắn"
        },
        {
            icon: <FavoriteBorderOutlinedIcon />,
            title: "Thông báo"
        },
        {
            icon: <AddBoxOutlinedIcon />,
            title: "Tạo"
        },
        {
            icon: <AccountCircleOutlinedIcon />,
            title: "Trang cá nhân"
        },
        {
            icon: <LogoutIcon />,
            title: "Đăng xuất"
        }
    ]
    return(
        <SidebarSlide>
            <Box>
                <Link href="/"><img src="logo-insta.png" alt=""/></Link>
                <div className="menu-list">
                    <div className="menu-item-icon ig-icon"><InstagramIcon /></div>
                    {sidebarItem.map((item, index) => {
                        let className = '';
                        const lastIndex = sidebarItem.length - 1;
                        switch(index){
                            case 0:
                                className = 'menu-item menu-item-active';
                                break;
                            
                            case lastIndex:
                                className = 'menu-item menu-item-last';
                                break;

                            default:
                                className = 'menu-item'
                        }
                        return (
                            <div className={className}>
                                <span className="menu-item-icon">{item.icon}</span>
                                <span className="menu-item-text">{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </Box>
        </SidebarSlide>
    )
}