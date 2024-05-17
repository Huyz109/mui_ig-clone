import { Post } from "../../components/Post"
import { Sidebar } from "../../components/Sidebar"
import { DashboardContent } from "./HomeItemStyled"

export const Home = () => {
    return(
        <DashboardContent>
            <Sidebar />
            <DashboardContent>
                <Post />
            </DashboardContent>
        </DashboardContent>
    )
}