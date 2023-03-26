import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default myRoutes;
