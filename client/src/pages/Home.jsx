import React from "react";
import "./Home.css";
import bannerImage from "../assets/banner.jpg"; // Add this image to your assets folder
 import feature1 from "../assets/feature1.jpg";
 import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to Payout Automation System</h1>
          <p>Streamline your mentor payouts with ease and accuracy.</p>
          <a href="/register" className="btn-primary">Get Started</a>
        </div>
        <img src={bannerImage} alt="Banner" className="banner-img" />
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src={feature1} alt="Automated Tracking" />
            <h3>Automated Tracking</h3>
            <p>Track sessions and generate payouts without the hassle.</p>
          </div>
          <div className="feature-card">
            <img src={feature2} alt="Transparent Reports" />
            <h3>Transparent Reports</h3>
            <p>Instant insights into earnings and session performance.</p>
          </div>
          <div className="feature-card">
            <img src={feature3} alt="Secure Payouts" />
            <h3>Secure Payouts</h3>
            <p>Fast and secure payout processing for mentors.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
