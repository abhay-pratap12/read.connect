import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Banner from "./component/Banner";
import CardContainer from "./component/CardContainer";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../firebase";
// import SellerPage from "./Pages/SellerPage";
import AddToStore from "./Pages/AddToStore";
// import SellerCard from "./component/SellerCard";
import Shop from "./Pages/Library";
import HomeCardContainer from "./component/HomeCardContainer";
import BookOverview from "./Pages/BookOverview";
import RecommendedBooks from "./Pages/RecommendedBooks";
import ReadersPage from "./Pages/ReadersPage";
import Library from "./Pages/Library";

// const authentication = auth;
//why this required

const Body = () => {
  return (
    <div>
      <Banner />
      <HomeCardContainer />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* mtlb yaha pr '/'  ayega toh <Body /> se replace hoga oultet aur agr '/signUp' toh <SignUp /> s*/}
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/reader",
        element: <ReadersPage />,
      },
      {
        path: "/add",
        element: <AddToStore />,
      },
      {
        path:'/library',
        element: <Library />
      },
      {
        path:"/book/:resId",
        element: <BookOverview />
      },
      {
path: '/recommended',
element: <RecommendedBooks />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
