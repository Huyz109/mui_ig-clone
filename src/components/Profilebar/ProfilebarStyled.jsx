import styled from "styled-components";

const ProfileBarContent = styled.div`
    height: 100vh;
    width: 320px;
    padding-left: 64px;
    padding-top: 32px;

    .profile {
        .info {
            font-size: 14px;
            line-height: 18px;
        }

        .profile-link {
            font-size: 12px;
            font-weight: 600;
        }

        .color-sky:hover {
            color: rgb(12, 155, 251, 0.8);
        }
    }

    .suggest-list {
        margin: 24px 0 8px;

        .profile {
            padding: 8px 4px;
        }
    }

    @media (min-width: 1160px) {
        display: block;
    }

    @media (max-width: 1160px) {
        display: none;
    }
`

export {ProfileBarContent}