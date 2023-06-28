import "../styles/navigationStyle.css";
import {NavLink} from "react-router-dom";

import React from "react";

const Navigation = ({ imgProfile, nom, prenom, userRole }) => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <NavLink className="nav-link nav-icon search-bar-toggle">
            <i className="bi bi-search"></i>
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link nav-icon" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
          </NavLink>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <NavLink >
                <span className="badge rounded-pill bg-primary p-2 ms-2">
                  View all
                </span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-x-circle text-danger"></i>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-check-circle text-success"></i>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-info-circle text-primary"></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <NavLink >Show all notifications</NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link nav-icon" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text"></i>
            <span className="badge bg-success badge-number">3</span>
          </NavLink>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <NavLink>
                <span className="badge rounded-pill bg-primary p-2 ms-2">
                  View all
                </span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <NavLink>
                <img
                  src="assets/img/messages-1.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut...
                  </p>
                  <p>4 hrs. ago</p>
                </div>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <NavLink>
                <img
                  src="assets/img/messages-2.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut...
                  </p>
                  <p>6 hrs. ago</p>
                </div>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <NavLink >
                <img
                  src="assets/img/messages-3.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <div>
                  <h4>David Muldon</h4>
                  <p>
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut...
                  </p>
                  <p>8 hrs. ago</p>
                </div>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <NavLink >Show all messages</NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown pe-3">
          <NavLink
            className="nav-link nav-profile d-flex align-items-center pe-0"
            data-bs-toggle="dropdown"
          >
            {/* <span
              className="containerProfil"
              style={{ backgroundImage: `url(${imgProfile})` }}
            >
             <img src={imgProfile} alt="Profile" className="imgProfile" /> 
            </span> */}

            <span
              className="containerProfil"
              style={{
                backgroundImage: `url(${imgProfile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></span>

            <span className="d-none d-md-block dropdown-toggle ps-2">
              {prenom} {nom}
            </span>
          </NavLink>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>
                {prenom} {nom}
              </h6>
              <span>{userRole}</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center"
              >
                <i className="bi bi-person"></i>
                <span>My Profile</span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center"
              >
                <i className="bi bi-gear"></i>
                <span>Account Settings</span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center"
              >
                <i className="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item d-flex align-items-center" to="/login">
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
