import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <main className="landing-page">
      <div className="landing-overlay" />
      <section className="hero-brand">
        <span className="leaf-logo" aria-hidden="true">🌿</span>
        <p className="eyebrow">Welcome to</p>
        <h1>Paradise Nursery</h1>
        <div className="short-rule" />
        <p className="tagline">Where Green Meets Serenity</p>
        <Link to="/plants" className="primary-button">Get Started</Link>
      </section>
      <section className="about-card" aria-labelledby="about-title">
        <h2 id="about-title">Welcome to Paradise Nursery</h2>
        <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide high-quality houseplants that enhance your space and support a healthier, calmer lifestyle.</p>
        <p>Explore air-purifying plants, aromatic herbs, and easy-care favorites selected for homes and offices. Every plant is chosen with care so new and experienced plant lovers can grow with confidence.</p>
        <p>Join us in creating greener spaces, one beautiful plant at a time.</p>
      </section>
    </main>
  );
}
