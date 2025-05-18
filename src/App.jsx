// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import Main2 from './Pages/Main2';
import Games from './Pages/Games';
import Movies from './Pages/Movies';
import Current from './Pages/Current';
import Music from './Pages/Music';
import Shopping from './Pages/shopping';
import LiveEvents from './Pages/LiveEvents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/main2', element: <Main2 /> },
    { path: '/Games', element: <Games /> },
    { path: '/Movies', element: <Movies /> },
    { path: '/Current', element: <Current /> },
    { path: '/Music', element: <Music /> },
    { path: '/Shopping', element: <Shopping /> },
    { path: '/LiveEvents', element: <LiveEvents /> }


  ]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
    </>
  );
};
