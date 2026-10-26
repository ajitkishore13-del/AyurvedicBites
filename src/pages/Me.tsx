import { User, Leaf, Mail } from 'lucide-react';
import './Me.css';

export default function Me() {
  return (
    <div className="me">
      <header className="me-header">
        <div className="me-avatar">
          <User size={32} aria-hidden="true" />
        </div>
        <div>
          <h1 className="me-title">My Account</h1>
          <p className="me-subtitle">AyurvedicBites</p>
        </div>
      </header>

      <section className="me-section">
        <h2 className="me-section-title">About</h2>
        <div className="me-card">
          <div className="me-row">
            <Leaf size={18} aria-hidden="true" />
            <div>
              <div className="me-row-title">Ancient Wisdom, Modern Convenience</div>
              <div className="me-row-sub">Wholesome Ayurvedic recipes</div>
            </div>
          </div>
          <div className="me-row">
            <Mail size={18} aria-hidden="true" />
            <div>
              <div className="me-row-title">Support</div>
              <div className="me-row-sub">hello@ayurvedicbites.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
