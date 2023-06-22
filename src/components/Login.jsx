import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import imgIllustration from "../components/assets/img/Illustration.png";

import axios from "../components/api/axios";
const LOGIN_URL = "/login";
const Login = () => {
  // const { setAuth } = useAuth();
  // const navigate = useNavigate();

  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [pwd, setPwd] = useState("");
  // const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const email = user;
    //   const password = pwd;
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ email, password }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );

    //   console.log(response.data.data);
    //   const accessToken = response?.data?.data?.accessToken;
    //   const roles = response?.data?.data?.roles;

    //   setAuth({ roles, accessToken });
    //   setUser("");
    //   setPwd("");

    //   navigate(`/${roles}`);
    // } catch (err) {
    //   if (!err?.response) {
    //     // setErrMsg(
    //     //   <>
    //     //     <FontAwesomeIcon
    //     //       icon={faExclamationCircle}
    //     //       className="warning-icon"
    //     //     />{" "}
    //     //     No Server Response
    //     //   </>

    //   } else if (err.response?.status === 400) {
    //     setErrMsg(
    //       // <>
    //       //   <FontAwesomeIcon
    //       //     icon={faExclamationCircle}
    //       //     className="warning-icon"
    //       //   />{" "}
    //       //   Missing Username or Password
    //       // </>
    //     );
    //   } else if (err.response?.status === 401) {
    //     setErrMsg(
    //       <>
    //         {/* <FontAwesomeIcon
    //           icon={faExclamationCircle}
    //           className="warning-icon"
    //         />{" "}
    //         Unauthorized */}
    //       </>
    //     );
    //   } else if (err.response?.status === 403) {
    //     setErrMsg(
    //       // <>
    //       //   <FontAwesomeIcon
    //       //     icon={faExclamationCircle}
    //       //     className="warning-icon"
    //       //   />{" "}
    //       //   {err.response.data.message}
    //       // </>
    //     );
    //   } else {
    //     setErrMsg(
    //       // <>
    //       //   <FontAwesomeIcon
    //       //     icon={faExclamationCircle}
    //       //     className="warning-icon"
    //       //   />{" "}
    //       //   Login Failed
    //       // </>
    //     );
    //   }
    //   console.log(err);
    //   errRef.current.focus();
    // }
  };

  return (
    <div className="container-fluid container-login vh-100">
      <div className="row h-100 ">
        <div className="col-lg-5 col-sm-12 illustration">
          <div className="row h-40 text-center mt-5">
            <h1>logo</h1>
          </div>
          <div className="row h-50 mt-3">
            <img src={imgIllustration} alt="" className="mt-5" />
          </div>
        </div>
        <div className="col-lg-7 col-sm-12 mt-5">
          <div className="row align-item-center justify-content-center h-100 mt-5">
            <div className="col-6 mt-5">
              <h1 className="mt-5 mb-3">Connexion</h1>
              <form onSubmit={handleSubmit} className="row">
                <div className="row ">
                  <div class="col mt-3">
                    <label class="form-label" for="email">
                      email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value=""
                      required
                    />
                  </div>
                </div>
                <div className="row ">
                  <div class="col mt-3">
                    <label class="form-label" for="password">
                      Mot de pass
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      value=""
                      required
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">
                      S'inscrire sur la plateforme
                    </button>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">Créer un compte ?</div>
                  <div className="col">
                    <p>
                      <a class="link-opacity-100" href="#">
                        Créer
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
