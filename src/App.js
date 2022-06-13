import GlobalStyle from "./components/Other Components/GlobalStyle";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./components/Other Components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Order from "./pages/Order/Order";
import ErrorImg from "./pages/ErrorImg/ErrorImg";
import UserDashboard from "./pages/UserDashbord/UserDashbord";

function App() {
  const theme = {
    color: {
      primary: "#404040",
      secondary: "black",
      bg: "white",
      bgSecondary: "#dad9d9",
      invertedPrimary: "white",
      invertedBg: "black",
      borderPrimary: "#EBEBEB",
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
            <Route path="/dashbord" element={<UserDashboard />}></Route>
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

// {/* <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         <Home />
//         <ScrollToTop />
//       </ThemeProvider> */}
