import { RouterProvider } from 'react-router-dom';
import myRoutes from './router/router';

const App = () => {
  return (
    <>
      {/* Set my router function to RouterProvider  */}
      <RouterProvider router={myRoutes} />
    </>
  );
};

export default App;
