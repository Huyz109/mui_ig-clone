import styled from "styled-components";

const DashboardContent = styled.div`
    display: flex;

    .header-mobile {
        display: none;
    }

    @media (max-width: 760px) {
        flex-direction: column-reverse;

        .header-mobile {
            display: block;
        }
    }
`

const FeedPosts = styled.div`
    max-width: 630px;
    width: 100%;
`

export {DashboardContent, FeedPosts}
