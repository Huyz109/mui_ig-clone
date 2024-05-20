import { Post } from "../../components/Post"
import { ProfileBar } from "../../components/Profilebar"
import { Sidebar } from "../../components/Sidebar"
import { StoryList } from "../../components/StoryList"
import { DashboardContent, FeedPosts } from "./HomeItemStyled"

export const Home = () => {
    return(
        <DashboardContent>
            <Sidebar />
            <div className="flex justify-center w-full">
                <FeedPosts className="mt-2">
                    <StoryList />
                    <div className="flex items-center flex-col">
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </FeedPosts>
                <ProfileBar />
            </div>
        </DashboardContent>
    )
}