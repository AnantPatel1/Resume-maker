import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/Mainpage";
import ResumeSteps from "./Navigation-Page/ResumeSteps";
import RootLayout from "./Navigation-Page/RootLayout/RootLayout";
import SelectTemplate from "./Navigation-Page/SelectTemplate/SelectTemplate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/steps",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ResumeSteps />,
      },
      {
        path: "build",
        element: <SelectTemplate />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
