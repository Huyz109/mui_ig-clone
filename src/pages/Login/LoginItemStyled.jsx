import styled from 'styled-components';

const LoginForm = styled.div`
    .login-logo {
        height: 80px;
    }

    .MuiInputBase-root {
        background-color: rgb(250, 250, 250);
    }

    .login-submit-btn {
        text-transform: none;
        background-color: rgb(0, 149, 246);
    }

    .login-submit-btn:hover {
        background-color: rgb(24, 119, 242);
    }

    .mui-link {
        text-decoration: none;
    }

    .font-600 {
        font-weight: 600;
    }

    .color-navy {
        color: #385185;
    }

    .color-sky {
        color: rgb(0, 149, 246);
    }

    .store-link {
        height: 40px;

        img {
            height: 100%;
            cursor: pointer;
        }
    }
`

export {LoginForm}