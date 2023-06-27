import React, { useState } from "react";
import CustomMultiValueOperator from "../../ClientsFiltering";

function MainClients() {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [twitter, setTwitter] = useState("");
  const [twitterError, setTwitterError] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Adresse e-mail invalide.");
    } else {
      setEmailError("");
    }
  };
  const handleFullNameChange = (event) => {
    const value = event.target.value;
    setFullName(value);

    if (value.length < 4) {
      setFullNameError("Le nom doit avoir au moins 4 caractères.");
    } else {
      setFullNameError("");
    }
  };
  const handleTwitterChange = (event) => {
    const value = event.target.value;
    setTwitter(value);

    const twitterRegex =
      /^https?:\/\/(www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/;

    if (!twitterRegex.test(value)) {
      setTwitterError("URL du profil Twitter invalide.");
    } else {
      setTwitterError("");
    }
  };
  const handleLinkedinChange = (event) => {
    const value = event.target.value;
    setLinkedin(value);

    const linkedinRegex =
      /^https?:\/\/(www\.)?linkedin\.com\/(in|pub|company)\/[a-zA-Z0-9_-]+\/?$/;

    if (!linkedinRegex.test(value)) {
      setLinkedinError("URL du profil Linkedin invalide.");
    } else {
      setLinkedinError("");
    }
  };
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);

    const phoneRegex = /^(?:\+?243|0)\s?(?:97|83|81|99|89|90)(?:\s?\d){7}$/;

    if (!phoneRegex.test(value)) {
      setPhoneError("Le numéro entré est invalide.");
    } else {
      setPhoneError("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullName.length < 4) {
      setFullNameError("Le nom doit avoir au moins 4 caractères.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Adresse e-mail invalide.");
      return;
    }
    const twitterRegex =
      /^https?:\/\/(www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/;

    if (!twitterRegex.test(twitter)) {
      setTwitterError("URL du profil Twitter invalide.");
      return;
    }

    const linkedinRegex =
      /^https?:\/\/(www\.)?linkedin\.com\/(in|pub|company)\/[a-zA-Z0-9_-]+\/?$/;

    if (!linkedinRegex.test(linkedin)) {
      setLinkedinError("URL du profil Linkedin invalide.");
      return;
    }

    const phoneRegex = /^(?:\+?243|0)\s?(?:97|83|81|99|89|90)(?:\s?\d){7}$/;

    if (!phoneRegex.test(phone)) {
      setPhoneError("Le numéro entré est invalide.");
      return;
    }
  };

  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Dashboard Vendeur</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">Clients</li>
          </ol>
        </nav>
      </div>
      <section class="section mt-3">
        <div class="row">
          <CustomMultiValueOperator />
        </div>

        {/* <div className="row form-wrapper">
          <form className="frofile-form">
            <div class="row mb-3">
              <label for="fullName" class="col-md-4 col-lg-3 col-form-label">
                Full Name
              </label>
              <div class="col-md-8 col-lg-9">
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Baki kyungu"
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
                {fullNameError && (
                  <div className="text-danger">{fullNameError}</div>
                )}
              </div>
            </div>

            <div class="row mb-3">
              <label for="Country" class="col-md-4 col-lg-3 col-form-label">
                Province
              </label>
              <div class="col-md-8 col-lg-9">
                <select
                  name="province"
                  id="province"
                  class="form-control"
                  required
                >
                  <option value="province" selected>
                    Haut-katanga
                  </option>
                  <option value="province">Equateur</option>
                  <option value="province">Nord-Ubangui </option>
                  <option value="province">Mongala</option>
                  <option value="province">Bas-Uele</option>
                  <option value="province">Haut-Uele </option>
                  <option value="province">Kinshasa</option>
                  <option value="province">Lomami</option>
                  <option value="province">Haut-lomami</option>
                  <option value="province">Lualaba</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <label for="Country" class="col-md-4 col-lg-3 col-form-label">
                Country
              </label>
              <div class="col-md-8 col-lg-9">
                <input
                  name="country"
                  type="text"
                  class="form-control"
                  id="Country"
                  placeholder="rdc"
                />
              </div>
            </div>

            <div class="row mb-3">
              <label for="Address" class="col-md-4 col-lg-3 col-form-label">
                Address
              </label>
              <div class="col-md-8 col-lg-9">
                <input
                  name="address"
                  type="text"
                  class="form-control"
                  id="Address"
                  placeholder="A108 Adam Street, New York, NY 535022"
                />
              </div>
            </div>

            <div class="row mb-3">
              <label for="Phone" class="col-md-4 col-lg-3 col-form-label">
                Phone
              </label>
              <div class="col-md-8 col-lg-9">
                <input
                  name="phone"
                  type="text"
                  class="form-control"
                  id="Phone"
                  placeholder="097 11 355 57"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
                {phoneError && <div className="text-danger">{phoneError}</div>}
              </div>
            </div>

            <div class="row mb-3">
              <label for="Email" class="col-md-4 col-lg-3 col-form-label">
                Email
              </label>
              <div class="col-md-8 col-lg-9">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="abbakikyungu@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
            </div>

            <div class="row mb-3">
              <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">
                Twitter Profile
              </label>
              <div class="col-md-8 col-lg-9">
                <input
                  name="twitter"
                  type="text"
                  class="form-control"
                  id="Twitter"
                  placeholder="https://twitter.com/username"
                  value={twitter}
                  onChange={handleTwitterChange}
                />
                {twitterError && (
                  <div className="text-danger">{twitterError}</div>
                )}
              </div>
            </div>

            <div class="row mb-3">
              <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">
                Linkedin Profile
              </label>
              <div class="col-md-8 col-lg-9">
                <input
                  name="linkedin"
                  type="text"
                  class="form-control"
                  id="Linkedin"
                  placeholder="https://linkedin.com/#"
                  value={linkedin}
                  onChange={handleLinkedinChange}
                />
                {linkedinError && (
                  <div className="text-danger">{linkedinError}</div>
                )}
              </div>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div> */}
      </section>
    </main>
  );
}

export default MainClients;
