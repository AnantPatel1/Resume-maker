import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/Mainpage";
import ResumeSteps from "./Navigation-Page/ResumeSteps";
import RootLayout from "./Navigation-Page/RootLayout/RootLayout";
import Templates from "./Navigation-Page/SelectTemplate/Templates";
import SelectTemplate from "./Navigation-Page/SelectTemplate/SelectTemplatePage";
import BuildResume from "./Navigation-Page/BuildResume/BuildResume";
import ResumeState from "./Context/ResumeState";
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
      {
        path: "select-template",
        children: [
          {
            index: true,
            element: <Templates />,
          },
          {
            path: "build-resume",
            element: <BuildResume />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <ResumeState>
      <RouterProvider router={router} />
    </ResumeState>
  );
}

export default App;
