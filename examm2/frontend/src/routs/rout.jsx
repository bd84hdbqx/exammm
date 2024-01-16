import AddFoods from "../pages/addFoods";
import Detail from "../pages/detail";
import Home from "../pages/home";
import UserRout from "../pages/userRout";
import Wishlist from "../pages/wishlist";

export const routers=[
    {
        path: "/",
        element: <UserRout/>,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/wishlist",
            element: <Wishlist/>,
          },
          {
            path: "/addFoods",
            element: <AddFoods/>,
          },
          {
            path: "/:id",
            element: <Detail/>,
          },
        ],
      },
]