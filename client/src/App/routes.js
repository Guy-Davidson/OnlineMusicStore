import { useEffect } from "react";
import { useNavigate } from "react-location";

import Contact from "../Pages/Contact/Contact";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import Chords from "../Pages/Chords/Chords";
import ChordsPage from "../Pages/Chords/ChordsPage";
import Guides from "../Pages/Guides/Guides";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: `./products`, replace: true });
  }, []);

  return <></>;
};

export const routes = [
  {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <div>cart Page</div>,
  },
  {
    path: "/checkout",
    element: <div>checkout Page</div>,
  },
  {
    path: "/mypage1",
    element: <div>mypage1 Page</div>,
  },
  {
    path: "/guides",
    element: <Guides />,
  },
  {
    path: "/chords",
    children: [
      { path: "/", element: <Chords /> },
      {
        path: ":fileName",
        element: <ChordsPage />,
      },
    ],
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <div>admin Page</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "/readme",
    element: <div>Readme Page</div>,
  },
];
