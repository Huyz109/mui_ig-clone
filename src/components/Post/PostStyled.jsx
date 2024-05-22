import styled from "styled-components";

const PostContent = styled.div`
    width: calc(-2px + min(470px, 100vw));
    font-size: 14px;
    margin: 8px 0;
    
    .post-img {
        border-radius: 4px;
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

        .reaction-icon {
            gap: 10px;
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
`

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;

    .header-info {
        display: flex;
        align-items: center;

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
`

export {PostContent, PostHeader}
