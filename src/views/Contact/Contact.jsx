import React from "react";

import "./Contact.scss";
// import Git from "src/components/icons/github.svg";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="contact__title">Contact Me</div>
          <div className="contact__desc">If you want to work with me</div>
          <div className="contact__menu">
          <a href="https://github.com/NoAdward" className="contact__link">
            github
          </a>
          <a href="https://djinni.co/jobs/my-profile/" className="contact__link">
            djinni
          </a>
          <a
            href="https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BC%D0%B0-%D1%82%D0%BE%D0%BC%D1%87%D1%83%D0%BA-86b886271/"
            className="contact__link"
          >
            linkedin
          </a>
          <a href="https://www.instagram.com/no_adwar/" className="contact__link">
            instagram
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
