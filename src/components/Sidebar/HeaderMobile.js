import { Box, TextField } from "@mui/material";
import { SidebarSlide } from "./SidebarStyled";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


export const HeaderMobile = () => {

    return(
        <SidebarSlide className="header-mobile">
            <Box className="flex justify-between items-center">
                <div className="menu-item-icon" href="/"><InstagramIcon /></div>
                <TextField 
                    placeholder="Tìm kiếm" 
                    className="w-full search-bar" 
                    InputProps={{
                        disableUnderline: true,
                    }}
                />
                <div className="menu-item-icon"><FavoriteBorderOutlinedIcon /></div>
            </Box>
        </SidebarSlide>
    )
}