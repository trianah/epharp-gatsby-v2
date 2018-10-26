import React from "react";
import PropTypes from "prop-types";

const Events = ({ events }) => (
  <ul>
    {events.map(item => (
      <li className="c-event" key={item.dateTime}>
        <p className="c-event__title">{item.title}</p>

        <div className="c-event__meta">
          <p>
            <time dateTime="2017-10-21 15:00">{item.dateTime}</time>
          </p>
          <p>{item.venue}</p>
          <p>{item.country}</p>
        </div>
        <p className="c-event__desc">{item.description}</p>
      </li>
    ))}
  </ul>
);

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dateTime: PropTypes.string,
      venue: PropTypes.string,
      country: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Events;
