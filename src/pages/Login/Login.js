import { Button, Card, CardContent, Link, TextField } from "@mui/material";
import { LoginPage, LoginForm, Strike, StrikeContent } from "./LoginItemStyled";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <LoginPage>
        <img src="login.png" alt=""/>
        <LoginForm>
          <Card className="login-form">
            <CardContent>
              <img src="logo-insta.png" className="login-logo" alt=""/>
              <TextField
                type="email"
                id="outlined-basic"
                variant="filled"
                margin="normal"
                fullWidth="true"
                label="Số điện thoại, tên người dùng hoặc email"
              />
              <TextField
                type="email"
                id="outlined-basic"
                variant="filled"
                margin="normal"
                fullWidth="true"
                label="Mật khẩu"
              />
              <Button
                variant="contained"
                className="login-submit-btn"
                onClick={() => navigate('/')}
              >
                Đăng nhập
              </Button>
              <Strike ><StrikeContent>HOẶC</StrikeContent></Strike>
              <Link className="font-600 color-navy fb-link" href="https://www.facebook.com/" underline="none">Đăng nhập bằng Facebook</Link>
              <Link className="color-navy forgot-pass" href="" underline="none">Quên mật khẩu?</Link>
            </CardContent>
          </Card>
          <Card className="create-account">
            <Link className="font-600 color-sky" underline="none" href="">Tạo tài khoản mới</Link>
          </Card>
          <p className="install-app">Tải ứng dụng.</p>
          <div className="store-link">
            <img src="gg-play.png" alt=""/>
            <img src="microsoft.png" alt=""/>
          </div>
        </LoginForm>
      </LoginPage>
    </>
  );
}

