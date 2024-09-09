import React from 'react';
// Import the CSS file for styles

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h1>Welcome to Shortlet & Car Rental</h1>
        <p>Your one-stop solution for short-term rentals and car hire services.</p>
        <div className="cta-buttons">
          <a href="#listings" className="btn-primary">View Listings</a>
          <a href="#services" className="btn-secondary">Explore Services</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
