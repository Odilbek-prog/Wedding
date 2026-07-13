import React from "react";
import "./Footer5.scss";
import footer5 from "../../assets/images/footer5.png";

const Footer5 = ({ invitation }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__frameWrapper">
          <img
            src={footer5}
            alt="Vintage Frame"
            className="footer__frameImage"
          />
        </div>

        <div className="footer__content">
          <h2 className="footer__names">
            {invitation.groom} & {invitation.bride}
          </h2>
          <p className="footer__date">{invitation.date}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
