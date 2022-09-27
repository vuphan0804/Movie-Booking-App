import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutRoute = ({ children }) => {
  // Logic kiểm tra xem user có được truy cập vào route hay không
  // const user = JSON.parse(localStorage.getItem("user"));
  const { user } = useSelector((state) => state.auth);

  // Chưa đăng nhập, điều hướng user về trang login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // đã đăng nhập
  return children;
};

export default CheckoutRoute;
