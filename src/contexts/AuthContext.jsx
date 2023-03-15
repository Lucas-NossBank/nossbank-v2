import emailjs from "@emailjs/browser";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../services/api.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("pt");
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(0);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [user, setuser] = useState({});
  
  const navigate = useNavigate();

  /*-------------------- Skip line --------------------*/

  async function SubmitFunction(data) {
    

    console.log(data);

    // emailjs
    //   .send(
    //     "service_vjasrhp",
    //     "template_83sakw3",
    //     templateParams,
    //     "BwXWctA1WZJmzYuvQ"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     toast.success("E-mail has been sent!", {
    //       icon: "👏",
    //       style: {
    //         borderRadius: "10px",
    //         background: "#333",
    //         color: "#fff",
    //       },
    //     });
    //   })
    //   .catch((err) =>
    //     toast.error("E-mail was not sent.", {
    //       icon: "❌",
    //       style: {
    //         borderRadius: "10px",
    //         background: "#333",
    //         color: "#fff",
    //       },
    //     })
    //   );
  }

  /*-------------------- Skip line --------------------*/

  async function LoginUser(data) {
    const newData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await api.post("/login", newData);
      const { token } = response.data;
      const { id } = response.data.user;

      setuser(response.data.user);
      console.log(user);

      localStorage.setItem("@personalProfile:token", token);
      localStorage.setItem("@personalProfile:id", id);

      navigate("/login/dashboardAdm", { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  /*-------------------- Skip line --------------------*/

  return (
    <>
      <AuthContext.Provider
        value={{
          currentLanguage,
          show,
          hover,
          hover1,
          hover2,
          hover3,
          hover4,
          setHover,
          setHover1,
          setHover2,
          setHover3,
          setHover4,
          setCurrentLanguage,
          SubmitFunction,
          setShow,
          LoginUser,
        }}
      >
        {children}
      </AuthContext.Provider>
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
};

export default AuthProvider;