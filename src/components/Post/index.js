import { PostContent, PostHeader } from "./PostStyled"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { TextField } from "@mui/material";
import { useState } from "react";

export const Post = () => {
    const [liked, setLike] = useState(false);
    const [saved, setSave] = useState(false);


    return (
        <PostContent>
            <PostHeader>
                <div className="header-info">
                    <div className="avatar"><img src="avatar.jpg" alt=""/></div>
                    <p className="name">CGV <span className="time color-sub">- 1 giờ</span></p>
                </div>
                <div>
                    <MoreHorizIcon/>
                </div>
            </PostHeader>
            <img src="post-img.jpg" alt="" className="post-img"/>
            <div className="icon-list flex justify-between">
                <div className="reaction-icon flex">
                    <span className='like-btn' onClick={() => setLike(!liked)}>
                        {liked ? <FavoriteIcon className="liked"/> : <FavoriteBorderOutlinedIcon/>}
                    </span>
                    <Brightness1OutlinedIcon />
                    <SendOutlinedIcon />
                </div>
                <span onClick={() => setSave(!saved)}>
                    {saved ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
                </span>
            </div>
            <p className="font-semibold">1.000.000 lượt thích</p>
            <div className="flex mt-0.5">
                <p className="post-ower-name font-semibold mr-1">CGV</p>
                <span>Lorem Inspum 8</span>
            </div>
            <br />
            <p className="hashtag cursor-pointer">#Getgo #Back</p>
            <div className="comment">
                <span className="color-sub cursor-pointer">Xem tất cả 1000 bình luận</span>
                <div className="flex justify-between items-center">
                    <TextField 
                        placeholder="Thêm bình luận ..." 
                        variant="standard"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        className="w-11/12 text-sm"
                        multiline 
                    />
                    <EmojiEmotionsOutlinedIcon className="color-sub cursor-pointer"/>
                </div>
            </div>
        </PostContent>
    )
}