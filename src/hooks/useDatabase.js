import { useEffect, useState } from "react";

const useDatabase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState({});
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("./user.json", {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //   console.log(data);
  // }, []);

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    fetch("http://localhost:4002/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.status === 400 || res.status === 401) {
          alert("Invalid login");
        }
        return res.json();
      })

      .then((Data) => {
        setUser(Data);
        if (Data.success) {
          console.log(Data.email);
          localStorage.setItem("accessToken", Data.accessToken);
          localStorage.setItem("user-email", Data.email);
          console.log(Data.email);
          navigate("/dashbord");
        }
        console.log(Data);
        // window.location.reload();
      })

      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const data = window.localStorage.getItem("user-email");
    setEmail(data);
    console.log(data);
  }, []);

  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return {
    user,
    isLoading,
    Logout,
    loginUser,
    email,
  };
};

export default useDatabase;

// console.log(user);

// useEffect(() => {
//   fetch("http://localhost:5000/users", {
//     headers: {
//       "content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     // .then((data) => setUser(data));
//     .then((data) => console.log(data));
//   //  .then((data) => setUser(data));
//   // console.log(user);
// }, []);
