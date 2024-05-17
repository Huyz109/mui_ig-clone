import styled from 'styled-components';

const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    @media (min-width: 769px) {
        .side-img {
            display: block;
        }
    }

    @media (max-width: 768px) {
        .side-img {
            display: none;
        }
    }
`

const LoginForm = styled.div`
    max-width: 350px;

    .login-logo {
        height: 80px;
    }

    .MuiInputBase-root {
        background-color: rgb(250, 250, 250);
    }

    .MuiCardContent-root {
        padding-left: 40px;
        padding-right: 40px;
    }

    .MuiFormLabel-root {
        font-size: 13px;
    }

    .MuiInputBase-input {
        font-size: 14px;
    }

    .login-submit-btn {
        text-transform: none;
        background-color: rgb(0, 149, 246);
        width: 100%;
        box-shadow: none;
        margin: 8px 0;
    }

    .login-submit-btn:hover {
        background-color: rgb(24, 119, 242);
        box-shadow: none;
    }

    .MuiLink-root {
        display: block;
    }

    .fb-link {
        margin: 8px 0;
    }

    .forgot-pass {
        font-size: 12px;
        margin-top: 12px;
    }

    .login-form {
        margin-bottom: 10px;
    }

    .font-600 {
        font-weight: 600;
    }

    .color-navy {
        color: #385185;
    }

    .create-account {
        padding: 10px 0;
        margin-bottom: 10px;

        a {
            line-height: 18px;
            margin: 15px;
        }
    }

    .install-app {
        margin: 10px 20px;
    }

    .store-link {
        height: 40px;
        display: flex;
        justify-content: center;
        gap: 1rem;

        img {
            height: 100%;
            cursor: pointer;
        }
    }
`

const Strike = styled.p`
  width: 100%; 
  text-align: center; 
  border-bottom: 1px solid #D9D9D9; 
  line-height: 0.1em;
  margin: 20px 0 30px; 
`

const StrikeContent = styled.span`
  background:#fff; 
  padding:0 2em; 
  font-weight: 600;
  color: rgb(115, 115, 115);
  font-size: 14px;
`

export {LoginPage, LoginForm, Strike, StrikeContent}