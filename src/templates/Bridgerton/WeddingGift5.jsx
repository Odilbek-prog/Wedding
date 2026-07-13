import React, { useState } from "react";
import "./WeddingGift5.scss";
import weddingCakeImage from "../../assets/images/gifts-cake.png"; // Update the path to your image

const WeddingGift5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="wedding-gift5">
      <div className="wedding-gift5__image-wrapper">
        <img src={weddingCakeImage} alt="Wedding Cake" />
      </div>

      <h2 className="wedding-gift5__title">Gifts</h2>

      <div className="wedding-gift5__content">
        <p className="wedding-gift5__description">
          Your presence is the best gift — having you by our side on this
          special day is truly all we need. However, if you wish to give a gift,
          please see the details below:
        </p>

        <button
          className="wedding-gift5__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Card preferred</span>
          <span
            className={`wedding-gift5__arrow ${isOpen ? "wedding-gift5__arrow--rotate" : ""}`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="wedding-gift5__info">
            <p>
              On the wedding day, you can hand us a card or envelope in person.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeddingGift5;
