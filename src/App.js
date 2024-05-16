import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Segoe UI",
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
