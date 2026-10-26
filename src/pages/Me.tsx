import { User, Leaf, Mail, LogIn, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Me.css';

export default function Me() {
  const { user, logout } = useAuth();

  return (
    <div className="me">
      <header className="me-header">
        <div className="me-avatar">
          <User size={32} aria-hidden="true" />
        </div>
        <div>
          <h1 className="me-title">{user ? user.name : 'Guest'}</h1>
          <p className="me-subtitle">{user ? user.email : 'Sign in to your account'}</p>
        </div>
      </header>

      {user ? (
        <button onClick={logout} className="me-logout-btn">
          <LogOut size={18} aria-hidden="true" />
          Sign Out
        </button>
      ) : (
        <Link to="/login" className="me-login-btn">
          <LogIn size={18} aria-hidden="true" />
          Sign In / Sign Up
        </Link>
      )}

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
