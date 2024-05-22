import { ReelsContent } from "./VideoReelsStyled"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useRef, useState } from "react";

export const VideoReels = () => {
    const [liked, setLike] = useState(false);
    const [saved, setSave] = useState(false);
    const videoRef = useRef();

    const handleClickVideo = () => {
        if(videoRef.current.paused) {
            videoRef.current.play();
        }
        else {
            videoRef.current.pause();
        }
    }
 
    
    return (
        <ReelsContent>
            <span className="relative">
                <video ref={videoRef}  alt="" className="video" autoPlay playsInline onClick={handleClickVideo}>
                    <source src="reels.mp4" type="video/mp4"/>
                </video>
                <div className="info">
                    <div className="header-info">
                        <div className="avatar"><img src="avatar.jpg" alt=""/></div>
                        <p className="name">CGV</p>
                    </div>
                    <span>Lorem Inspum 8</span>
                </div>
            </span>
            <div className="icon-list flex flex-col gap-3 justify-end">
                <span className='like-btn' onClick={() => setLike(!liked)}>
                    {liked ? <FavoriteIcon className="liked"/> : <FavoriteBorderOutlinedIcon/>}
                </span>
                <Brightness1OutlinedIcon />
                <SendOutlinedIcon />
                <span onClick={() => setSave(!saved)}>
                    {saved ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
                </span>
                <MoreHorizIcon/>
            </div>
        </ReelsContent>
    )
}