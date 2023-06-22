import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Alerts from "./muiComponents/Alert";
import PartieIllustration from "./PartieIllustration";

import axios from "../components/api/axios";
const LOGIN_URL = "/login";
const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [email, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const password = pwd;
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data.data);
      const accessToken = response?.data?.data?.accessToken;
      const roles = response?.data?.data?.roles;

      setAuth({ roles, accessToken });
      setMail("");
      setPwd("");
      navigate(`/${roles}`);
    } catch (err) {
      setAlert(err.response.data.message);
    }
  };

  return (
    <div className="container-fluid container-login vh-100">
      <div className="row h-100 ">
        <PartieIllustration />
        <div className="col-lg-6 col-sm-12 mt-5">
          <div className="row align-item-center justify-content-center h-100 mt-5">
            <div className="col-6 mt-5">
              {alert && <Alerts message={alert} />}
              <h1 className="mt-5 mb-3">Connexion</h1>
              <form onSubmit={handleSubmit} className="row">
                <div className="row ">
                  <div class="col mt-3">
                    <label class="form-label" for="email">
                      Adresse Mail
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setMail(e.target.value)}
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
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="submit">
                      Se connecter
                    </button>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8">Créer un compte ?</div>
                  <div className="col-4 text-align-end">
                    <p>
                      <Link to="/register" className="link-opacity-100">
                        Créer
                      </Link>
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
