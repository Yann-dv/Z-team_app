import React from 'react';
import PropTypes from 'prop-types';

export default function PartnerCard({ link, image, alt, title }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer nofollow"
      className="partners-link"
      title= {`Lien vers ${title}`}
    >
      <img src={image} alt={alt} />
    </a>
  );
}

PartnerCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
