import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};
export default App;
