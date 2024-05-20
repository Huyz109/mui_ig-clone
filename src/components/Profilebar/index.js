import { Avatar } from "@mui/material"
import { ProfileBarContent } from "./ProfilebarStyled"

export const ProfileBar = () => {
    return (
        <ProfileBarContent>
            <div className="profile flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar alt="" src="logo192.png" sx={{ width: 44, height: 44 }} className="mr-3"/>
                    <div className="info ">
                        <p className="font-semibold">abc</p>
                        <p className="color-sub">Nguyễn Văn A</p>
                    </div>
                </div>
                <a className="profile-link color-sky" href="/">Chuyển</a>
            </div>
            <div className="suggest-list">
                <div className="flex justify-between font-semibold">
                    <span className="text-sm color-sub">Gợi ý cho bạn</span>
                    <a className="text-xs" href="/" >Xem tất cả</a>
                </div>
                <ul className="pt-1 pb-2">
                    <li className="profile flex items-center justify-between">
                        <div className="flex items-center">
                            <Avatar alt="" src="logo192.png" sx={{ width: 44, height: 44 }} className="mr-3"/>
                            <div className="info ">
                                <p className="font-semibold">abc</p>
                                <p className="text-xs color-sub">Gợi ý cho bạn</p>
                            </div>
                        </div>
                        <a className="profile-link color-sky" href="/">Theo dõi</a>
                    </li>
                    <li className="profile flex items-center justify-between">
                        <div className="flex items-center">
                            <Avatar alt="" src="avatar2.png" sx={{ width: 44, height: 44 }} className="mr-3"/>
                            <div className="info ">
                                <p className="font-semibold">abc</p>
                                <p className="text-xs color-sub">Gợi ý cho bạn</p>
                            </div>
                        </div>
                        <a className="profile-link color-sky" href="/">Theo dõi</a>
                    </li>
                    <li className="profile flex items-center justify-between">
                        <div className="flex items-center">
                            <Avatar alt="" src="logo192.png" sx={{ width: 44, height: 44 }} className="mr-3"/>
                            <div className="info ">
                                <p className="font-semibold">abc</p>
                                <p className="text-xs color-sub">Gợi ý cho bạn</p>
                            </div>
                        </div>
                        <a className="profile-link color-sky" href="/">Theo dõi</a>
                    </li>
                    <li className="profile flex items-center justify-between">
                        <div className="flex items-center">
                            <Avatar alt="" src="avatar2.png" sx={{ width: 44, height: 44 }} className="mr-3"/>
                            <div className="info ">
                                <p className="font-semibold">abc</p>
                                <p className="text-xs color-sub">Gợi ý cho bạn</p>
                            </div>
                        </div>
                        <a className="profile-link color-sky" href="/">Theo dõi</a>
                    </li>
                </ul>
            </div>
            <p className="text-xs color-ter-text">@2024 HUYSTAGRAM FROM ZETA</p>
        </ProfileBarContent>
    )
}