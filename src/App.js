import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import { Reels } from './pages/Reels/Reels';
import { DefaultLayout } from './pages/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Segoe UI",
    },
  });

  const publicRoute = [
    {path: '/login', component: Login, layout: null},
    {path: '/', component: Home},
    {path: '/reels', component: Reels},

  ]

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index)=>{
            let Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page/>
              </Layout>
            }/>
          })}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
