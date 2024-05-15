import { Button, Card, CardContent, Link, TextField } from "@mui/material";
import { LoginForm } from "./LoginItemStyled";

export const Login = () => {
  return (
    <>  
      <LoginForm>
        <Card>
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
            >
              Đăng nhập
            </Button>
            <div>HOẶC</div>
            <Link className="mui-link font-600 color-navy" href="https://www.facebook.com/">Đăng nhập bằng Facebook</Link>
            <Link className="mui-link color-navy" href="">Quên mật khẩu?</Link>
          </CardContent>
        </Card>
        <Card>
          <Link className="mui-link font-600 color-sky" href="">Tạo tài khoản mới</Link>
        </Card>
        Tải ứng dụng
        <div className="store-link">
          <img src="gg-play.png" alt=""/>
          <img src="microsoft.png" alt=""/>
        </div>
      </LoginForm>
    </>
  );
}

