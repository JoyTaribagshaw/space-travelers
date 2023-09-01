/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, cancelReservation, reserveRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets, loading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading, please wait.....</div>;
  }

  if (error) {
    return (
      <div className="error">Error loading rocket list, please try again!</div>
    );
  }

  return (
    <div className="rocket-container">
      {rockets.map((rocket) => (
        <section className="rocket-section" key={rocket.rocket_id}>
          <div className="image">
            <img src={rocket.flickr_images[0]} alt="" />
          </div>
          <div className="rocket-details">
            <h1 className="name">{rocket.rocket_name}</h1>
            <p>
              {rocket.reserved ? (
                <span className="reserved">Reserved</span>
              ) : (
                null
              )}
              {rocket.description}
            </p>
            {rocket.reserved && (
              <button
                type="button"
                className="cancelation-btn"
                onClick={() => dispatch(cancelReservation(rocket.id))}
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                className="reserve-btn"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Rockets;
