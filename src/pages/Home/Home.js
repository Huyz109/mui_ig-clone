import { Post } from "../../components/Post"
import { ProfileBar } from "../../components/Profilebar"
import { StoryList } from "../../components/StoryList"
import { FeedPosts } from "../DefaultLayout/LayoutItemStyled"

export const Home = () => {
    return(
        <div className="flex justify-center w-full">
            <FeedPosts className="mt-2">
                <StoryList />
                <div className="flex items-center flex-col">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </FeedPosts>
            <ProfileBar />
        </div>
    )
}