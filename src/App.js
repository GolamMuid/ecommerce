import GlobalStyle from "./components/Other Components/GlobalStyle";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./components/Other Components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Order from "./pages/Order/Order";
import ErrorImg from "./pages/ErrorImg/ErrorImg";
import Dashboard from "./pages/Dashbord/Dashbord";

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
      borderPrimary: "#dddddd",
      rating: " #FFA41C"
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashbord" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="*" element={<ErrorImg />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
