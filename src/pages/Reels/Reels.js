import { VideoReels } from "../../components/VideoReels"

export const Reels = () => {
    return(
        <div className="flex items-center flex-col w-full">
            <div>
                <VideoReels />
                <VideoReels />
                <VideoReels />
            </div>
        </div>
    )
}