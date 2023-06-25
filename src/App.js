import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/Mainpage";
import ResumeSteps from "./Navigation-Page/ResumeSteps";
import RootLayout from "./Navigation-Page/RootLayout/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/build",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ResumeSteps />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
