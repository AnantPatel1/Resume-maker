import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/Mainpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
