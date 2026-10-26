import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Play } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-decoration hero-decoration-1" aria-hidden="true"></div>
        <div className="hero-decoration hero-decoration-2" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} aria-hidden="true" />
            <span>Ancient Wisdom, Modern Convenience</span>
          </div>
          <h1 id="hero-heading" className="hero-title">
            Ayurvedic Recipes,<br />Delivered Fresh
          </h1>
          <p className="hero-subtitle">
            Wholesome, dosha-balancing recipes with thoughtfully sourced ingredients. 
            Cook nourishing meals that heal from within.
          </p>
          <Link to="/recipes" className="hero-cta">
            Browse All Recipes
          </Link>
        </div>
      </section>

      <section className="videos-section" aria-labelledby="videos-heading">
        <header className="section-header">
          <div>
            <h2 id="videos-heading" className="section-title">Watch & Learn</h2>
            <p className="section-subtitle">
              See our Ayurvedic recipes come to life
            </p>
          </div>
        </header>
        <div className="videos-grid">
          <div className="video-card-wrapper">
            <div className="video-card" onClick={() => setActiveVideo(activeVideo === 'kitchari' ? null : 'kitchari')} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveVideo(activeVideo === 'kitchari' ? null : 'kitchari'); } }} aria-expanded={activeVideo === 'kitchari'}>
              <div className="video-media">
                {activeVideo === 'kitchari' ? (
                  <div className="video-player-in-media">
                    <iframe
                      src="https://www.youtube.com/embed/vgNC3eFQP_A?autoplay=1&rel=0"
                      title="Ayurvedic Kitchari Recipe"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <div className="video-thumbnail">
                      <img
                        src="https://img.youtube.com/vi/vgNC3eFQP_A/hqdefault.jpg"
                        alt="Ayurvedic Kitchari Recipe"
                        loading="lazy"
                      />
                      <div className="video-play-button">
                        <Play size={32} fill="white" aria-hidden="true" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="video-content">
                <h3 className="video-title">Ayurvedic Kitchari Recipe</h3>
                <p className="video-cta-text">{activeVideo === 'kitchari' ? 'Close Video' : 'Play Video'}</p>
              </div>
            </div>
            <Link to="/recipe/kitchari" className="recipe-link-under-video">View Recipe →</Link>
          </div>
          <div className="video-card-wrapper">
            <div className="video-card" onClick={() => setActiveVideo(activeVideo === 'rasam' ? null : 'rasam')} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveVideo(activeVideo === 'rasam' ? null : 'rasam'); } }} aria-expanded={activeVideo === 'rasam'}>
              <div className="video-media">
                {activeVideo === 'rasam' ? (
                  <div className="video-player-in-media">
                    <iframe
                      src="https://www.youtube.com/embed/beTciuqSFB4?autoplay=1&rel=0"
                      title="Peppery Tomato Rasam"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <div className="video-thumbnail">
                      <img
                        src="https://img.youtube.com/vi/beTciuqSFB4/hqdefault.jpg"
                        alt="Peppery Tomato Rasam"
                        loading="lazy"
                      />
                      <div className="video-play-button">
                        <Play size={32} fill="white" aria-hidden="true" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="video-content">
                <h3 className="video-title">Peppery Tomato Rasam</h3>
                <p className="video-cta-text">{activeVideo === 'rasam' ? 'Close Video' : 'Play Video'}</p>
              </div>
            </div>
            <Link to="/recipe/rasam" className="recipe-link-under-video">View Recipe →</Link>
          </div>
          <div className="video-card-wrapper">
            <div className="video-card" onClick={() => setActiveVideo(activeVideo === 'milk' ? null : 'milk')} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveVideo(activeVideo === 'milk' ? null : 'milk'); } }} aria-expanded={activeVideo === 'milk'}>
              <div className="video-media">
                {activeVideo === 'milk' ? (
                  <div className="video-player-in-media">
                    <iframe
                      src="https://www.youtube.com/embed/e8nm5kdfsbw?autoplay=1&rel=0"
                      title="Golden Milk (Haldi Doodh)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <div className="video-thumbnail">
                      <img
                        src="https://img.youtube.com/vi/e8nm5kdfsbw/hqdefault.jpg"
                        alt="Golden Milk (Haldi Doodh)"
                        loading="lazy"
                      />
                      <div className="video-play-button">
                        <Play size={32} fill="white" aria-hidden="true" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="video-content">
                <h3 className="video-title">Golden Milk (Haldi Doodh)</h3>
                <p className="video-cta-text">{activeVideo === 'milk' ? 'Close Video' : 'Play Video'}</p>
              </div>
            </div>
            <Link to="/recipe/golden-milk" className="recipe-link-under-video">View Recipe →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
