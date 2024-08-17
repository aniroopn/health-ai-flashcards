import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
        </nav>
        <div className="header-content">
          <h1 className="title">Unlock Your Health Potential</h1>
          <p className="subtitle">Learn healthy habits with AI-powered flashcards that adapt to your lifestyle.</p>
          <button className="get-started-button">Get Started</button>
        </div>
      </header>

      <section id="features" className="features">
        <div className="feature">
          <h2>Personalized Learning</h2>
          <p>Flashcards tailored to your needs and progress, making learning effective and fun.</p>
        </div>
        <div className="feature">
          <h2>AI-Powered Insights</h2>
          <p>Get real-time recommendations and insights to optimize your health journey.</p>
        </div>
        <div className="feature">
          <h2>Track Your Progress</h2>
          <p>Monitor your progress with detailed analytics and celebrate your achievements.</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Health AI Flashcards</h2>
        <p>Our platform leverages advanced AI technology to help you develop healthy habits and achieve your wellness goals. Whether you're looking to improve your diet, exercise more, or simply lead a healthier life, our flashcards are designed to guide you every step of the way.</p>
      </section>

      <footer id="contact" className="footer">
        <p>&copy; 2024 Health AI Flashcards. All rights reserved.</p>
        <p>Contact us: <a href="mailto:support@healthaiflashcards.com">aniroop.naladala@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default LandingPage;
