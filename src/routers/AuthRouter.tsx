import { RouteObject } from "react-router-dom";

const AuthRouter: RouteObject[] = [
  {
    path: "auth",
    element: <div>authlayout</div>,
    children: [
      {
        path: "login",
        element: <div>login</div>,
      },
    ],
  },
];

export default AuthRouter;
