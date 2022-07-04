import GlobalStyle from "./components/Other Components/GlobalStyle";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./components/Other Components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Order from "./pages/Order/Order";
import ErrorImg from "./pages/ErrorImg/ErrorImg";
import Dashboard from "./pages/Dashbord/Dashbord";

import OrderDelivered from "./pages/Order/OrderDelivered";
import OrderOnProgress from "./pages/Order/OrderOnProgress";
import OrderCanceled from "./pages/Order/OrderCanceled";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration";

import Processor from "./pages/Processor";
import Motherboard from "./pages/Motherboard";
import Ram from "./pages/Ram";
import Tv from "./pages/Tv";
import Camera from "./pages/Camera";
import Headphones from "./pages/Headphones";
import Smartphones from "./pages/Smartphones";
import Music from "./pages/Music";
import Accessories from "./pages/Accessories";
import Clothing from "./pages/Clothing";
import Personal from "./pages/Personal";
import Grocery from "./pages/Grocery";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Test from "./pages/Test";
import AllProducts from "./pages/AllProducts";
import ScrollFromStart from "./components/Other Components/ScrollFromStart";
import Cart from "./pages/Cart";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
// import BlogDetailPage from "./pages/BlogDetailPage";
import BlogDescription from "./pages/BlogDescription";
import Checkout from "./pages/Checkout";

function App() {
  const theme = {
    color: {
      primary: "#404040",
      secondary: "black",
      bg: "white",
      bgSecondary: "#dad9d9",
      bgTertiary: "#EFF2F9",
      bgQuaternary: "#F5F5F5",
      invertedPrimary: "white",
      invertedBg: "black",
      borderPrimary: "#EBEBEB",
      rating: " #FFA41C",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <ScrollFromStart />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashbord" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/order/delivered" element={<OrderDelivered />}></Route>
            <Route path="/order/process" element={<OrderOnProgress />}></Route>
            <Route path="/order/cancel" element={<OrderCanceled />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="*" element={<ErrorImg />} />
            <Route path="/processor" element={<Processor />}></Route>
            <Route path="/motherboard" element={<Motherboard />}></Route>
            <Route path="/ram" element={<Ram />}></Route>
            <Route path="/tv" element={<Tv />}></Route>
            <Route path="/camera" element={<Camera />}></Route>
            <Route path="/headphones" element={<Headphones />}></Route>
            <Route path="/smartphones" element={<Smartphones />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/accessories" element={<Accessories />}></Route>
            <Route path="/clothing" element={<Clothing />}></Route>
            <Route path="/personal" element={<Personal />}></Route>
            <Route path="/grocery" element={<Grocery />}></Route>
            <Route path="/detail" element={<ProductDetail />}></Route>
            <Route path="/allproducts" element={<AllProducts />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/home2" element={<Home2 />}></Route>
            <Route path="/home3" element={<Home3 />}></Route>
            {/* <Route path="/blog-detail" element={<BlogDetailPage />}></Route> */}
            <Route path="/blog-description" element={<BlogDescription />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/test" element={<Test />}></Route>

          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
