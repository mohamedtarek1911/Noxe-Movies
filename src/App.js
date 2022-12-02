import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/HOME/Home";
import Movies from "./Components/Movies/Movies";
import Tv from "./Components/Tv/Tv";
import People from "./Components/People/People";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import RootLayout from "./Layouts/RootLyout/RootLayout";
import Network from "./Components/Network/Network";
import Details from "./Components/Details/Details";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import PerDetails from "./Components/PerDetails/PerDetails";

function ProtectedRootes(props) {
  let key = localStorage.getItem("key");
  if (key) {
    return <Navigate to="/SignIn" />;
  } else {
    return props.children;
  }
}

let routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRootes>
            <Home />
          </ProtectedRootes>
        ),
      },
      {
        path: "Home",
        element: (
          <ProtectedRootes>
            <Home />
          </ProtectedRootes>
        ),
      },
      {
        path: "Movies",
        element: (
          <ProtectedRootes>
            <Movies />
          </ProtectedRootes>
        ),
      },
      {
        path: "Tv",
        element: (
          <ProtectedRootes>
            <Tv />
          </ProtectedRootes>
        ),
      },
      {
        path: "People",
        element: (
          <ProtectedRootes>
            <People />
          </ProtectedRootes>
        ),
      },
      {
        path: "About",
        element: (
          <ProtectedRootes>
            <About />
          </ProtectedRootes>
        ),
      },
      {
        path: "Network",
        element: (
          <ProtectedRootes>
            <Network />
          </ProtectedRootes>
        ),
      },
      {
        path: "Datails/:id/:media",
        element: (
          <ProtectedRootes>
            <Details />
          </ProtectedRootes>
        ),
      },
      {
        path: "PerDatails/:id/:media",
        element: (
          <ProtectedRootes>
            <PerDetails />
          </ProtectedRootes>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "SignIn", element: <SignIn /> },
      { path: "SignUp", element: <SignUp /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
