import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
  const { getItemCount } = useCart();
  const count = getItemCount();

  return (
    <header className="header" role="banner">
      <nav className="header-container" aria-label="Main navigation">
        <Link to="/" className="logo" aria-label="AyurvedicBites home">
          <div className="logo-icon">
            <Leaf size={22} aria-hidden="true" />
          </div>
          <span className="logo-text">AyurvedicBites</span>
        </Link>
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/recipes" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Recipes
          </NavLink>
        </div>
        <Link 
          to="/cart" 
          className="cart-button" 
          aria-label={`Shopping cart with ${count} ${count === 1 ? 'item' : 'items'}`}
        >
          <ShoppingCart size={22} aria-hidden="true" />
          {count > 0 && (
            <span className="cart-badge" aria-hidden="true">
              {count > 99 ? '99+' : count}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
