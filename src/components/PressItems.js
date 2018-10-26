import React from "react";
import PropTypes from "prop-types";

const PressItems = ({ pressItems }) => (
  <ul>
    {pressItems.map(item => (
      <li key={item.title} className="c-press">
        <div className="c-press__image-wrap">
          <img
            className="c-press__image"
            src={item.image.imageFile}
            alt={item.image.imageDesc}
            width=""
            height=""
          />
        </div>

        <div className="c-press__info-wrap">
          <p className="c-press__title">{item.title}</p>
          <div className="c-press__meta">
            <p>
              <time dateTime="2016-10-10">{item.date}</time>
            </p>
            <p>by {item.source}</p>
          </div>
          <div className="c-press__desc">
            <p>{item.description}</p>
            <a href={item.link.address} className="c-press__cta styled-link">
              {item.link.text}
            </a>
            <p className="c-press__tag--square">{item.language}</p>
          </div>
          {/* <ul className="c-press__tags-wrap">
            {item.tags.map(i => (
              <li key={i} className="c-press__tag">
                #{i}
              </li>
            ))}
          </ul> */}
        </div>
      </li>
    ))}
  </ul>
);

PressItems.propTypes = {
  pressItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        imageTitle: PropTypes.string,
        imageDesc: PropTypes.string
      }),
      title: PropTypes.string,
      date: PropTypes.date,
      source: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.shape({
        address: PropTypes.string,
        text: PropTypes.string
      }),
      tags: PropTypes.array,
      language: PropTypes.string
    })
  )
};

export default PressItems;
