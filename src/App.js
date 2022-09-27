import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import MainLayout from "components/MainLayout";
import AuthLayout from "components/AuthLayout";
import CheckoutRoute from "routes/CheckoutRoute";
import Login from "./modules/Authentication/Components/Login/Login";
import Register from "./modules/Authentication/Components/Register/Register";

// import Login from "modules/Admin/Authentication/Components/Login/Login";
// import Register from "modules/Admin/Authentication/Components/Register";
const MovieManagement = lazy(() =>
  import("modules/Admin/Home/components/MovieManagement/MovieManagement")
);
const Content = lazy(() =>
  import(
    "modules/Admin/Home/components/MovieManagement/components/Content/Content"
  )
);
const EditMovie = lazy(() =>
  import(
    "modules/Admin/Home/components/MovieManagement/components/Content/EditMovie"
  )
);
const AddMovie = lazy(() =>
  import(
    "modules/Admin/Home/components/MovieManagement/components/Content/AddMovie"
  )
);
const UserManagement = lazy(() =>
  import("modules/Admin/Home/components/UserManagement/UserManagement")
);
const AddUser = lazy(() =>
  import(
    "modules/Admin/Home/components/UserManagement/components/Content/AddUser"
  )
);
const EditUser = lazy(() =>
  import(
    "modules/Admin/Home/components/UserManagement/components/Content/EditUser"
  )
);
const UserContent = lazy(() =>
  import(
    "modules/Admin/Home/components/UserManagement/components/Content/UserContent"
  )
);
// const Login = lazy(() => {
//   import('modules/Admin/Authentication/Components/Login/Login');
// });

// Không import trực tiếp các pages, vì nó sẽ được tải tất cả ở lần đầu tiên
// import Home from "modules/Home/pages/Home";
// import Movie from "modules/Movie/pages/Movie";

// Để chỉ cần tải những pages cần thiết ta sử dụng kĩ thuật lazyload
const Home = lazy(() => import("modules/Home/pages/Home"));
const Movie = lazy(() => import("modules/Movie/pages/Movie"));
const Checkout = lazy(() => import("modules/Checkout/pages/Checkout"));

const MovieList = lazy(() => import("modules/AdminMovie/pages/MovieList"));
// const AddMovie = lazy(() => import("modules/AdminMovie/pages/AddMovie"));

function App() {
  return (
    // Suspense: hiển thị fallback UI (Loading) khi các file JS của một page đang được tải về
    <Suspense
      fallback={
        <svg
          className="animate-spin h-5 w-5 mr-3 text-sky-500"
          viewBox="0 0 24 24"
        >
          <h1 className="text-xl"> Loading... </h1>{" "}
        </svg>
      }
    >
      <Routes>
        {/* <Route
          path="/admin"
          element={
            // TODO: chuyển vào component AdminLayout
            // TODO: tạo AdminRoute kiểm tra xem user có phải là QuanTri hay không
            // <AdminRoute>
            //   <AdminLayout />
            // </AdminRoute>

            <div>
              <h1> Admin Layout </h1> <Outlet />
            </div>
          }
        > */}
        <Route path="movies" element={<MovieList />} />{" "}
        <Route path="movies/add" element={<AddMovie />} />{" "}
        {/* AdminUser, AdminShowtimes */} {/* </Route>{" "} */}
        {/* Để các routes có cùng chung 1 layout, ta sử dụng kĩ thuật nested route, 
                                                                                                                  route parent đi định nghĩa layout component, bên trong route parent sẽ gọi tới cái children routes */}{" "}
        <Route path="/" element={<MainLayout />}>
          {" "}
          {/* index: path của child route khớp 100% với path của parent route */}{" "}
          <Route index element={<Home />} />{" "}
          <Route path="movie/:movieId" element={<Movie />} />{" "}
          <Route
            path="checkout/:checkoutId"
            element={
              <CheckoutRoute>
                <Checkout />
              </CheckoutRoute>
            }
          />{" "}
        </Route>{" "}
        {/* <Route path="/" element={<Login />} /> */}
        {/* ADMIN HERE  */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/admin" element={<MovieManagement />}>
          <Route index element={<Content />} />
          <Route path="/admin/addMovie" element={<AddMovie />} />
          <Route path="/admin/updateMovie/:movieID" element={<EditMovie />} />
        </Route>
        <Route path="/admin/user" element={<UserManagement />}>
          <Route index element={<UserContent />} />
          <Route path="/admin/user/addUser" element={<AddUser />} />
          <Route path="/admin/user/updateUser/:userID" element={<EditUser />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
