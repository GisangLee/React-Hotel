import React from "react";
import PropTypes from "prop-types";
import "./Hotel.css";

function Hotels({ id, address, category, name, information, contact, images }) {
  return (
    <div className="hotel">
      <div className="hotel__header">
        <div className="hotel__header-column">
          <div className="hotel__name">{name}</div>
        </div>
        <div className="hotel__header-column">
          <div className="hotel__category">{category}</div>
        </div>
      </div>
      <div className="hotel__content">
        <div className="hotel__information">
          <span>{information}</span>
        </div>
        <div className="hotel__address">
          <span>{address}</span>
        </div>
      </div>
      <div className="hotel__bottom">
        <div className="hotell__contact">{contact}</div>
      </div>
    </div>
  );
}

Hotels.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Hotels;
