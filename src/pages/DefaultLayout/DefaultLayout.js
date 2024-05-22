import { Sidebar } from "../../components/Sidebar"
import { HeaderMobile } from "../../components/Sidebar/HeaderMobile"
import { DashboardContent } from "./LayoutItemStyled"

export const DefaultLayout = ({children}) => {
    return(
        <DashboardContent>
            <Sidebar />
            {children}
            <HeaderMobile />
        </DashboardContent>
    )
}