import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Building stellar websites for early startups</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="hero-buttons">
              <button>View our work</button>
              <button>View Pricing →</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="hero-image.png" alt="Hero Image" />
          </div>
        </section>

        <section className="how-we-work">
          <div className="container">
            <h2>How we work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="features-title">Features</h2>
            <div className="features-content">
              <h3 className="features-subtitle">Design that solves problems, one product at a time</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <h4 className="feature-title">Uses Client First</h4>
                  <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature-item">
                  <h4 className="feature-title">Two Free Revision Rounds</h4>
                  <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature-item">
                  <h4 className="feature-title">Template Customization</h4>
                  <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default HomePage;

