import styled from "styled-components";

const ReelsContent = styled.div`
    font-size: 14px;
    margin: 16px 0;
    display: flex;
    gap: 16px;
    height: 90vh;

    .video {
        border-radius: 8px;
        height: 100%;
        clip-path: inset(1px 1px);
    }

    .info {
        position: absolute;
        bottom: 2.5rem;
        color: white;
        margin-left: 12px;
    }

    .header-info {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        .avatar {
            img {
                border-radius: 50%;
                height: 36px;
                width: 36px;
                cursor: pointer
            }
            margin-right: 8px;
        }

        .name {
            font-weight: 600;
            cursor: pointer;
            
            .time {
                font-weight: 400;
            }
        }
    }

    .icon-list {
        margin: 8px 0;

        svg {
            cursor: pointer;
            width: 28px;
            height: 28px;
        }

        svg:hover {
            color: rgb(0, 0, 0, 0.5);
        }

        .liked {
            color: red;
        }

        .liked:hover {
            color: rgba(255, 0, 0, 0.8);
        }

    }

    .hashtag {
        color: #385898; 
    }

    .comment {
        textarea {
            font-size: 14px;
        }

        svg {
            height: 16px;
            width: 16px;
        }
        padding-bottom: 8px;

        border-bottom: 1px solid rgb(219, 219, 219);
    }

    @media (max-width: 560px) {
        width: 100%;
        padding: 0 8px;
        height: auto;

    }
`

export {ReelsContent}
