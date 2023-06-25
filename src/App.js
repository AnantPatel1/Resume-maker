import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/Mainpage";
import ResumeSteps from "./Navigation-Page/ResumeSteps";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/steps",
    element: <ResumeSteps />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
